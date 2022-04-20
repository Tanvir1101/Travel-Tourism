<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\EmpIncomeRequest;
use App\Http\Requests\EmpTransactionRequest;
use App\Income;
use App\Transaction;
use Carbon\Carbon;
use PDF;
class EmployeeAccountController extends Controller
{
    public function addStatement(){
        return view('employee.StatementAdd');
    }

    public function statementAdded(Request $req){
            $income = new Income;
            $income->month = $req->month;
            $income->revenue = $req->revenue;
            $income->cost = $req->cost;
            $income->profit = ($req->revenue)-($req->cost);
            $income-> save();
    }


    public function statement(){
        $incomes = Income::all();
        return response()->json($incomes);
        
    }



    public function addTransaction(){
        return view('employee.TransactionAdd');
    }

    function genStatement()
    {

		$incomes = Income::all();
        $pdf = PDF::loadView('employee.statementGen', ['incomes'=> $incomes])
        ->setPaper('a4','landscape');
        return $pdf->download('Statement.pdf');
    }


    public function transactionAdded(Request $req){
        $transaction = new Transaction;
        $transaction->date = Carbon::now();
        $transaction->receiver_id = $req->receiver_id;
        $transaction->receiver = $req->receiver;
        $transaction->username = $req->username;
        $transaction->description = $req->description;
        $transaction->amount = $req->amount;
        $transaction-> save();
    }


    public function transaction(){
        $transactions = Transaction::all();
        return response()->json($transactions);
        
    }
 
    function genTransaction()
    {

		$transactions = Transaction::all();
        $pdf = PDF::loadView('employee.transactionGen', ['transactions'=> $transactions])
        ->setPaper('a4','landscape');
        return $pdf->download('Transaction.pdf');
    }

}
