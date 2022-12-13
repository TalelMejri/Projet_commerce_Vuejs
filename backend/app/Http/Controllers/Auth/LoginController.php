<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function signin(Request $request)
    {

         //The attempt method accepts an array of key / value pairs as its first argument.
         // The values in the array will be used to find the user in your database table

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            //Auth Get the currently authenticated user
            $authUser = Auth::user();
            $success['token'] =  $authUser->createToken('MyAuthApp')->plainTextToken;
            $success['name'] =   $authUser->name;
            $success['isAdmin'] = false;
            $success['isClient'] = false;
            $success['user'] =   $authUser;

            if ($authUser->role == 0) {
                $success['isClient'] = true;
            } else if ($authUser->role==1) {
                $success['isAdmin'] = true;
            }

            return response()->json($success, 200);
        } else {
            return response()->json(["message"=>"user not found"], 401);
        }
    }
}
