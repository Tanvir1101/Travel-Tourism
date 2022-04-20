<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Hotel;
use App\Roombook;
use App\Room;
use App\User;

class AdminHotelController extends Controller
{
    public function adHotel(){
        $ADHotelList = Hotel::where('req', 'Pending')->get();
        // return view('admin.ADHotel')->with('ADHotelList', $ADHotelList);
        return response()->json($ADHotelList);
    }

    public function hotelApprove($id){
        $hotel = Hotel::find($id);
        return view('admin.hotelApprove')->with('hotel', $hotel);
    }

    public function hotelAdd(Request $req){
        $hotel = Hotel::find($req -> id);
        $hotel->req = 'Approved';
        $hotel->save();

        //return redirect()->route('adminHotel.adHotel');
    }


    public function hotelDecline($id){
        $hotel = Hotel::find($id);
        return view('admin.hotelDecline')->with('hotel', $hotel);
    }

    public function hotelRemove(Request $req){
        $hotel = Hotel::find($req -> id);
        $hotel->req = 'Declined';
        $hotel->save();
        //Hotel::destroy($req -> id);
        //return redirect()->route('adminHotel.adHotel');
    }


    public function hotelList(){
        $hotels = Hotel::where('req', 'Approved')->get();
        // return view('admin.hotelList')->with('hotels', $hotels);
        return response()->json($hotels);
    }
    
    public function hotelDelete($id){
        $hotel = Hotel::find($id);
        return view('admin.hotelDelete')->with('hotel', $hotel);

    }

    public function hotelDestroy(Request $req){
        Hotel::destroy($req -> id);
        //return redirect()->route('adminHotel.hotelList');
    }

    public function hotelBookings(){
        $roomBooks= Roombook::all();
        return response()->json($roomBooks);
        // return view('admin.hotelBookingList')->with('roomBooks', $roomBooks);
    }

    public function roomBookDetail($id){
        $roombook = Roombook::find($id); 
        $room = Room:: where('id', $roombook->room_id)->first();
        $user = User::where('id', $roombook->user_id)->first();

        return view('admin.roomBookDetail')
        ->with('room', $room)
        ->with('user', $user);

    }

}
