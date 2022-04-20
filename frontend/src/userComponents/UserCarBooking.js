import {Link} from 'react-router-dom';
const UserCarBooking = ({id, title, model, driver, type, fare, image})=>{
    return(
        <>

        <tr>

            <td>{id}</td>
            <td>{title}</td>
            <td>{model}</td>
            <td>{driver}</td>
            <td>{type}</td>
            <td>{fare}</td>
            <td><img className="userimg" src={process.env.PUBLIC_URL + "/images/" + image}/></td>
            <td><Link to={`/user/car/book/${id}`}className='edit-button'>Book</Link></td>

        </tr>

        </>
    );
}

export default UserCarBooking;