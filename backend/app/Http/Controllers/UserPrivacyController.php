<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use\App\Policy;

class UserPrivacyController extends Controller
{
    public function index(Request $req){
        $Policy = Policy::where('id', 1)->first();
        return response()->json($Policy);
        //return view('user.privacy_policy')->with('policy', $Policy);
    }
}
