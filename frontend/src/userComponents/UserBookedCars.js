const UserBookedCar = ({id, user_id, car_id, fromloc, toloc, fromdate, todate})=>{
    return(
        <>

        <tr>
            <td>{id}</td>

            <td>User ID: {user_id} <br />
                Car ID: {car_id} <br />
                From: {fromloc}<br />
                To: {toloc} <br />
                Check In Date:{fromdate} <br />
                Check Out Date:{todate} </td>
        </tr>

        </>
    );
}

export default UserBookedCar;