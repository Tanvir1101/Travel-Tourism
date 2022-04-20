import UserFlightBooking from './UserFlightBooking';
import './User.css';

const UserFlightBookingList = ({list})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>

                <th>ID</th>
                <th>Title</th>
                <th>Model</th>
                <th>Type</th>
                <th>Fare</th>
                <th>Picture</th>
                <th>Book</th>
                
                
               
                {
                    list.map((flightlist)=>{


                            return <UserFlightBooking {...flightlist} />

                    })
                }
            </table>
        </div>
        
    )
}

export default UserFlightBookingList;