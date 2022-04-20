//import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const UserShowDestination = ({id, place, district, image, userDestinationDetailscallback})=>{
     const history = useHistory();

     const routeChange = () =>{ 
         userDestinationDetailscallback(id);
         console.log(id);
         let path = `/user/destination_details/${id}`; 
         history.push(path);
       }
    return(
        <>
        
        <tr>

            <td>{id}</td>
            <td>{place}</td>
            <td>{district}</td>
            <td><img src={process.env.PUBLIC_URL + "/images/nilgiri.jpg"} height="60px" width="60px" /></td>
            <td><button className='details-button' onClick={routeChange}>Details</button></td>
            
        </tr>
        
        </>
    );
}

export default UserShowDestination;