<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class AdminUserController extends Controller
{
    public function userList(){
        $users = User::all();
        return response()->json($users);
        // return view('admin.userList')->with('allUserList', $users);
    }

    public function activeUserList(){
        $users = User::where('status', 'Active')->get();
        return response()->json($users);
        // return view('admin.activeUserList')->with('activeUserList', $users);
    }

    public function userDetails($id){
        $user = User::find($id);
        return response()->json($user);
        // return view('admin.userDetails')->with('user', $user);
    }

    public function userDelete($id){
        $user = User::find($id);
        return view('admin.userDelete')->with('user', $user);

    }

    public function userDestroy(Request $req){
        // User::destroy($id);
        // return redirect()->route('adminUser.userList');

        $user = User::find($req->id);
        $user->delete();
    }

}
