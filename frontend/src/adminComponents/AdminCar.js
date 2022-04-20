
const AdminCar = ({id, name, phone, email, type, adminCarDeleteCallback})=>{
    return(
        <>

<tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{type}</td>
            <td>
                <button className='delete-button' onClick={()=>adminCarDeleteCallback(id)}>Delete</button>
            </td>
        </tr>

        </>
    );
}

export default AdminCar;