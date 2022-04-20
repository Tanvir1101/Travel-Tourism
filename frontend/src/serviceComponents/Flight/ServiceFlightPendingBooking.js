
const ServiceFlightPendingBooking = ({id, user_id, air_id,fromloc, toloc, fromdate, todate, serviceFlightPendingBookingApprovecallback, serviceFlightPendingBookingDeclinecallback})=>{
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
            <button className='approve-button' onClick={()=>serviceFlightPendingBookingApprovecallback(id)}>Approve</button>
            <button className='delete-button' onClick={()=>serviceFlightPendingBookingDeclinecallback(id)}>Decline</button>
            </td>

        </tr>

        </>
    );
}

export default ServiceFlightPendingBooking;