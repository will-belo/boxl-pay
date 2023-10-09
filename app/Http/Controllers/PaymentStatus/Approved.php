<?php

namespace App\Http\Controllers\PaymentStatus;

use App\Models\Order;
use App\Models\Payment;
use Illuminate\Support\Facades\Ideris;
use App\Http\Controllers\PaymentStatus\State;

class Approved implements State
{
    public function handle(Payment $payment)
    {
        $updateData = array(
            'orderId' => $payment->order->code,
            'statusId' => 1008,
            'orderStatus' => 'Separação'
        );

        Ideris::put('/order',$updateData);

        Order::find($payment->order->id)->update(['order_status' => 'APROVADO']);

        Payment::where('transaction_id', $payment->transaction_id)->update(['transaction_status' => 'approved']);
    }
}
