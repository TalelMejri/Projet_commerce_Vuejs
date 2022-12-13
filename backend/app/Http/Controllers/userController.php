<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRequest;
use App\Models\User;
use Illuminate\Http\Request;

class userController extends Controller
{
	public function __construct()
	{

	}

  /*public function create(StoreRequest $request){

    $file_name=time().'_'.$request->file->getClientOriginalName();
    $file_path=$request->file('file')->storeAs('uploads',$file_name,'public');

    $user=User::create(

         [
            'name'=>$request->nom,
            'email'=>$request->email,
            'date_naissance'=>$request->date_naissance,
            "avatar"=>'/storage/'.$file_path,
            'password'=>$request->password,
            'role'=>0
         ]

        );
    return  response()->json(["data"=>$user],200);
  }
*/

  public function get_all(){
    $user=User::all();
    if(!$user){
        return  response()->json(["message"=>"user not found"]);
    }
    return response()->json(["data"=>$user],200);
  }

  public function count_user(){
    $user=User::where('role',0)->count();
    return response()->json(["data"=>$user],200);
  }

  public function get_all_user(){
    $user=User::where('role',0)->get();
    if(!$user){
        return response()->json(["message"=>"no users yet"]);
    }
    return response()->json(["data"=>$user],200);
  }

  public function search($search){
    $user=User::where("name",'like','%'.$search.'%')->get();
       if(!$user){
            return response()->json(['message'=>'User Not Found'],400);
        }else{
            return  response()->json(['data'=>$user], 200);
        }
  }


 public function delete_user(int $id){
    $user=User::find($id);
     if(!$user){
        return response()->json(["message"=>"no user found"]);
     }
    $user->delete();
    return response()->json(["message"=>"delete with success"]);
 }


}
