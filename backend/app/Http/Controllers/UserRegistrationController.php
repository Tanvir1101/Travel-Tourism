<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\UserRegistrationRequest;
use App\User;

class UserRegistrationController extends Controller
{
    public function register(){
        return view ('registration.register');
    }

    public function userreg(){
        return view ('registration.userreg');
    }

    public function userregverify(Request $req){

        $user = new User;
        $user -> firstname = $req->firstname;
        $user -> lastname = $req->lastname;
        $user -> gender = $req->gender;
        $user -> email = $req->email;
        $user -> phone = $req->phone;
        $user -> username = $req->username;
        $user -> password = $req->password;
        $user -> status= 'Pending';
        $user->save();

        //return redirect()->route('userRegistration.register');
    }


}
