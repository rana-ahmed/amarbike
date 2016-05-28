<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::group(array('prefix' => 'api/v1'), function()
{
    Route::resource('driver', 'DriverController');
    Route::post('driver/{id}', 'DriverController@update');
    Route::post('driver/setbike/{id}', 'DriverController@assignBike');
    Route::post('driver/removebike/{id}', 'DriverController@removeBike');

    Route::resource('bike', 'BikeController');
    Route::post('bike/{id}', 'BikeController@update');

    Route::resource('user', 'UserController');
    Route::post('user/{id}', 'UserController@update');
});
