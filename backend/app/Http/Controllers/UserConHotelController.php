<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use\App\Room;
use\App\Roombook;

class UserConHotelController extends Controller
{
    public function addHotelRoom($id){

        $hotelRoom = Room::find($id);
        return view('user.confirm_hotel')->with('hotelroom', $hotelRoom);
    }

    public function confirmHotel(Request $req){

        //$roombook = Roombook::find($id);

        $confirmhotel = new Roombook;
        
        // $confirmhotel -> user_id = 1;
        // $confirmhotel -> room_id = $roombook-> id;
        // $confirmhotel -> fromdate = $roombook->fromdate;
        // $confirmhotel -> todate = $roombook->todate;
        // $confirmhotel -> req = 'Approved';
        // $confirmhotel -> save();

        $confirmhotel -> user_id = $req->user_id;;
        $confirmhotel -> room_id = $req-> room_id;
        $confirmhotel -> fromdate = $req->fromdate;
        $confirmhotel -> todate = $req->todate;
        $confirmhotel -> req = 'Approved';
        $confirmhotel -> save();

        //return redirect()->route('userHotels.showHotel');
    }
}