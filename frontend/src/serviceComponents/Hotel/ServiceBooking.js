import { useHistory } from 'react-router-dom';

const ServiceBooking = ({id, user_id, room_id, fromdate, todate, serviceBookingDetailscallback, serviceBookingDeletecallback})=>{
    
    const history = useHistory();

    const routeChange = () =>{ 
        serviceBookingDetailscallback(id);
        let path = `/hotelDashboard/details/${id}`; 
        history.push(path);
        serviceBookingDetailscallback(id);
      }
   
   
   
    return(
        <>

        <tr>
            <td>{id}</td>
            <td>{user_id}</td>
            <td>{room_id}</td>
            <td>{fromdate}</td>
            <td>{todate}</td>
            <td> 
            <button className='detail-button' onClick={routeChange }> Details</button>
            <button className='delete-button' onClick={()=>serviceBookingDeletecallback(id)}>Delete</button>
            </td>

        </tr>

        </>
    );
}

export default ServiceBooking;