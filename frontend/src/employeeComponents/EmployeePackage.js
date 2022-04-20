import {Link} from 'react-router-dom';
const EmployeePackage = ({id, place, location, description, duration, transport, hotel, cost, status, employeePackageDeletecallback})=>{
    return(
        <>

        <tr>
            <td>{id}</td>
            <td>{place}</td>
            <td>{location}</td>
            <td>{description}</td>
            <td>{duration}</td>
            <td>{transport}</td>
            <td>{hotel}</td>
            <td>{cost}</td>
            <td>{status}</td>
            <td> 
            <Link to={`/employee/packageEdit/${id}`} className='edit-button'> Edit </Link>
            <button className='delete-button' onClick={()=>employeePackageDeletecallback(id)}>Delete</button>
            </td>

        </tr>

        </>
    );
}

export default EmployeePackage;