<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\EmpFaqRequest;
Use App\Faq;
class EmployeeFaqController extends Controller
{
    public function faq(){
        $faqs = Faq::all();
        return response()->json($faqs);
        //return view('employee.faq')->with('faqs',$faqs);
    }

    public function faqAdd(Request $req){
       $faq = new Faq;
       $faq -> que = $req->que;
       $faq -> ans = $req->ans;
       $faq -> save();
    }

    public function faqDelete($id){
        
        $faq = Faq::find($id);
         return view('employee.faqDelete')->with('faq', $faq);
    }
    
    public function faqDestroy(Request $req){
       Faq::destroy($req -> id);
       
    }
    
}
 