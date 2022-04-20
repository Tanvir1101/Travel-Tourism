import UserCarBooking from './UserCarBooking';
import './User.css';

const UserCarBookingList = ({list})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>

                <th>ID</th>
                <th>Title</th>
                <th>Model</th>
                <th>Driver Name</th>
                <th>Type</th>
                <th>Fare</th>
                <th>Image</th>
                <th>Book</th>
                
                
               
                {
                    list.map((carlist)=>{


                            return <UserCarBooking {...carlist} />

                    })
                }
            </table>
        </div>
        
    )
}

export default UserCarBookingList;