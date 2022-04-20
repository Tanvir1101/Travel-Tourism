import UserShowDestination from './UserShowDestination';
import './User.css';

const UserDestinationList = ({list, callback})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>

                <th>ID</th>
                <th>Place</th>
                <th>District</th>
                <th>Image</th>
                <th>Details</th>

                {
                    list.map((showdestination)=>{

                        
                            return <UserShowDestination {...showdestination} userDestinationDetailscallback={callback} />
                    
                    })
                }
                
            </table>
        </div>
        
    )
}

export default UserDestinationList;