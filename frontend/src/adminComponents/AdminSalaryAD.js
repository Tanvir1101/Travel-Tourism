
const AdminSalaryAD = ({id, employee_id, username, salary, bonus, adminSalaryApproveCallback, adminSalaryDeclineCallback})=>{
    return(
        <>

        <tr>
            <td>{id}</td>
            <td>{employee_id}</td>
            <td>{username}</td>
            <td>{salary}</td>
            <td>{bonus}</td>
            <td>
                <button className='approve-button' onClick={()=>adminSalaryApproveCallback(id)}>Approve</button>
                <button className='delete-button' onClick={()=>adminSalaryDeclineCallback(id)}>Decline</button>
            </td>
        </tr>

        </>
    );
}

export default AdminSalaryAD;