import AdminHotel from './AdminHotel';
import './Admin.css';

const AdminHotelList = ({list, callback})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>

                <th>ID</th>
                <th>Name</th>
                <th>Location</th>
                <th>Address</th>
                <th>Image</th>
                <th>Contact No.</th>
                <th>Email</th>
                <th>Action</th>

                {
                    list.map((hotel)=>{

                        
                            return <AdminHotel {...hotel} adminHotelDeleteCallback={callback} />
                    
                    })
                }
                
            </table>
        </div>
        
    )
}

export default AdminHotelList;