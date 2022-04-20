<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use\App\Guideline;

class UserGuideLineController extends Controller
{
    public function showGuideline(Request $req){
        $Guidelines = Guideline::where('id', 1)->first();
        return response()->json($Guidelines);
        //return view('user.user_guideline')->with('guideline', $Guidelines);
    }
}
