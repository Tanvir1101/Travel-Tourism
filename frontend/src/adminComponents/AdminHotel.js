
const AdminHotel = ({id, name, location, address, image, phone, email, adminHotelDeleteCallback})=>{
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
                <button className='delete-button' onClick={()=>adminHotelDeleteCallback(id)}>Delete</button>
            </td>
        </tr>

        </>
    );
}

export default AdminHotel;