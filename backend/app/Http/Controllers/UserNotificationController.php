<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Ad;
use App\Promo;


class UserNotificationController extends Controller
{
    public function index(){
        $promo = Promo::all();
        $ads = Ad::all();
        return response()->json($promo);
        
        //return view('user.notifications')->with('ADPromoList', $promo)
                                         //->with('ADAdsList', $ads);
                                        
    }
}