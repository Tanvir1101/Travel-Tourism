// import { useHistory } from 'react-router-dom';


const AdminPackagetBookings = ({id, user_id, package_id, place, image, status})=>{
    // const history = useHistory();

    // const routeChange = () =>{ 
    //     adminHotelBookingsDetailscallback(id);
    //     let path = `/admin/user/details/${id}`; 
    //     history.push(path);
    //     // adminUserDetailscallback(id);
    //   }
    return(
        <>
        
        <tr>
            <td>{id}</td>
            <td>{user_id}</td>
            <td>{package_id}</td>
            <td>{place}</td>
            <td><img className="userimg" src={process.env.PUBLIC_URL + "/images/" + image}/></td>
            <td>{status}</td>
            {/* <td><button className='delete-button' onClick={routeChange}>Details</button></td> */}
            
        </tr>
        
        </>
    );
}

export default AdminPackagetBookings;