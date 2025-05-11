<?php

use App\Http\Controllers\Api\AuthenticatedSessionController;
use App\Http\Controllers\Api\RegisteredUserController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->post('/login', [AuthenticatedSessionController::class, 'login']);
Route::middleware('auth:sanctum')->group(function() {
  Route::get('/user', [AuthenticatedSessionController::class, 'user']);
});
Route::middleware('guest')->post('/register', [RegisteredUserController::class, 'store']);