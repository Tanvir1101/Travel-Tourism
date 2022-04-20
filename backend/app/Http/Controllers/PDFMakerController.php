<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App;
use PDF;
use App\Income;
use App\Transaction;

class PDFMakerController extends Controller
{
    function gen()
    {
		$incomes = Income::all();
        $pdf = PDF::loadView('Admin/incomePDF', ['incomes'=> $incomes])
        ->setPaper('a4','landscape');
        return $pdf->download('report.pdf');
    }

    function gen2()
    {
		$transactions = Transaction::all();
        $pdf = PDF::loadView('Admin/transactionPDF', ['transactions'=> $transactions])
        ->setPaper('a4','landscape');
        return $pdf->download('report.pdf');
    }
}
