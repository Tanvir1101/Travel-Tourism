
const AdminAdmin = ({id, firstname, lastname, gender, image, email, username, adminAdminDeletecallback})=>{
    return(
        <>

        <tr>
            <td>{id}</td>
            <td>{firstname}</td>
            <td>{lastname}</td>
            <td>{gender}</td>
            {/* <td>{image}</td> */}
            <td><img className="userimg" src={process.env.PUBLIC_URL + "/images/" + image}/></td>
            <td>{email}</td>
            <td>{username}</td>
            <td><button className='delete-button' onClick={()=>adminAdminDeletecallback(id)}>Delete</button></td>
        </tr>

        </>
    );
}

export default AdminAdmin;