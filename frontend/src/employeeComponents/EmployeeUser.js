//import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const EmployeeUser = ({id, email, username, employeeUserDetailscallback})=>{
    const history = useHistory();

    const routeChange = () =>{ 
        employeeUserDetailscallback(id);
        let path = `/employee/user/details/${id}`; 
        history.push(path);
      }
    return(
        <>
        
        <tr>
            <td>{id}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td><button className='details-button' onClick={routeChange}>Details</button></td>
            
        </tr>
        
        
        {/* </div> */}
        </>
    );
}

export default EmployeeUser;