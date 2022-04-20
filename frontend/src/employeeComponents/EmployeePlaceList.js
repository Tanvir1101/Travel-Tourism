import EmployeePlace from './EmployeePlace';
import './Employee.css';

const EmployeePlaceList = ({list, callback})=>{
    console.log(list);

    return(
        <div>
            <legend>Place List</legend>
            <table id='table'>

                <th>ID</th>
                <th>Place</th>
                <th>District</th>
                <th>Action</th>

                {
                    list.map((place)=>{

                        
                            return <EmployeePlace {...place} employeePlaceDeletecallback={callback} />
                    
                    })
                }
                
            </table>
        </div>
        
    )
}

export default EmployeePlaceList;