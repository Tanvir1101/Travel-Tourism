<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//use App\Http\Requests\EmpSalaryRequest;
use App\Salary;
use PDF;
class EmployeeSalaryController extends Controller
{
    public function salary(){
        return view('employee.salaryReq');
    }

    public function salaryReq(Request $req){
       $salary = new Salary;
       $salary -> employee_id = $req->employee_id;
       $salary -> username = $req->username;
       $salary -> salary = $req->salary;
       $salary -> bonus = $req ->bonus/100*($req->salary);
       $salary -> req = "Pending";
       $salary -> save();


    }

    public function salaryList(){
        $salaries = Salary::where('req', 'Approved')->get();
        return response()->json($salaries);
    }

    function genSalary()
    {

		$salaries = Salary::all();
        $pdf = PDF::loadView('employee.salaryGen', ['salaries'=> $salaries])
        ->setPaper('a4','landscape');
        return $pdf->download('Salary.pdf');
    }

}
