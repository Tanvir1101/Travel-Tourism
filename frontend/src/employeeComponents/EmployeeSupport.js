const EmployeeSupport = ({id, username, phone, email, message, employeeSupportDeletecallback})=>{
    return(
        

        <tr>
            <td>{id}</td>
            <td>{username}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{message}</td>
            <td><button className='delete-button' onClick={()=>employeeSupportDeletecallback(id)}>Delete</button></td>
        </tr>

       
    );
}

export default EmployeeSupport;