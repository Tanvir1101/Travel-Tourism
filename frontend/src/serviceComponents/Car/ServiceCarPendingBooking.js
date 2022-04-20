
const ServiceCarPendingBooking = ({id, user_id, car_id,fromloc, toloc, fromdate, todate,serviceCarPendingBookingApprovecallback, serviceCarPendingBookingDeclinecallback})=>{
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
            <button className='approve-button' onClick={()=>serviceCarPendingBookingApprovecallback(id)}>Approve</button>
            <button className='delete-button' onClick={()=>serviceCarPendingBookingDeclinecallback(id)}>Decline</button>
            </td>

        </tr>

        </>
    );
}

export default ServiceCarPendingBooking;