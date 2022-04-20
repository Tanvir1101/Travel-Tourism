<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App;
use PDF;
use App\Transaction;


class ServicePdfMakerController extends Controller
{
    function hotelpdf()
    {
        $transactions = Transaction::where('receiver_id', session()->get('id'))
        ->where('receiver', session()->get('type'))->get();

        $pdf = PDF::loadView('hotelDashboard/transactionPDF', ['transactions'=> $transactions])
        ->setPaper('a4','landscape');
        return $pdf->download('report.pdf');
    }

    function flightpdf()
    {
        $transactions = Transaction::where('receiver_id', session()->get('id'))
        ->where('receiver', session()->get('type'))->get();

        $pdf = PDF::loadView('flightDashboard/transactionPDF', ['transactions'=> $transactions])
        ->setPaper('a4','landscape');
        return $pdf->download('report.pdf');
    }

    function carpdf()
    {
        $transactions = Transaction::where('receiver_id', session()->get('id'))
        ->where('receiver', session()->get('type'))->get();

        $pdf = PDF::loadView('carDashboard/transactionPDF', ['transactions'=> $transactions])
        ->setPaper('a4','landscape');
        return $pdf->download('report.pdf');
    }


}
