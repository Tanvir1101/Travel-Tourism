<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use\App\Room;
use\App\Hotel;
use\App\Facility;

class UserHotelRoomController extends Controller
{
    public function showHotelRoom(){

        // $hotel = Hotel::find($id);
        // $HotelRooms = Room::where('availability', 'Available')
        //                     ->where('hotel_id', $hotel-> id)->get();
        $Room = Room::all();
        return response()->json($Room);
        //return view('user.hotel-room')->with('showHotelRoom', $HotelRooms);
    }

    public function facility(){

        $facalities = Facility::all();
        return response()->json($facalities);
        //return view('user.hotel_facility')->with('HotelFacilityList', $facalities);
    }
}
