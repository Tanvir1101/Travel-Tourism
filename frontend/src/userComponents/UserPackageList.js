import UserPackages from './UserPackages';
import './User.css';

const UserPackageList = ({list, callback})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>

                <th>ID</th>
                <th>Place</th>
                <th>Location</th>
                <th>Image</th>
                <th>Description</th>
                <th>Duration</th>
                <th>Transport</th>
                <th>Hotel</th>
                <th>Cost</th>
                <th>Book</th>
                
                
               
                {
                    list.map((packagelist)=>{


                            return <UserPackages {...packagelist} userBookPackageCallback={callback} />

                    })
                }
            </table>
        </div>
        
    )
}

export default UserPackageList;