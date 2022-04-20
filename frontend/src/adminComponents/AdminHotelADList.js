import HotelAD from './AdminHotelAD';
import './Admin.css';

const AdminHotelADList = ({list, callbackA, callbackD})=>{
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

                        
                            return <HotelAD {...hotel} adminHotelApproveCallback={callbackA}  adminHotelDeclineCallback={callbackD} />
                    
                    })
                }
                
            </table>
        </div>
        
    )
}

export default AdminHotelADList;