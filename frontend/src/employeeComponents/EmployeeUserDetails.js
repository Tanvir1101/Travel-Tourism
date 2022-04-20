const EmployeeUserDetails = ({id, firstname, lastname, gender, email, username, status})=>{

   
    return(
        <>
        
        <tr>
            <td>{id}</td>
            <td>{firstname}</td>
            <td>{lastname}</td>
            <td>{gender}</td>
            <td>{email}</td>
            <td>{username}</td>
            <td>{status}</td>
            
        </tr>
        
        
        {/* </div> */}
        </>
    );
}

export default EmployeeUserDetails;