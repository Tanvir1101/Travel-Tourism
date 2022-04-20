import User from './AdminUser';
import './Admin.css';

const AdminUserList = ({list,callbackD, callback})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>

                <th>ID</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Username</th>
                <th>Status</th>
                <th>Action</th>

                {
                    list.map((user)=>{

                        
                            return <User {...user} adminUserDetailscallback={callbackD} adminUserDeletecallback={callback} />
                    
                    })
                }
                
            </table>
        </div>
        
    )
}

export default AdminUserList;