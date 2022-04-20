<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\AddRequest;
use App\Http\Requests\ProfileRequest;
Use Exception;
use App\Admin;
use App\Employee;
use App\User;
use App\Support;
use App\Roombook;
use App\Carbook;
use App\Airbook;
use App\Package;


class AdminController extends Controller
{
    public function index(Request $req){
        
        $employeeCount = Employee::where('status', 'Active')->count();
        $userCount = User::where('status', 'Active')->count();
        $supportCount = Support::all()->count();
        $hotelBookCount = Roombook::all()->count();
        $carBookCount = Carbook::all()->count();
        $flightBookCount = Airbook::all()->count();
        $packageCount = Package::where('req', 'Approved')->count();
        
        return [
            'employeeCount' => $employeeCount,
            'userCount' => $userCount,
            'supportCount' => $supportCount,
            'hotelBookCount' => $hotelBookCount,
            'carBookCount' => $carBookCount,
            'flightBookCount' => $flightBookCount,
            'packageCount' => $packageCount,
        ];
        
    }

    public function profile(){
        $id = session()->get('id');
        // $profile = Admin::find($id);

        return [
            'id' => session()->get('id'),
            // 'firstname' => $profile->firstname,
            // 'lastname' => $profile->lastname,
            // 'gender' => $profile->gender,
            // 'email' => $profile->email,
            // 'username' => $profile->username,
        ];

        return session()->get('id');

        // return response()->json($id);
        // return view('admin.profile')->with('profile', $profile);
    }

    

    public function profileUD(Request $req){

        switch ($req->input('submit')) {
            case 'Update':
                
                $admin = Admin::where('username', $req->username)->first();
                $admin -> firstname = $req->firstname;
                $admin -> lastname = $req->lastname;
                $admin -> gender = $req->gender;
                $admin -> email = $req->email;
                $admin -> password = $req->password;
                $admin -> save();
        //         $req->session()->flash('adminUDMsg', 'Account Updated');
        //         return redirect()->route('admin.profile');
        
                break;
                
    
            case 'Delete':

                $admin = Admin::where('username', $req->username)->first();
                $admin->delete();
                // return redirect()->route('login.index');
                
                break;

        }
    
    }

    public function adminAdd(){
        return view('admin.adminAdd');
    }

    public function adminAddVerify(AddRequest $req){
        // if($req->hasFile('image')){
        
        //     $file = $req->file('image');
        //     echo "File Name: ".$file->getClientOriginalName()."<br>";
        //     echo "File Extension: ".$file->getClientOriginalExtension()."<br>";
        //     echo "File Mime Type: ".$file->getMimeType()."<br>";
        //     echo "File Size: ".$file->getSize()."<br>";

        //     if($file->move('upload', $req->username.'.'.$file->getClientOriginalExtension())){
        //         echo "success";
        //     }else{
        //         echo "error";
        //     }
        // }

        $admins = Admin::all();
        foreach ($admins as $a)
        {
            if($a->username==$req->username || $a->email==$req->email)
            {
                $req->session()->flash('adminAddMsg', 'Duplicate email or username');
                return redirect()->route('admin.adminAdd');
            }
        }

        // $img=$req->username.'.'.$file->getClientOriginalExtension();
        
        
        $admin = new Admin;
        $admin -> firstname = $req->firstname;
        $admin -> lastname = $req->lastname;
        $admin -> gender = $req->gender;
        $admin -> email = $req->email;
        $admin -> image = "admin.jpg";
        $admin -> username = $req->username;
        $admin -> password = $req->password;

        try
        {
            if(count((array)$admin -> save()))
            {
                $req->session()->flash('adminAddMsg', 'Admin added');
                return redirect()->route('admin.adminAdd');
            }
        }
        catch(Exception $e)
        {
            dd($e->getMessage());
        }     
        
    }

    public function adminList(){
        $admins = Admin::all();
        return response()->json($admins);
        //return view('admin.adminList')->with('adminList', $admins);
    }

    public function adminDelete($id){
        $admin = Admin::find($id);
        return view('admin.adminDelete')->with('admin', $admin);

    }

    public function adminDestroy(Request $req){
        $admin = Admin::find($req->id);      
        $admin->delete();
    }


}
