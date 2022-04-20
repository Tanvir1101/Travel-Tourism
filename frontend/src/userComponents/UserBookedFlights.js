const UserBookedFlight = ({id, user_id, air_id, fromloc, toloc, fromdate, todate})=>{
    return(
        <>

        <tr>
            <td>{id}</td>

            <td>User ID: {user_id} <br />
                Air ID: {air_id} <br />
                From: {fromloc}<br />
                To: {toloc} <br />
                Check In Date:{fromdate} <br />
                Check Out Date:{todate} </td>
        </tr>

        </>
    );
}

export default UserBookedFlight;