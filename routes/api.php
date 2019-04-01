<?php


Route::apiresource('/question','QuestionController');
Route::apiresource('/category','CategoryController');
Route::apiresource('/question/{question}/reply','ReplyController');

Route::post('/like/{reply}','LikeController@LikeIt');
Route::delete('/like/{reply}','LikeController@UnLikeIt');
Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

});




