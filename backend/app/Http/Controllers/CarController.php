<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddCarRequest;
use App\Http\Requests\CarEditRequest;
use App\Http\Requests\CarTypeRequest;
use App\Http\Requests\CarSupportRequest;
use App\Http\Requests\CarProfileRequest;

use Illuminate\Http\Request;
use App\Car;
use App\Carbook;
use App\User;
use App\Support;
use App\Transport;
use App\Review;
use App\Transaction;


class CarController extends Controller
{
    public function index(Request $req){
        
        $carCount = Car::all()->count();
        $carBookCount = Carbook::where('req','Approved')->count();
        $carPendingCount = Carbook::where('req','Pending')->count();
        $carAvailable = Car::where('availability','Available')->count();
        $carLuxury = Car::where('type','Luxury')->count();
        $carStandard = Car::where('type','Standard')->count();
        $reviewCount = Review::where('service_type', 'Car')->count();

        return [
            'carCount' => $carCount,
            'carBookCount' => $carBookCount,
            'carAvailable'=> $carAvailable,
            'carLuxury'=> $carLuxury,
            'carStandard'=> $carStandard,
            'reviewCount' => $reviewCount,
            'carPendingCount' => $carPendingCount,
        ];

        // return view('carDashboard.home')->with('carCount', $carCount)
        //                                ->with('carBookCount', $carBookCount)
        //                                ->with('reviewCount', $reviewCount);
                            
    }

    public function managecar(){

        $car = Car::all();
        return response()->json($car);
        // return view('carDashboard.managecar')->with('car', $car);
    }

    public function addcar(){
        return view('carDashboard.addcar');
    }

    public function addcarVerify(Request $req){

        // if($req->hasFile('image')){

        //     $file = $req->file('image');
        //     echo "File Name: ".$file->getClientOriginalName()."<br>";
        //     echo "File Extension: ".$file->getClientOriginalExtension()."<br>";
        //     echo "File Mime Type: ".$file->getMimeType()."<br>";
        //     echo "File Size: ".$file->getSize()."<br>";

        //     if($file->move('upload','car'.$req->title.'.'.$file->getClientOriginalExtension())){
        //         echo "success";
        //     }else{
        //         echo "error";
        //     }
        // }
        //     $img='car'.$req->title.'.'.$file->getClientOriginalExtension();

            $car = new Car;
            $car -> title = $req->title;
            $car -> model = $req->model; 
            $car -> driver = $req->driver;
            $car -> type = $req->type;
            $car -> fare = $req->fare;
            $car -> availability = 'Available';
            $car -> image = 'img.jpg';
            $car->save();
            // return redirect()->route('car.addcar');

    }

    //car edit 
    public function caredit($id){
         $car = Car::find($id);
         return view('carDashboard.editcar')->with('car', $car);
    }

    
    //car edit confirm
    public function careditconfirm(Request $req){
        
        $car = Car::find($req->id);
        $car->title = $req->title;
        $car->model = $req->model;
        $car->driver = $req->driver;
        $car->save();

        // $car =  Car::all();

        // return response()->json($req);
        // return redirect()->route('car.managecar');
    }

    //car delete confirmation
    public function cardelete($id){
        $car = Car::find($id);
         return view('carDashboard.cardelete')->with('car', $car);
    }

    //car delete
    public function cardestroy(Request $req){

        $car=Car::destroy($req->id);
        $car->delete();
        // return redirect()->route('car.managecar');
    }

    //car type
    public function cartype(){

        $cars = Car:: all();
        return response()->json($cars);
        // return view('carDashboard.cartype')->with('cars', $cars);
    }

    //car type confirmation
    public function cartypeconfirm(Request $req){
        
        $car = Car::where('title', $req->title)->first();
        $car->title = $req->title;
        $car->fare = $req->fare;
        $car->type = $req->type;
        $car->save();
        // return redirect()->route('car.cartype');

    }

    //car availability
    public function caravailability(){
        
        $cars = Car:: all();
        return response()->json($cars);
        // return view('carDashboard.caravailability')->with('cars', $cars);
    }


    //car availability confirm
    public function caravailabilityconfirm(Request $req){
        
        $car = Car::where('title', $req->title)->first();
        $car->title = $req->title;
        $car->availability = $req->availability;
        $car->save();
        // return redirect()->route('car.caravailability');

    }

    //car booking pending list
    public function ADcarBookList(){

        $carbook = Carbook::where('req', 'Pending')->get();
        return response()->json($carbook);
        // return view('carDashboard.ADcarBookList')->with('ADcarBookList', $carbook);
    }

    //car booking pending approve list
    public function bookingapprove($id){
        $carbook = Carbook::find($id);
        return view('carDashboard.bookingapprove')->with('carbook', $carbook);
    }

    //car booking confirmation request
    public function bookingadd(Request $req){
        $carbook = Carbook::find($req -> id);
        $carbook->req = 'Approved';
        $carbook->save();
        // return redirect()->route('car.ADcarBookList');
    }

    //car bookingpending decline list
    public function bookingdecline($id){
        $carbook = Carbook::find($id);
         return view('carDashboard.bookingdecline')->with('carbook', $carbook);
    }

    //car booking remove request
    public function bookingremove(Request $req){
        $carbook = Carbook::find($req->id);
        $carbook->req = 'Declined';
        $carbook->save();
        // return redirect()->route('car.ADcarBookList');
    }

    //car booking delete from main list
    public function bookingdelete($id){
        $carbook = Carbook::find($id);
         return view('carDashboard.bookingdelete')->with('carbook', $carbook);
    }

    //car booking delete request from main list
    public function bookingdestroy(Request $req){

        $carbook = Carbook::find($req->id);
        $carbook->req = 'Canceled';
        $carbook->save();
        // return redirect()->route('car.showcarallbooking');
    }

    //car booking list
    public function showcarallbooking(){
        $carbook = Carbook::where('req', 'Approved')->get();
        return response()->json($carbook);
        // return view('carDashboard.showcarallbooking')->with('showcarallbooking', $carbook);

    }

    //car booking user-car information
    public function showusercarinfo($id){
        $carbook = Carbook::find($id); 
        $car = car:: where('id', $carbook->car_id)->first();
        $user = User::where('id', $carbook->user_id)->first();
        
        return view('carDashboard.showusercarinfo')
                                      ->with('car', $car)
                                      ->with('user', $user);                                            
    }


    public function checkcarreview(Request $req){

        $reviews = Review::where('service_type', 'Car')->get();
        return response()->json($reviews);


        // $reviews = Review::where('service_id', session()->get('id'))
        // ->where('service_type', session()->get('type'))->get();

        // return view('carDashboard.checkcarreview')->with('reviews', $reviews);
    }

    public function cartransactionhistory(Request $req){

        $transactions = Transaction::where('receiver','Car')->get();
        return response()->json($transactions);

        // $transactions = Transaction::where('receiver_id', session()->get('id'))
        // ->where('receiver', session()->get('type'))->get();

        // return view('carDashboard.cartransactionhistory')->with('transactions', $transactions);;
    }
    public function carsupport(){
        return view('carDashboard.carsupport');
    }

    public function carsupportconfirm(Request $req){

        $support = new Support;
        $support -> username = $req->username;
        $support -> phone = $req->phone; 
        $support -> email = $req->email;
        $support -> message = $req->message;
        $support->save();
        // return redirect()->route('car.carsupport');

    }

    public function profile(Request $req){
        $id = session()->get('id');
        $profile = Transport::find($id);
        return view('carDashboard.profile')->with('profile', $profile);
    }

    public function profileUD(Request $req){

        switch ($req->input('submit')) {
            case 'Update':
                
                $transport = Transport::where('name', $req->name)->first();
                $transport -> name = $req->name;
                $transport -> phone = $req->phone;
                $transport -> email = $req->email;
                $transport -> password = $req->password;
                $transport -> save();
                // $req->session()->flash('transportUDMsg', 'Account Updated');
                // return redirect()->route('car.profile');
                break;

            case 'Delete':

                $transport = Transport::where('name', $req->name)->first();
                $transport->delete();
                // return redirect()->route('login.index');
                break;

        }
    }
}
