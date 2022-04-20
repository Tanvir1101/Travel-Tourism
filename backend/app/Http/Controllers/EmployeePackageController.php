<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\EmpPackageRequest;
use App\Package;
class EmployeePackageController extends Controller
{
    public function package(){
        $packages = Package::where('req', 'Approved')->get();
        return response()->json($packages);
    }


    public function packageAdd(){
        return view('employee.packageAdd');
        
    }

    public function packageAdded(Request $req){
        
        $package = new Package;
        $package -> place = $req->place;
        $package -> location = $req->location;
        $package -> image = "img.png";
        $package -> description = $req->description;
        $package -> duration = $req->duration;
        $package -> transport = $req->transport;
        $package -> hotel = $req->hotel;
        $package -> cost = $req->cost;
        //$package -> status = 'Upcoming';
        $package -> status = $req->status;
        $package -> req = 'Pending';
        $package -> save();
       
        
    }

    public function packageEdit($id){
        $package = Package::find($id);
        return view('employee.packageEdit')->with('packages',  $package);

    }

    public function packageEdited(Request $req){


                $package = Package::find($req->id);
                $package -> place = $req->place;
                $package -> location = $req->location;
                $package -> image = "img.png";
                $package -> description = $req->description;
                $package -> duration = $req->duration;
                $package -> transport = $req->transport;
                $package -> hotel = $req->hotel;
                $package -> cost = $req->cost;
                $package -> status = $req->status;
                $package -> req = 'Approved';
                $package -> save();
               
    }

    public function packageDelete($id){
        $package = Package::find($id);
        $package ->delete();
        return redirect()->route('employeePackage.package');
    }

    public function packageDestroy(Request $req){
        $package=Package::find($req->id);
        $package->delete();
    }


}
