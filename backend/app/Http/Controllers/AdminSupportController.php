<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Support;

class AdminSupportController extends Controller
{
    public function index(){
        $supports = Support::all();
        return response()->json($supports);
        // return view('admin.supportList')->with('supports', $supports);
    }

    public function supportDelete($id){

        $supports = Support::find($id);
        return view('admin.supportDelete')->with('supports', $supports);
    }

    public function supportDestroy(Request $req){
        Support::destroy($req -> id);
        // return redirect()->route('AdminSupport.index');
    }
}
