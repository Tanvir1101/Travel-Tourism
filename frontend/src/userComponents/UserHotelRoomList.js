import UserHotelRoom from './UserHotelRoom';
import './User.css';

const UserHotelRoomList = ({list})=>{

    

    return(
        <div>
            
            <table id='table'>

                <th>Room ID</th>
                <th>Hotel ID</th>
                <th>Location</th>
                <th>Description</th>
                <th>Price</th>
                <th>Image</th>
                <th>Book</th>
                
                
               
                {
                    list.map((roomlist)=>{


                            return <UserHotelRoom {...roomlist} />

                    })
                }
            </table>
        </div>
        
    )
}

export default UserHotelRoomList;