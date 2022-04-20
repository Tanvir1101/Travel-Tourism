<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Car;
use App\Carbook;

class UserConCarController extends Controller
{
    public function carBook($id){
        $car = Car::find($id);
        return view('user.confirmcar')->with('car', $car);
    }

    
    public function Addcarbook(Request $req){

        $carbook = new Carbook;
        
        $carbook -> user_id = $req->user_id;
        $carbook -> car_id = $req->car_id;
        $carbook -> fromloc = $req->fromloc;
        $carbook -> toloc = $req->toloc;
        $carbook -> fromdate = $req->fromdate;
        $carbook -> todate = $req->todate;
        $carbook -> req = 'Pending';
        $carbook -> save();

        //return redirect()->route('userCarList.showCarList');
    }
}
