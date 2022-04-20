<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Hotel;
use App\Transport;
use App\User;

use App\Http\Requests\HotelRegRequest;
use App\Http\Requests\TransportRegRequest;

class RegistrationController extends Controller
{
    public function register(){
        return view('registration.register');
    }
    public function hotelreg(){
        return view('registration.hotelreg');
    }
    
    public function hotelregVerify(Request $req){

        // if($req->hasFile('image')){

        //     $file = $req->file('image');
        //     echo "File Name: ".$file->getClientOriginalName()."<br>";
        //     echo "File Extension: ".$file->getClientOriginalExtension()."<br>";
        //     echo "File Mime Type: ".$file->getMimeType()."<br>";
        //     echo "File Size: ".$file->getSize()."<br>";

        //     if($file->move('upload','hotelreg'.$req->name.'.'.$file->getClientOriginalExtension())){
        //         echo "success";
        //     }else{
        //         echo "error";
        //     }
        // }
        //     $img='hotelreg'.$req->name.'.'.$file->getClientOriginalExtension();

            $hotel = new Hotel;
            $hotel -> name = $req->name;
            $hotel -> location = $req->location;
            $hotel -> address = $req->address;
            $hotel -> phone = $req->phone;
            $hotel -> email = $req->email;
            $hotel -> password = $req->password;
            $hotel -> image = 'img';
            $hotel -> req = 'Pending';
            $hotel->save();
            // return redirect()->route('registration.hotelreg');
    }

    public function transportreg(){
        return view('registration.transportreg');
    }

    public function transportregVerify(Request $req){
        
            $transport = new Transport;
            $transport -> name = $req->name;
            $transport -> type = $req->type;
            $transport -> phone = $req->phone;
            $transport -> email = $req->email;
            $transport -> password = $req->password;
            $transport -> req = 'Pending';
            $transport->save();
            // return redirect()->route('registration.transportreg');
    }

    // public function userreg(){
    //     return view('registration.userreg');
    // }

    // public function userregVerify(Request $req){
        
    //     $user = new User;
    //     $user -> firstname = $req->firstname;
    //     $user -> lastname = $req->lastname;
    //     $user -> gender = $req->gender;
    //     $user -> email = $req->email;
    //     $user -> phone = $req->phone;
    //     $user -> username = $req->username;
    //     $user -> password = $req->password;
    //     $user -> status= 'Pending';
    //     $user->save();
    //         return redirect()->route('registration.userreg');
    // }

}
