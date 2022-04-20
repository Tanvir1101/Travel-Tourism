import AdminSalaryAD from './AdminSalaryAD';
import './Admin.css';

const AdminSalaryADList = ({list, callbackA, callbackD})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>

                <th>ID</th>
                <th>Employee ID</th>
                <th>Username</th>
                <th>Salary</th>
                <th>Bonus</th>
                <th>Action</th>

                {
                    list.map((salary)=>{

                        
                        return <AdminSalaryAD {...salary} adminSalaryApproveCallback={callbackA}  adminSalaryDeclineCallback={callbackD} />
                    
                    })
                }
                
            </table>
        </div>
        
    )
}

export default AdminSalaryADList;