const EmployeeHotel = ({id, name, location, address, phone, email, req})=>{
    return(
        <>

        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{location}</td>
            <td>{address}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{req}</td>
        </tr>

        </>
    );
}

export default EmployeeHotel;