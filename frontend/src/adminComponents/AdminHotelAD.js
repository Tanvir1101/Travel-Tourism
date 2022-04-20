
const AdminHotelAD = ({id, name, location, address, image, phone, email, adminHotelApproveCallback, adminHotelDeclineCallback})=>{
    return(
        <>

        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{location}</td>
            <td>{address}</td>
            {/* <td>{image}</td> */}
            <td><img className="userimg" src={process.env.PUBLIC_URL + "/images/" + image}/></td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>
                <button className='approve-button' onClick={()=>adminHotelApproveCallback(id)}>Approve</button>
                <button className='delete-button' onClick={()=>adminHotelDeclineCallback(id)}>Decline</button>
            </td>
        </tr>

        </>
    );
}

export default AdminHotelAD;