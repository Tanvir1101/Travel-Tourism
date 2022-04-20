import AdminCarBookings from './AdminCarBookings';
import './Admin.css';

const AdminCarBookingsList = ({list})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>

                <th>ID</th>
                <th>User ID</th>
                <th>Car ID</th>
                <th>From</th>
                <th>To</th>
                <th>From Date</th>
                <th>To Date</th>
                <th>Status</th>

                {
                    list.map((book)=>{
          
                            return <AdminCarBookings {...book} />
                    
                    })
                }
                
            </table>
        </div>
        
    )
}

export default AdminCarBookingsList;