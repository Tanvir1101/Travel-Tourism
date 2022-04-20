<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use\App\Place;

class UserDestinationController extends Controller
{
    public function showdestination(){
        $Places = Place::all();
        return response()->json($Places);
        //return view('user.destination')->with('showDestinationList', $Places);
    }

    public function details($id){
        $place = Place::find($id);
        return response()->json($Places);
        //return view('user.destination_details')->with('destination', $place);
    }
    
}