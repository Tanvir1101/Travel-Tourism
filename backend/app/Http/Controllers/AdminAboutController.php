<?php

namespace App\Http\Controllers;

use App\Http\Requests\aRequest;
use Illuminate\Http\Request;
use App\About;

class AdminAboutController extends Controller
{
    public function index(){
        $about = About::where('id', 1)->first();
        return response()->json($about);
        // return view('admin.about')->with('about', $about);
    }

    public function form($id){

        $about = About::find($id);
        return view('admin.aboutForm')->with('about', $about);
    }

    public function edit(Request $req){

        $about = About::find($req->id);
        $about-> about = $req->about;
        $about->save();
        // return view('admin.about')->with('about', $about);
    }
}
