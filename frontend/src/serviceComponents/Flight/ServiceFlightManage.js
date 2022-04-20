import {Link} from 'react-router-dom';
const ServiceFlightManage = ({id, title, model,type,fare,availability, image,serviceFlightManageDeletecallback})=>{
    return(
        <>

        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{model}</td>
            <td>{type}</td>
            <td>{fare}</td>
            <td>{availability}</td>
            {/* <td><img className="userimg" src={process.env.PUBLIC_URL + "/images/" + image}/></td> */}
            <td> 
            <Link to={`/flightDashboard/flightedit/${id}`}  id="editBtn">Edit</Link>
            <button className='delete-button' onClick={()=>serviceFlightManageDeletecallback(id)}>Delete</button>
            </td>

        </tr>

        </>
    );
}

export default ServiceFlightManage;