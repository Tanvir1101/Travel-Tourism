import UserTravelHistory from './UserTravelHistory';
import './User.css';

const UserTravelHistoryList = ({list})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>

                <th>ID</th>
                <th>User ID</th>
                <th>Package ID</th>
                <th>Place</th>
                <th>Image</th>
               
                {
                    list.map((travellist)=>{


                            return <UserTravelHistory {...travellist} />

                    })
                }
            </table>
        </div>
        
    )
}

export default UserTravelHistoryList;