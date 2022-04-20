import EmployeePackage from './EmployeePackage';
import './Employee.css';

const EmployeePackageList = ({list, callback})=>{
    console.log(list);

    return(
        <div>
            <legend>Package List</legend>
            <table id='table'>

                <th>ID</th>
                <th>Place</th>
                <th>Location</th>
                <th>Description</th>
                <th>Duration</th>
                <th>Transport</th>
                <th>Hotel</th>
                <th>Cost</th>
                <th>Status</th>
                <th>Action</th>

                {
                    list.map((packages)=>{

                        
                            return <EmployeePackage {...packages} employeePackageDeletecallback={callback} />
                    
                    })
                }
                
            </table>
        </div>
        
    )
}

export default EmployeePackageList;