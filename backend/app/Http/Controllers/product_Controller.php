<?php
namespace App\Http\Controllers;

use App\Models\product;
use Illuminate\Http\Request;

class product_Controller extends Controller
{
    public function create_product(request $request){
        $file_name=time().'_'.$request->file->getClientOriginalName();
        $file_path=$request->file('file')->storeAs('uploads',$file_name,'public');
        $user=product::create(
             [
                "name_product"=>$request->Name_Product,
                "color"=>$request->color,
                "type"=>$request->type,
                "prix"=>$request->prix,
                "Quantity"=>$request->Quantity,
                "file"=>'/storage/'.$file_path,
             ]
            );
        return  response()->json(["data"=>$user],200);
      }

      public function count_product(){
            $product=product::count();
            return response()->json(["data",$product],200);
      }

      public function get_all_product(Request $request){
        if(isset($request->search)){
            $product=product::where("name_product",'like','%'.$request->search.'%')->paginate(3);
        }else{
            $product=product::paginate(2);
        }
         return response()->json($product, 200);
      }

      public function get_all_product_user(){
        $product=product::get();
        if(!$product){
            return response()->json(['message'=>"product not found"]);
        }
        return response()->json(['data'=>$product]);

      }

      public function delete_product(int $id){
        $product=product::find($id);
        if(!$product){
            return response()->json(['message'=>"product not found"]);
        }
        $product->delete();
        return response()->json(['message'=>'product delete with success']);
      }

      public function find_product(int $id){
        $product=product::find($id);
        if(!$product){
            return response()->json(['message'=>"product not found"]);
        }
        return response()->json(['data'=>$product]);
      }


      public function update_product(int $id,request $request){
        if($request->upload_avatar==1){
            $file_name=time().'_'.$request->file->getClientOriginalName();
            $file_path=$request->file('file')->storeAs('uploads',$file_name,'public');
        }
        $product=product::find($id);
        if(!$product){
            return response()->json(["message"=>"product not found"],404);
        }else{
            if($request->upload_avatar==1){
                $product->update(
                    [
                        "name_product"=>$request->Name_Product,
                        "color"=>$request->color,
                        "type"=>$request->type,
                        "prix"=>$request->prix,
                        "file"=>'/storage/'. $file_path,
                        "Quantity"=>$request->Quantity,
                     ]
                    );
            }else{
                $product->update(
                    [
                        "name_product"=>$request->Name_Product,
                        "color"=>$request->color,
                        "type"=>$request->type,
                        "prix"=>$request->prix,
                        "Quantity"=>$request->Quantity,
                    ]
                    );
            }
            return response()->json(['data'=>$product],200);
        }
      }

     public function decremente_quantity(request $request){
        $product=product::find($request->id);
        $product->update(
             [
                "Quantity"=>($product->Quantity - $request->cart),
             ]
         );
        return response()->json(['data'=>$product],200);
     }

}
