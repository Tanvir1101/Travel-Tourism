<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Air;
use App\Airbook;

class UserConFlightController extends Controller
{
    public function flightBook($id){
        $flight = Air::find($id);
        return view('user.confirmflight')->with('flight', $flight);
    }

    
    public function Addflightbook(Request $req){

        $airbook = new Airbook;
        
        $airbook -> user_id = $req->user_id;
        $airbook -> air_id = $req->air_id;
        $airbook -> fromloc = $req->fromloc;
        $airbook -> toloc = $req->toloc;
        $airbook -> fromdate = $req->fromdate;
        $airbook -> todate = $req->todate;
        $airbook -> req = 'Pending';
        $airbook -> save();

        //return redirect()->route('userFlightList.adFlight');
    }
}
