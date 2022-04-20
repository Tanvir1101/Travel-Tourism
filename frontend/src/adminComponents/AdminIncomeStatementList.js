import AdminIncomeStatement from './AdminIncomeStatement';

import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import {useRef} from 'react';

import './Admin.css';

const AdminIncomeStatementList = ({list})=>{
    console.log(list);

    const pdfExportComponent = useRef(null);

    const handleExportWithComponent = (event =>{
        pdfExportComponent.current.save();
        console.log("clicked");
    })

    return(
        <>
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
                        list.map((income)=>{

                            
                                return <AdminIncomeStatement {...income}/>
                        
                        })
                    }
                    
                </table>
            </div>
        </PDFExport>
        </>
        
    )
}

export default AdminIncomeStatementList;