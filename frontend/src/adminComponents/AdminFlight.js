
const AdminFlight = ({id, name, phone, email, type, adminFlightDeleteCallback})=>{
    return(
        <>

<tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{type}</td>
            <td>
                <button className='delete-button' onClick={()=>adminFlightDeleteCallback(id)}>Delete</button>
            </td>
        </tr>

        </>
    );
}

export default AdminFlight;