<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Support;
class EmployeeSupportController extends Controller
{
    public function support(){
        $support = Support::all();
        return response()->json($support);
    }

    public function supportDelete($id){
        
        $support = Support::find($id);
         return view('employee.supportDelete')->with('supports', $support);
    }
    
    public function supportDestroy(Request $req){
        Support::destroy($req -> id);
    }
}
