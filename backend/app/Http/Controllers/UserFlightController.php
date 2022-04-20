<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use\App\Airbook;

class UserFlightController extends Controller
{
    public function index(){

        $flightbookings = Airbook::where('req', 'Approved')->get();
        return response()->json($flightbookings);
        //return view('user.flight_booking')->with('FlightBookingsList', $flightbookings);
    }
    
}
