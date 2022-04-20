import { useHistory } from 'react-router-dom';

const ServiceFlightBooking = ({id, user_id, air_id,fromloc,toloc, fromdate, todate, serviceFlightBookingDetailscallback, serviceFlightBookingDeletecallback})=>{
    
    const history = useHistory();

    const routeChange = () =>{ 
        serviceFlightBookingDetailscallback(id);
        let path = `/flightDashboard/details/${id}`; 
        history.push(path);
        serviceFlightBookingDetailscallback(id);
      }
   
   
   
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
            <td> 
            <button className='detail-button' onClick={routeChange }> Details</button>
            <button className='delete-button' onClick={()=>serviceFlightBookingDeletecallback(id)}>Delete</button>
            </td>

        </tr>

    </>
    );
}

export default ServiceFlightBooking;