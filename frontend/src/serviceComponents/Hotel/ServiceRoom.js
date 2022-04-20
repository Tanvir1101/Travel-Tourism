import {Link} from 'react-router-dom';
const ServiceRoom = ({id, name, description, price, created,availability, serviceRoomDeletecallback})=>{
    return(
        <>

        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{description}</td>
            {/* <td>{image}</td> */}
            {/* <td><img className="userimg" src={process.env.PUBLIC_URL + "/images/" + image}/></td> */}
            <td>{price}</td>
            <td>{availability}</td>
            <td>{created}</td>
            
            <td> 
            <Link to={`/hotelDashboard/roomedit/${id}`}  id="editBtn">Edit</Link>
            <button className='delete-button' onClick={()=>serviceRoomDeletecallback(id)}>Delete</button>
            </td>

        </tr>
    </>
    );
}

export default ServiceRoom;