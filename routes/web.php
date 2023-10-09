<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\CreditCard\CallbackCreditCard;
use App\Http\Controllers\{ DashboardController, WalletController, PayController, ProductController, SkuController};

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
    return Inertia::render('Auth/Login');
});

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::post('/process_payment', [CallbackCreditCard::class, 'handle'])->name('saveCard');

Route::middleware('auth')->group(function () {
    Route::post('/pay', [PayController::class, 'pay'])->name('pay');
    Route::resource('/wallet', WalletController::class);
    Route::resource('/products', ProductController::class);
    Route::resource('/skuadmin', SkuController::class);
});

require __DIR__.'/auth.php';
