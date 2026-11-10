<?php


use App\Http\Controllers\AuthenticationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('/login', [AuthenticationController::class, 'login']);

Route::middleware('auth:sanctum')->group(function() {        
    Route::get('/me', function (Request $request) { return $request->user(); });
    Route::post('/logout', [AuthenticationController::class, 'logout']);
});