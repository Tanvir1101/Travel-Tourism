import EmployeeSalary from './EmployeeSalary';
import { PDFExport } from "@progress/kendo-react-pdf";
import {useRef} from 'react';
import './Employee.css';

    const EmployeeSalaryList = ({list})=>{
    console.log(list);


    const pdfExportComponent = useRef(null);

    const handleExportWithComponent = (event =>{
        pdfExportComponent.current.save();
        console.log("clicked");
    })

    return(<>
    <legend>Salary List</legend>
        <button className = "PDFDownload" onClick={handleExportWithComponent}><i class="fa fa-download" aria-hidden="true"></i></button>

        <PDFExport ref = {pdfExportComponent} paperSize = "A2">
            <div>
            <table id='table'>

                <th>Employee ID</th>
                <th>Salary</th>
                <th>Festival Bonus</th>
               
                {
                    list.map((salary)=>{


                            return <EmployeeSalary {...salary} />

                    })
                }
            </table>
        </div>
        </PDFExport>
        

        </>
    )
}

export default EmployeeSalaryList;