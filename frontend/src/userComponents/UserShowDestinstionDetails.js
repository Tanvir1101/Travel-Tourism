import UserDestinationDetails from './UserDestinationDetails';
import './User.css';

const UserShowDestinationDetails = ({list})=>{
    //console.log(list);

    return(
        <div>
            <table id='table'>

                <th>ID</th>
                <th>Place</th>
                <th>District</th>
                <th>Image</th>
                <th>Hotel</th>

                {
                    list.map((showdetails)=>{

                        
                            return <UserDestinationDetails {...showdetails} />
                    
                    })
                }
                
            </table>
        </div>
        
    )
}

export default UserShowDestinationDetails;