<?php

use App\Http\Controllers\NewsController;
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

Route::get('/news', [NewsController::class, 'index'])->name('news');

Route::get('/download', function () {
    return Inertia::render('download-page');
})->name('download');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/profile', function () {
        return Inertia::render('profile-page');
    })->name('profile');
    Route::post('/skinupload', [SkinController::class, 'uploadSkin'])->name('skinupload');

    //admin stuff
    Route::middleware('admin')->group(function () {
        //news
        Route::get('/admin/news', [NewsController::class, 'adminIndex'])->name('news.admin');
        Route::post('/admin/news/create', [NewsController::class, 'create'])->name('news.create');
        Route::post('/admin/news/edit', [NewsController::class, 'update'])->name('news.update');
        Route::post('/admin/news/delete', [NewsController::class, 'delete'])->name('news.delete');
    });
});


require __DIR__ . '/auth.php';
