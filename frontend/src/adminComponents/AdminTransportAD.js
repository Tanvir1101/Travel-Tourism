
const AdminTransportAD = ({id, name, phone, email, type, adminTransportApproveCallback, adminTransportDeclineCallback})=>{
    return(
        <>

        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{type}</td>
            <td>
                <button className='delete-button' onClick={()=>adminTransportApproveCallback(id)}>Approve</button>
                <button className='delete-button' onClick={()=>adminTransportDeclineCallback(id)}>Decline</button>
            </td>
        </tr>

        </>
    );
}

export default AdminTransportAD;