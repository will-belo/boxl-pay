<?php

namespace App\Http\Controllers\PaymentStatus;

use App\Models\Payment;
use App\Http\Controllers\PaymentStatus\State;

class Pending implements State
{
    public function handle(Payment $payment)
    {
        $payment->update(['transaction_status' => 'pending']);
    }
}
