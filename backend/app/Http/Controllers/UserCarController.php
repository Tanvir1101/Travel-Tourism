<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use\App\Carbook;

class UserCarController extends Controller
{
    public function index(){
        $carbookings = Carbook::where('req', 'Approved')->get();
        return response()->json($carbookings);
        //return view('user.car_booking')->with('CarBookingsList', $carbookings);
    }
}