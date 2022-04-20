import AdminSupport from './AdminSupport';
import './Admin.css';

const AdminSupportList = ({list, callback})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>

                <th>ID</th>
                <th>Username</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Message</th>
                <th>Action</th>

                {
                    list.map((support)=>{

                        
                            return <AdminSupport {...support} adminSupportDeleteCallback={callback} />
                    
                    })
                }
                
            </table>
        </div>
        
    )
}

export default AdminSupportList;