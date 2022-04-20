import {Link} from 'react-router-dom';
const EmployeePlace = ({id, place, district, employeePlaceDeletecallback})=>{
    return(
        <>

        <tr>
            <td>{id}</td>
            <td>{place}</td>
            <td>{district}</td>
            <td> 
            <Link to={`/employee/placeEdit/${id}`} className='edit-button'> Edit </Link>
            <button className='delete-button' onClick={()=>employeePlaceDeletecallback(id)}>Delete</button>
            </td>

        </tr>

        </>
    );
}

export default EmployeePlace;