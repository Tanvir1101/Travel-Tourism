<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\EmpGalleryRequest;
use App\Gallery;
class EmployeeGalleryController extends Controller
{
    public function index(){
        return view('employee.galleryAdd');
    }

    public function upload(Request $req){
        // if ($req->hasFile('image')) {
        //     $file = $req->file('image');
        //     if($file->move('upload', 'employeeGallery'.$req->place.'.'.$file->getClientOriginalExtension())){
        //         echo "success";
        //     }else{
        //         echo "error";
        //     }
        // }
        // $img='employeeGallery'.$req->place.'.'.$file->getClientOriginalExtension();

        $galleries = new Gallery;
        $galleries -> place = $req->place;
        $galleries -> image = $req->image;
        //$galleries -> image = $img;
        $galleries->save();
       
    }

    public function manage(){
        $galleries = Gallery::all();
        return response()->json($galleries);
    }
    
    
    public function pictureDestroy(Request $req){
        Gallery::destroy($req -> id);
    }

}
