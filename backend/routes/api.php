<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\product_Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\userController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



Route::group(['prefix' => '/auth'], function () {
    Route::post('/register',[RegisterController::class,'signup']);
    Route::post('/login',[LoginController::class,'signin']);
});

Route::group(['prefix' => '/user_made'], function () {
    Route::post('/create',[userController::class,'create']);
    Route::get('/',[userController::class,'get_all']);
    Route::get('/count',[userController::class,'count_user']);
    Route::get('/get_all_user',[userController::class,'get_all_user']);
    Route::delete('/delete_user/{id}',[userController::class,'delete_user']);
    Route::get('/search/{search_champ}',[userController::class,'search']);
});

Route::post('/addProduct',[product_Controller::class,'create_product']);
Route::delete('/delete_product/{id}',[product_Controller::class,'delete_product']);
Route::get('/count_product',[product_Controller::class,'count_product']);
Route::get('/get_all_product',[product_Controller::class,'get_all_product']);
Route::get('/find_product/{id}',[product_Controller::class,'find_product']);
Route::post('/update_product/{id}',[product_Controller::class,'update_product']);
Route::get('/get_all_product_user',[product_Controller::class,'get_all_product_user']);
Route::post('/decremente_quantity',[product_Controller::class,'decremente_quantity']);
