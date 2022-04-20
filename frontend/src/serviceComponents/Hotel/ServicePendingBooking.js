
const ServicePendingBooking = ({id, user_id, room_id, fromdate, todate, servicePendingBookingApprovecallback, servicePendingBookingDeclinecallback})=>{
    return(
        <>

        <tr>
            <td>{id}</td>
            <td>{user_id}</td>
            <td>{room_id}</td>
            <td>{fromdate}</td>
            <td>{todate}</td>
            <td> 
            <button className='approve-button' onClick={()=>servicePendingBookingApprovecallback(id)}>Approve</button>
            <button className='delete-button' onClick={()=>servicePendingBookingDeclinecallback(id)}>Decline</button>
            </td>

        </tr>

        </>
    );
}

export default ServicePendingBooking;