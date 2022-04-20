<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
class EmployeeUserController extends Controller
{
    public function userList(){
        $users = User::where('status', 'Active')->get();
        return response()->json($users);
    }
    public function userDetails($id){
        $users = User::find($id);
        return response()->json($users);
    }

}
