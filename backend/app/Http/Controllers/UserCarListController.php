<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Car;

class UserCarListController extends Controller
{
    public function showCarList(){
        $cars = Car::all();
        return response()->json($cars);
        //return view('user.car_list')->with('showCarList', $cars);
    }
}
