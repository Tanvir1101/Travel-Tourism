import { useHistory } from 'react-router-dom';


const AdminFlightBookings = ({id, user_id, air_id, fromloc, toloc, fromdate, todate, req})=>{
    const history = useHistory();

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
            <td>{air_id}</td>
            <td>{fromloc}</td>
            <td>{toloc}</td>
            <td>{fromdate}</td>
            <td>{todate}</td>
            <td>{req}</td>
            {/* <td><button className='delete-button' onClick={routeChange}>Details</button></td> */}
            
        </tr>
        
        </>
    );
}

export default AdminFlightBookings;