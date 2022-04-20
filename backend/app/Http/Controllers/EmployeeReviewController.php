<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Review;
class EmployeeReviewController extends Controller
{
    public function showReview(){
        $reviews = Review::all();
         return response()->json($reviews);
    }
}
