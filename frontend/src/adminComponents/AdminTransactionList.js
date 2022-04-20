import AdminTransaction from './AdminTransaction';

import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import {useRef} from 'react';

import './Admin.css';


const AdminTransactionList = ({list})=>{
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
                    <th>Date</th>
                    <th>Receiver ID</th>
                    <th>Receiver</th>
                    <th>Username</th>
                    <th>Description</th>
                    <th>Amount</th>

                    {
                        list.map((transaction)=>{

                            
                                return <AdminTransaction {...transaction}/>
                        
                        })
                    }
                    
                </table>
            </div>
        </PDFExport>
        

        </>
        
    )
}

export default AdminTransactionList;