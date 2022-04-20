<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Hotel;

class UserController extends Controller
{
    public function home(){
        return view('user.index');
    }

     public function search(Request $req){

         $Hotels = Hotel::where('req', 'Approved')
         ->where('location', $req -> location)->get();
         return view('user.hotels')->with('showHotelList', $Hotels);
        
     }

}
