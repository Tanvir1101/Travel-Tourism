<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\EmpAdsRequest;
use App\Http\Requests\EmpPromoRequest;
use App\Promo;
use App\Ad;
class EmployeeAdvertisementController extends Controller
{
    public function advertisement(){

        $ads = Ad::all();
        return response()->json($ads);
    }

    public function advertisementAdd(Request $req){

        
        $ads = new Ad;
        $ads -> message = $req->message;
        $ads -> save();
        
    }

    public function adsDelete($id){
        
        $ads = Ad::find($id);
         return view('employee.adsDelete')->with('ads', $ads);
    }
    
    public function advertisementDestroy(Request $req){
        $ads=Ad::find($req->id);
        $ads->delete();
    }


//promo =>

    public function promo(){
        
        $promos = Promo::all();
       return response()->json($promos);
    }

    public function promoAdd(Request $req){


        

        $promos = new Promo;
        $promos -> image = "img.png";
        $promos -> message = $req->message;
        $promos -> save();
        
    }

    public function promoDelete($id){
        
        $promos = Promo::find($id);
         return view('employee.promoDelete')->with('promos', $promos);
    }
    
    public function promoDestroy(Request $req){

        $promos=Promo::find($req->id);
        $promos->delete();
    }

    
}
