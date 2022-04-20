import { useHistory } from 'react-router-dom';

const ServiceCarBooking = ({id, user_id, car_id,fromloc,toloc, fromdate, todate,serviceCarBookingDetailscallback, serviceCarBookingDeletecallback})=>{
    
    const history = useHistory();

    const routeChange = () =>{ 
        serviceCarBookingDetailscallback(id);
        let path = `/carDashboard/details/${id}`; 
        history.push(path);
        serviceCarBookingDetailscallback(id);
      }

    return(
        <>

        <tr>
            <td>{id}</td>
            <td>{user_id}</td>
            <td>{car_id}</td>
            <td>{fromloc}</td>
            <td>{toloc}</td>
            <td>{fromdate}</td>
            <td>{todate}</td>
            <td>
                <button className='detail-button' onClick={routeChange }> Details</button>
                <button className='delete-button' onClick={()=>serviceCarBookingDeletecallback(id)}>Delete</button>
            </td>

        </tr>

        </>
    );
}

export default ServiceCarBooking;