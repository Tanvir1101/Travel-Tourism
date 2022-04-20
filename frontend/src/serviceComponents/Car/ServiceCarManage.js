import {Link} from 'react-router-dom';
const ServiceCarManage = ({id, title, model, driver, type, fare, availability, serviceCarManageDeletecallback})=>{
    return(
        <>

        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{model}</td>
            <td>{driver}</td>
            <td>{fare}</td>
            <td>{type}</td>
            <td>{availability}</td>
            {/* <td><img className="userimg" src={process.env.PUBLIC_URL + "/images/" + image}/></td> */}
            <td> 
            <Link to={`/carDashboard/caredit/${id}`} id="editBtn">Edit </Link> 
            <button className='delete-button' onClick={()=>serviceCarManageDeletecallback(id)}>Delete</button>
            </td>

        </tr>

        </>
    );
}

export default ServiceCarManage;