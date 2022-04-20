import AdminHotelBookings from './AdminHotelBookings';
import './Admin.css';

const AdminHotelBookingsList = ({list})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>

                <th>ID</th>
                <th>User ID</th>
                <th>Room ID</th>
                <th>From Date</th>
                <th>To Date</th>
                <th>Status</th>

                {
                    list.map((book)=>{
          
                            return <AdminHotelBookings {...book} />
                    
                    })
                }
                
            </table>
        </div>
        
    )
}

export default AdminHotelBookingsList;