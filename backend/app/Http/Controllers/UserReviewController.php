<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\UserReviewRequest;

use App\Review;

class UserReviewController extends Controller
{
    public function index(){
        return view ('user.review');
    }

    public function verify(Request $req){
        
        $review = new Review;
        $review -> service_id = $req->service_id;
        $review -> service_type = $req->service_type;
        $review -> company = $req->company;
        $review -> user_id = $req->user_id;
        $review -> rating = $req->rating;
        $review -> msg = $req->msg;
        $review->save();
        
    }
}
