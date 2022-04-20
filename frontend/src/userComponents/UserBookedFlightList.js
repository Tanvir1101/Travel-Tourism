import UserBookedFlight from './UserBookedFlights';
import './User.css';

const UserBookedFlightList = ({list})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>

                <th>SL No.</th>
                <th>Flight Information</th>
               
                {
                    list.map((flightlist)=>{


                            return <UserBookedFlight {...flightlist} />

                    })
                }
            </table>
        </div>
        
    )
}

export default UserBookedFlightList;