<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\EmpProfileRequest;
use App\Employee;
use App\User;
use App\Package;
use App\Place;
use App\Hotel;
use App\Transport;
use App\Support;
class EmployeeController extends Controller
{
    public function index(Request $req)
    {
        $userCount  = User::where('status', 'Active')->count();
        $packageCount  = Package::where('req', 'Approved')->count();
        $placeCount  = Place::where('req', 'Approved')->count();
        $hotelCount  = Hotel::where('req', 'Approved')->count();
        $transportCount  = Transport::where('req', 'Approved')->count();
        $supportCount  = Support::all()->count();
        
        return [
            'userCount' => $userCount,
            'packageCount' => $packageCount,
            'placeCount' => $placeCount,
            'hotelCount' => $hotelCount,
            'transportCount' => $transportCount,
            'supportCount' => $supportCount,
        ];
    }

    public function profile()
    {
        $id = session()->get('id');
        // $profile = Employee::find($id);

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
        // return view('employee.profile')->with('profile', $profile);

    }

    

    public function profileUD(Request $req)
    {
        switch ($req->input('submit')) {
            case 'Update':
                
                $employee = Employee::where('username', $req->username)->first();
                $employee -> firstname = $req->firstname;
                $employee -> lastname = $req->lastname;
                $employee -> gender = $req->gender;
                $employee -> email = $req->email;
                $employee -> password = $req->password;
                $employee -> save();
               // $req->session()->flash('employeeUDMsg', 'Account Updated');
                //return redirect()->route('employee.profile');
        
                break;
                
    
            case 'Delete':

                $employee = Employee::where('username', $req->username)->first();
                $employee-> status = 'Deactive';
                $employee-> save();
               // return redirect()->route('login.index');
                
                break;

        }
    }
}
