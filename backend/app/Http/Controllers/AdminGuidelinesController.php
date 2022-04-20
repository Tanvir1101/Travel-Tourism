<?php

namespace App\Http\Controllers;

use App\Http\Requests\gRequest;
use Illuminate\Http\Request;
use App\Guideline;

class AdminGuidelinesController extends Controller
{
    public function index(){

        $guideline = Guideline::where('id', 1)->first();
        return response()->json($guideline);
        // return view('admin.guideline')->with('guideline', $guideline);
    }

    public function form($id){

        $guideline = Guideline::find($id);
        return view('admin.guidelineForm')->with('guideline', $guideline);
    }

    public function edit(Request $req){

        $guideline = Guideline::find($req->id);
        $guideline-> guideline = $req->guideline;
        $guideline->save();
        // return view('admin.guideline')->with('guideline', $guideline);
    }
}
