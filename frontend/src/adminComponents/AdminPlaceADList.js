import AdminPlaceAD from './AdminPlaceAD';
import './Admin.css';

const AdminPlaceADList = ({list, callbackA, callbackD})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>

                <th>ID</th>
                <th>Place</th>
                <th>District</th>
                <th>Image</th>
                <th>Action</th>

                {
                    list.map((place)=>{

                        
                        return <AdminPlaceAD {...place} adminPlaceApproveCallback={callbackA}  adminPlaceDeclineCallback={callbackD} />
                    
                    })
                }
                
            </table>
        </div>
        
    )
}

export default AdminPlaceADList;