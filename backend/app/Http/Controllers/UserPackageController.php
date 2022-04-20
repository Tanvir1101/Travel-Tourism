<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Package;
use App\Packagebook;

class UserPackageController extends Controller
{
    public function showPackage(){
        $packages = Package::where('req', 'Approved')
                             ->where('status', 'Upcoming')->get();
        return response()->json($packages);
        //return view('user.package')->with('ADPackageList', $packages);
    }

    public function packageBook($id){
        $package = Package::find($id);
        return view('user.packageBook')->with('package', $package);
    }

    public function confirmpackageBook(Request $req){

        $package = Package::find($req->id);
        $packagebook = new Packagebook;
        
        $packagebook -> user_id = 1;
        $packagebook -> package_id = $req-> id;
        $packagebook -> place = $req-> place;
        $packagebook -> image = $req-> image;
        $packagebook -> status = 'Upcoming';
        $packagebook -> save();
        
        //return redirect()->route('userPackage.showPackage');
    }
}
