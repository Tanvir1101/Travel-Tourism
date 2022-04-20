import Admin from './AdminAdmin';
import './Admin.css';

const AdminAdminList = ({list, callback})=>{
    // console.log(list);

    return(
        <div>
            <table id='table'>

                <th>ID</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Gender</th>
                <th>Image</th>
                <th>Email</th>
                <th>Username</th>
                <th>Action</th>

                {
                    list.map((admin)=>{

                        
                            return <Admin {...admin} adminAdminDeletecallback={callback} />
                    
                    })
                }
                
            </table>
        </div>
        
    )
}

export default AdminAdminList;