<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use\App\Hotel;
use\App\Place;

class UserHotelsController extends Controller
{
    public function showHotel(){
        $Hotels = Hotel::where('req', 'Approved')->get();
        return response()->json($Hotels);
        //return view('user.hotels')->with('showHotelList', $Hotels);
    }

    public function searchHotel($district){

        $Hotels = Hotel::where('req', 'Approved')
        ->where('location', $district)->get();
        return view('user.hotels')->with('showHotelList', $Hotels);
    }
}

//$roombook = Roombook::find($id); 
//$place = Place:: where('id', $roombook->district)->first();
//$hotel= Hotel:: where('id', $roombook->location)->first();


