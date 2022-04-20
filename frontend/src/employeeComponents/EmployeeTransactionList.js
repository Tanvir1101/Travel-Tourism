import EmployeeTransaction from './EmployeeTransaction';
import { PDFExport } from "@progress/kendo-react-pdf";
import {useRef} from 'react';
import './Employee.css';

    const EmployeeTransactionList = ({list})=>{
    console.log(list);

    
    const pdfExportComponent = useRef(null);

    const handleExportWithComponent = (event =>{
        pdfExportComponent.current.save();
        console.log("clicked");
    })

    return( <>

        <legend>Transaction History</legend>

        <button className = "PDFDownload" onClick={handleExportWithComponent}><i class="fa fa-download" aria-hidden="true"></i></button>
    
            <PDFExport ref = {pdfExportComponent} paperSize = "A2">
        <div>
            <table id='table'>

                <th>ID</th>
                <th>Date</th>
                <th>Receiver ID</th>
                <th>Receiver</th>
                <th>Username</th>
                <th>Description</th>
                <th>Amount</th>

                {
                    list.map((transaction)=>{


                            return <EmployeeTransaction {...transaction} />

                    })
                }
            </table>
        </div>
        </PDFExport>
        </>
        
    )
}

export default EmployeeTransactionList;