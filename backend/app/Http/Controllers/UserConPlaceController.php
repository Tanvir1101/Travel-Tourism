<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserConPlaceController extends Controller
{
    public function index(){
        return view('user.confirm_destination');
    }
}
