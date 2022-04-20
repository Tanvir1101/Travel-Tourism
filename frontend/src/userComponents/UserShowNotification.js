import UserShowPromos from './UserShowPromos';
import './User.css';

const UserShowNotificaton = ({list})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>

                <th>Image</th>
                <th>Message</th>
               
                {
                    list.map((showpromos)=>{


                            return <UserShowPromos {...showpromos} />

                    })
                }
            </table>
        </div>
        
    )
}

export default UserShowNotificaton;