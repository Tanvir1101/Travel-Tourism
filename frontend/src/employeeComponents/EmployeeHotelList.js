import EmployeeHotel from './EmployeeHotel';
import './Employee.css';

const EmployeeHotelList = ({list})=>{
    console.log(list);

    return(
        <div>
            <legend>Hotel List</legend>
            <table id='table'>

                <th>ID</th>
                <th>Name</th>
                <th>Location</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Status</th>
               
                {
                    list.map((hotel)=>{


                            return <EmployeeHotel {...hotel} />

                    })
                }
            </table>
        </div>
        
    )
}

export default EmployeeHotelList;