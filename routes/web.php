<?php

use App\Http\Controllers\SkinController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('home-page');
})->name('home');

Route::get('/news', function () {
    return Inertia::render('news-page');
});

Route::get('/profile', function () {
    return Inertia::render('profile-page');
})->middleware(['auth', 'verified'])->name('profile');

Route::post('/skinupload', [SkinController::class, 'uploadSkin'])->middleware(['auth', 'verified'])->name('skinupload');;

require __DIR__ . '/auth.php';
