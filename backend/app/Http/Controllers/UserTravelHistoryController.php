<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use\App\Packagebook;

class UserTravelHistoryController extends Controller
{
    public function index(){
        $histories = Packagebook::where('status', 'Completed')->get();
        return response()->json($histories);
        //return view('user.history')->with('showHistoryList', $histories);
    }
}
