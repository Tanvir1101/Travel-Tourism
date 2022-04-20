<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserServiceController extends Controller
{
    public function index(){
        return view ('user.services');
    }
}
