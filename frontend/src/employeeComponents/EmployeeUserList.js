import User from './EmployeeUser';
import './Employee.css';

const EmployeeUserList = ({list, callback})=>{
    console.log(list);

    return(
        <div>
            <legend>Users</legend>
            
            <table id='table'>

                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Action</th>

                {
                    list.map((user)=>{

                        
                            return <User {...user} employeeUserDetailscallback={callback} />
                    
                    })
                }
                
            </table>
        </div>
        
    )
}

export default EmployeeUserList;