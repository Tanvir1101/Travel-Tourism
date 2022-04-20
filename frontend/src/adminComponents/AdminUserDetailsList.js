import AdminUserDetails from './AdminUserDetails';
import './Admin.css';

const AdminUserDetailsList = ({list})=>{
    // console.log(list);

    return(
        <div>
            <table id='table'>

                {/* <th>ID</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Username</th>
                <th>Status</th> */}



                {
                    list.map((user)=>{

                        
                            return <AdminUserDetails {...user}/>
                    
                    })
                }
                
            </table>
        </div>
        
    )
}

export default AdminUserDetailsList;