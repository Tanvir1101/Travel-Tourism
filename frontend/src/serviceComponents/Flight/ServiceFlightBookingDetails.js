const ServiceFlightBookingDetails = ({id, user_id, air_id,fromloc,toloc, fromdate, todate})=>{

   
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
            <td>Air Id:</td>
            <td>{air_id}</td>
        </tr>
        <tr>
            <td>Departure Location:</td>
            <td>{fromloc}</td>
        </tr>
        <tr>
            <td>Arrival Location:</td>
            <td>{toloc}</td>
        </tr>
        <tr>
            <td>Departure Date:</td>
            <td>{fromdate}</td>
        </tr>
        <tr>
            <td>Arrival Date:</td>
            <td>{todate}</td>
            
        </tr>
        
        
        
        </>
    );
}

export default ServiceFlightBookingDetails;