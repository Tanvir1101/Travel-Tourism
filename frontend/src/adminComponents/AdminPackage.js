
const AdminPackage = ({id, place, location, image, description, duration, transport, hotel, cost, status, adminPackageDeleteCallback})=>{
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
                <button className='delete-button' onClick={()=>adminPackageDeleteCallback(id)}>Delete</button>
            </td>
        </tr>

        </>
    );
}

export default AdminPackage;