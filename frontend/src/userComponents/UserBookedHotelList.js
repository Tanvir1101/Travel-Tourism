import UserBookedHotel from './UserBookedHotels';
import './User.css';

const UserBookedHotelList = ({list})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>
            
                    <th>SL No.</th>
                    <th>Hotel Information</th>
            
                {
                    list.map((hotellist)=>{


                            return <UserBookedHotel {...hotellist} />

                    })
                }
            </table>
        </div>
        
    )
}

export default UserBookedHotelList;