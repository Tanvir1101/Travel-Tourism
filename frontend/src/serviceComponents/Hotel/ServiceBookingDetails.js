const ServiceBookingDetails = ({id, user_id, room_id, fromdate, todate})=>{

   
    return(
        <>
        
        <tr>
            <td>ID:</td>
            <td>{id}</td>
        </tr>
        <tr>
            <td>User Id:</td>
            <td>{user_id}</td>
        </tr>
        <tr>
            <td>Room Id:</td>
            <td>{room_id}</td>
        </tr>
        <tr>
            <td>Arrival Date:</td>
            <td>{todate}</td>
        </tr>
        <tr>
            <td>Departure Date:</td>
            <td>{fromdate}</td>
        </tr>
        
        
        
        </>
    );
}

export default ServiceBookingDetails;