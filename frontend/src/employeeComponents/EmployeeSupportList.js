import EmployeeSupport from './EmployeeSupport';
import './Employee.css';

const EmployeeSupportList = ({list, callback})=>{
    console.log(list);

    return(
        <div>
            <legend>Support List</legend>

            <table id='table'>

                <th>ID</th>
                <th>Username</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Message</th>
                <th>Action</th>
               
                {
                    list.map((support)=>{


                            return <EmployeeSupport {...support} employeeSupportDeletecallback={callback} />

                    })
                }
            </table>
        </div>
        
    )
}

export default EmployeeSupportList;