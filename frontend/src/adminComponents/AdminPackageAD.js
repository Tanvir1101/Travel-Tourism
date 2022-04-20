
const AdminPackageAD = ({id, place, location, image, description, duration, transport, hotel, cost, status, adminPackageApproveCallback, adminPackageDeclineCallback})=>{
    return(
        <>

        <tr>
            <td>{id}</td>
            <td>{place}</td>
            <td>{location}</td>
            <td><img className="userimg" src={process.env.PUBLIC_URL + "/images/" + image}/></td>
            <td>{description}</td>
            <td>{duration}</td>
            <td>{transport}</td>
            <td>{hotel}</td>
            <td>{cost}</td>
            <td>{status}</td>
            <td>
                <button className='approve-button' onClick={()=>adminPackageApproveCallback(id)}>Approve</button>
                <button className='delete-button' onClick={()=>adminPackageDeclineCallback(id)}>Decline</button>
            </td>
        </tr>

        </>
    );
}

export default AdminPackageAD;