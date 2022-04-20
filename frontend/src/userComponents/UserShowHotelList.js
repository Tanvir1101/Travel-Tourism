import UserShowHotels from './UserShowHotels';
import './User.css';
import { useState } from "react";
import { useFetch } from './useFetch';

const UserShowHotelList = ({list, callback})=>{
    console.log(list);

    // const [userhotelroom, setHotelRoom] = useState([]);
    // const userurl15 = 'http://127.0.0.1:8000/api/user/hotel_rooms';
    // useFetch(userurl15, setHotelRoom);
    // console.log(list);

    return(
        <div>

            <table id='table'>

                <th>ID</th>
                <th>Hotel Name</th>
                <th>Location</th>
                <th>Address</th>
                <th>Contact</th>
                <th>Image</th>
                <th>Book</th>
                
                
               
                {
                    list.map((hotellist)=>{


                            return <UserShowHotels {...hotellist} userHotelRoomscallback={callback} />

                    })
                }
            </table>
        </div>
        
    )
}

export default UserShowHotelList;