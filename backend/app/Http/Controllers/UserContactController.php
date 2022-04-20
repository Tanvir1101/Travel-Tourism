<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\UserContactRequest;
use App\Support;

class UserContactController extends Controller
{
    public function index (){
        return view('user.contact');
    }

    public function verify (Request $req){

        // $contact = new Support;
        // $contact -> username = $req->username;
        // $contact -> phone = $req->phone;
        // $contact -> email = $req->email;
        // $contact -> message = $req->message;
        // $contact->save();
        
        $support = new Support;
        $support -> username = $req->username;
        $support -> phone = $req->phone; 
        $support -> email = $req->email;
        $support -> message = $req->message;
        $support->save();
    }


}
