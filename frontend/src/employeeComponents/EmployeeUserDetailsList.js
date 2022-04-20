import EmployeeUserDetails from './EmployeeUserDetails';
import './Employee.css';

const EmployeeUserDetailsList = ({list})=>{
    // console.log(list);

    return(
        <div>
            <table id='table'>

                <th>ID</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Username</th>
                <th>Status</th>



                {
                    list.map((user)=>{

                        
                            return <EmployeeUserDetails {...user}/>
                    
                    })
                }
                
            </table>
        </div>
        
    )
}

export default EmployeeUserDetailsList;