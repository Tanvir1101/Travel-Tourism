
const AdminSupport = ({id, username, phone, email, message, adminSupportDeleteCallback})=>{
    return(
        <>

        <tr>
            <td>{id}</td>
            <td>{username}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{message}</td>
            <td>
                <button className='delete-button' onClick={()=>adminSupportDeleteCallback(id)}>Delete</button>
            </td>
        </tr>

        </>
    );
}

export default AdminSupport;