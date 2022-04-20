const UserBookedHotel = ({id, user_id, room_id, fromdate, todate})=>{
    return(
        <>

        <tr>
            <td>{id}</td>

            <td>User ID: {user_id} <br />
                Room ID: {room_id} <br />
                Check In Date:{fromdate} <br />
                Check Out Date:{todate} </td>
        </tr>

        </>
    );
}

export default UserBookedHotel;