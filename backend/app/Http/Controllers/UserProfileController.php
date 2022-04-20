<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use\App\User;

class UserProfileController extends Controller
{
    public function userprofile(Request $req){
        $id = session()->get('id');
        $profile = User::find($id);
        return view('user.profile')->with('profile', $profile);
    }

    public function userprofileUD(Request $req){

        switch ($req->input('submit')) {

            case 'Update':

                $user = User::where('username', $req->username)->first();
                $user -> firstname = $req->firstname;
                $user -> lastname = $req->lastname;
                $user -> gender = $req->gender;
                $user -> email = $req->email;
                $user -> password = $req->password;
                $user -> save();
                $req->session()->flash('userUDMsg', 'Account Updated');
                return redirect()->route('userProfile.userprofile');

                break;



            case 'Delete':

                $user = User::where('username', $req->username)->first();
                $user0->delete();
                return redirect()->route('login.index');

                break;

        }

    }
}
