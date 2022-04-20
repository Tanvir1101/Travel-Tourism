import EmployeeTransport from './EmployeeTransport';
import './Employee.css';

const EmployeeTransportList = ({list})=>{
    console.log(list);

    return(
        <div>

            <legend>Transport List</legend>
            
            <table id='table'>

                <th>ID</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Type</th>
                <th>Status</th>
               
                {
                    list.map((transport)=>{


                            return <EmployeeTransport {...transport} />

                    })
                }
            </table>
        </div>
        
    )
}

export default EmployeeTransportList;