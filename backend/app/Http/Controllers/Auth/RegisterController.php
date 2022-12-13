<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreRequest;
use App\Models\User;
//use Illuminate\Http\Request;

class RegisterController extends Controller
{
    public function signup(StoreRequest  $request)
    {

        $file_name = time() . '_' . $request->file->getClientOriginalName();
        $file_path = $request->file('file')->storeAs('uploads', $file_name, 'public');
        $user = User::create(
            [
                'name' => $request->nom,
                'email' => $request->email,
                'date_naissance' => $request->date_naissance,
                "avatar" => '/storage/' . $file_path,
                'password' => bcrypt($request->password),
                'role' => 0
            ]

        );

        $success['token'] =  $user->createToken('MyAuthApp')->plainTextToken;
        $success['name'] =  $user->name;
        $success['user'] = $user;
        return response()->json($success, 200);

    }

}
