import AdminPackageBookings from './AdminPackageBookings';
import './Admin.css';

const AdminPackageBookingsList = ({list})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>

                <th>ID</th>
                <th>User ID</th>
                <th>Package ID</th>
                <th>Place</th>
                <th>Image</th>
                <th>Status</th>

                {
                    list.map((book)=>{
          
                        return <AdminPackageBookings {...book} />
                    
                    })
                }
                
            </table>
        </div>
        
    )
}

export default AdminPackageBookingsList;