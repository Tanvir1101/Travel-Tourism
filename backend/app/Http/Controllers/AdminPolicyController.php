<?php

namespace App\Http\Controllers;

use App\Http\Requests\pRequest;
use Illuminate\Http\Request;
use App\Policy;

class AdminPolicyController extends Controller
{
    public function index(){
        $policy = Policy::where('id', 1)->first();
        return response()->json($policy);
        // return view('admin.policy')->with('policy', $policy);
    }

    public function form($id){

        $policy = Policy::find($id);
        return view('admin.policyForm')->with('policy', $policy);
    }

    public function edit(Request $req){

        $policy = Policy::find($req -> id);
        $policy-> policy = $req->policy;
        $policy->save();
        // return view('admin.policy')->with('policy', $policy);
    }
}
