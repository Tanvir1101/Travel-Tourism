import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const UserHotelRoom = ({id, name, location, address, phone, email, image, userHotelRoomscallback})=>{
    const history = useHistory();

    const routeChange = () =>{ 
        userHotelRoomscallback(id);
        console.log(id);
        let path = `/user/hotel_rooms/${id}`; 
        history.push(path);
    }
    
    return(
        <>

        <tr>

            <td>{id}</td>
            <td>{name}</td>
            <td>{location}</td>
            <td>{address}</td>
            <td>Phone: {phone}<br/>
                Email: {email}</td>
            <td><img className="userimg" src={process.env.PUBLIC_URL + "/images/" + image}/></td>
            <td><button className='details-button' onClick={routeChange}>Book</button></td>
                
        </tr>

        </>
    );
}

export default UserHotelRoom;