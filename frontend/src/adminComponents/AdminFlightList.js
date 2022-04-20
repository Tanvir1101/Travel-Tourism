import AdminFlight from './AdminFlight';
import './Admin.css';

const AdminFlightList = ({list, callback})=>{
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
                    list.map((flight)=>{

                        
                            return <AdminFlight {...flight} adminFlightApproveCallback={callback} />
                    
                    })
                }
                
            </table>
        </div>
        
    )
}

export default AdminFlightList;