
const AdminUserDetails = ({id, firstname, lastname, gender, email, username, status})=>{

   
    return(
        <>
        
        <tr>
            
            <td>ID:</td>
            <td>{id}</td>
        </tr>
        <tr>
            <td>First Name:</td>
            <td>{firstname}</td>
        </tr>
        <tr>
            <td>Last Name:</td>
            <td>{lastname}</td>
        </tr>
        <tr>
            <td>Gender:</td>
            <td>{gender}</td>
        </tr>
        <tr>
            <td>Email:</td>
            <td>{email}</td>
        </tr>
        <tr>
            <td>Username:</td>
            <td>{username}</td>
        </tr>
        <tr>
            <td>Status:</td>
            <td>{status}</td>
            
        </tr>
        
        
        {/* </div> */}
        </>
    );
}

export default AdminUserDetails;