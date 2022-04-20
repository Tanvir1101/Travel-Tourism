<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Air;

class UserFlightListController extends Controller
{
    public function showFlightList(){
        $flights = Air::all();
        return response()->json($flights);
        //return view('user.flight_list')->with('ADFlightList', $flights);
    }
}
