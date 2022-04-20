<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\EmpGuidelineRequest;
use App\Guideline;
class EmployeeGuidelinesController extends Controller
{
    public function index(){

        $guideline = Guideline::where('id', 1)->first();
        return response()->json($guideline);
       // return view('employee.guideline')->with('guideline', $guideline);
    }

    public function form($id){

        $guideline = Guideline::find($id);
        return view('employee.guidelineForm')->with('guideline', $guideline);
    }

    public function edit(Request $req){

        $guideline = Guideline::find($id);
        $guideline-> guideline = $req->guideline;
        $guideline->save();
       // return view('employee.guideline')->with('guideline', $guideline);
    }

}
