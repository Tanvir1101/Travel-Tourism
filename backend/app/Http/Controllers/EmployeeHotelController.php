<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Hotel;
class EmployeeHotelController extends Controller
{
    public function hotel(){
        $hotel = Hotel::all();
        return response()->json($hotel);
        }
}
