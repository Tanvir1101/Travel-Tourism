<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Transport;
use App\Carbook;
use App\Airbook;
use App\User;
use App\Car;
use App\Air;

class AdminTransportController extends Controller
{
    public function adTransport(){
        $transports = Transport::where('req', 'Pending')->get();
        return response()->json($transports);
        // return view('admin.ADTransport')->with('transports', $transports);
    }

    public function transportApprove($id){
        $transport = Transport::find($id);
        return view('admin.transportApprove')->with('transport', $transport);
    }

    public function transportAdd(Request $req){
        $transport = Transport::find($req -> id);
        $transport->req = 'Approved';
        $transport->save();

        //return redirect()->route('adminTransport.adTransport');
    }

    public function transportDecline($id){
        $transport = Transport::find($id);
        return view('admin.transportDecline')->with('transport', $transport);
    }

    public function transportRemove(Request $req){
        $transport = Transport::find($req -> id);
        $transport->req = 'Declined';
        $transport->save();

        // Transport::destroy($id);
        // return redirect()->route('adminTransport.adTransport');
    }


    public function carList(){
        $cars = Transport::where('type', 'Car')
                            ->where('req', 'Approved')->get();
        // return view('admin.carList')->with('cars', $cars);
        return response()->json($cars);
    }

    public function carDelete($id){
        $car = Transport::find($id);
        return view('admin.carDelete')->with('car', $car);

    }

    public function carDestroy($id){
        Transport::destroy($id);
        return redirect()->route('adminTransport.carList');
    }



    public function flightList(){
        $flights = Transport::where('type', 'Flight')
                            ->where('req', 'Approved')->get();
        // return view('admin.flightList')->with('flights', $flights);
        return response()->json($flights);
    }

    public function flightDelete($id){
        $flight = Transport::find($id);
        return view('admin.flightDelete')->with('flight', $flight);
    }

    public function flightDestroy($id){
        Transport::destroy($id);
        return redirect()->route('adminTransport.flightList');
    }




    public function carBookingList(){
        $carbooks = Carbook::all();
        return response()->json($carbooks);
        // return view('admin.carBookingList')->with('carbooks', $carbooks);
    }


    public function carBookingDetail($id){
        $carbook = Carbook::find($id); 
        $car = car:: where('id', $carbook->car_id)->first();
        $user = User::where('id', $carbook->user_id)->first();

        return view('admin.carBookingDetail')
                                      ->with('car', $car)
                                      ->with('user', $user);
    }


    public function flightBookingList(){
        $flightbooks = Airbook::all();
        return response()->json($flightbooks);
        // return view('admin.flightBookingList')->with('flightbooks', $flightbooks);
    }


    public function flightBookingDetail($id){
        $flightbook = Airbook::find($id); 
        $air = air:: where('id', $flightbook->air_id)->first();
        $user = User::where('id', $flightbook->user_id)->first();

        return view('admin.flightBookingDetail')
                                      ->with('air', $air)
                                      ->with('user', $user);
    }

}
