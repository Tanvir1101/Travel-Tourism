<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use\App\About;

class UserAboutController extends Controller
{
    public function index(Request $req){
        $about = About::where('id', 1)->first();
        return response()->json($about);
        //return view('user.about')->with('about', $about);
    }
    
}
