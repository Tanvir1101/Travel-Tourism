import EmployeeStatement from './EmployeeStatement';
import { PDFExport } from "@progress/kendo-react-pdf";
import {useRef} from 'react';
import './Employee.css';

    const EmployeeStatementList = ({list})=>{
    console.log(list);

    const pdfExportComponent = useRef(null);

    const handleExportWithComponent = (event =>{
        pdfExportComponent.current.save();
        console.log("clicked");
    })

    return( <>
    <legend>Income Statements</legend>
    
    <button className = "PDFDownload" onClick={handleExportWithComponent}><i class="fa fa-download" aria-hidden="true"></i></button>

        <PDFExport ref = {pdfExportComponent} paperSize = "A2">
        <div>
            <table id='table'>

                <th>ID</th>
                <th>Month</th>
                <th>Revenue</th>
                <th>Cost</th>
                <th>Profit</th>

                {
                    list.map((statement)=>{


                            return <EmployeeStatement {...statement} />

                    })
                }
            </table>
        </div>
        </PDFExport>
        

        </>
    )
}

export default EmployeeStatementList;