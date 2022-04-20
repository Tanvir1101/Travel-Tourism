import AdminTransportAD from './AdminTransportAD';
import './Admin.css';

const AdminTransportADList = ({list, callbackA, callbackD})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>

                <th>ID</th>
                <th>Name</th>
                <th>Contact No.</th>
                <th>Email</th>
                <th>Type</th>
                <th>Action</th>

                {
                    list.map((transport)=>{

                        
                            return <AdminTransportAD {...transport} adminTransportApproveCallback={callbackA}  adminTransportDeclineCallback={callbackD} />
                    
                    })
                }
                
            </table>
        </div>
        
    )
}

export default AdminTransportADList;