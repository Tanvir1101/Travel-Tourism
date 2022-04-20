import UserHotelFacility from './UserHotelFacility';
import './User.css';

const UserHotelFacilityList = ({list})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>

                <th>ID</th>
                <th>Facility Title</th>
                <th>Description</th>
                <th>Image</th>

                {
                    list.map((showfacility)=>{

                        
                            return <UserHotelFacility {...showfacility}  />
                    
                    })
                }
                
            </table>
        </div>
        
    )
}

export default UserHotelFacilityList;