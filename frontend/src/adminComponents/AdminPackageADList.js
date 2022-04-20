import AdminPackageAD from './AdminPackageAD';
import './Admin.css';

const AdminPackageADList = ({list, callbackA, callbackD})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>

                <th>ID</th>
                <th>Place</th>
                <th>Location</th>
                <th>Image</th>
                <th>Description</th>
                <th>Duration</th>
                <th>Transport</th>
                <th>Hotel</th>
                <th>Cost</th>
                <th>Status</th>
                <th>Action</th>

                {
                    list.map((packageL)=>{
                        
                        return <AdminPackageAD {...packageL} adminPackageApproveCallback={callbackA}  adminPackageDeclineCallback={callbackD} />
                    
                    })
                }
                
            </table>
        </div>
        
    )
}

export default AdminPackageADList;