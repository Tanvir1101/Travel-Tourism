import UserBookedCar from './UserBookedCars';
import './User.css';

const UserBookedCarList = ({list})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>

                <th>SL No.</th>
                <th>Car Information</th>
               
                {
                    list.map((carlist)=>{


                            return <UserBookedCar {...carlist} />

                    })
                }
            </table>
        </div>
        
    )
}

export default UserBookedCarList;