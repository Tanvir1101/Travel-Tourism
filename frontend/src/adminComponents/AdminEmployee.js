// import {Link} from 'react-router-dom';
// import './Employee.css';

const AdminEmployee = ({id, firstname, lastname, gender, email, username, status, adminEmployeeDeletecallback})=>{
    return(
        <>
        
            {/* <p>ID: {id}</p>
            <h3>First Name: {firstname}</h3>
            <p>Last Name: {lastname}</p>
            <p>Gender: {gender}</p>
            <p>Email: {email}</p>
            <p>Username: {username}</p>
            <button onClick={()=>adminEmployeeDeletecallback(id)}>Delete</button>
            <Link to={`/edit/${id}`}> Edit </Link> */}
        

        {/* <div className='employee' style={{color:'red'}}> */}

        <tr>
            <td>{id}</td>
            <td>{firstname}</td>
            <td>{lastname}</td>
            <td>{gender}</td>
            <td>{email}</td>
            <td>{username}</td>
            <td>{status}</td>
            <td><button className='delete-button' onClick={()=>adminEmployeeDeletecallback(id)}>Delete</button></td>
        </tr>
        
        
        {/* </div> */}
        </>
    );
}

export default AdminEmployee;