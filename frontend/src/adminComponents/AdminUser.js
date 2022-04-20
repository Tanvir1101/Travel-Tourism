import {Link} from 'react-router-dom';

import { useHistory } from 'react-router-dom';


const AdminUser = ({id, firstname, lastname, gender, email, username, status, adminUserDetailscallback, adminUserDeletecallback})=>{
    const history = useHistory();

    const routeChange = () =>{ 
        adminUserDetailscallback(id);
        let path = `/admin/user/details/${id}`; 
        history.push(path);
        adminUserDetailscallback(id);
      }
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
            <td><button className='details-button' onClick={routeChange 
            
            
            }>Details</button>
            
            
            <button className='delete-button' onClick={()=>adminUserDeletecallback(id)}>Delete</button></td>
            
        </tr>
        
        
        {/* </div> */}
        </>
    );
}

export default AdminUser;