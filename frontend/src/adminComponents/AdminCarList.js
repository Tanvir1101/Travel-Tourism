import AdminCar from './AdminCar';
import './Admin.css';

const AdminCarList = ({list, callback})=>{
    console.log(list);

    return(
       <div>
            <table id='table'>

                <th>ID</th>
                <th>Name</th>
                <th>Contact No.</th>
                <th>Email</th>
                <th>Type</th>
                <th>Action</th>

                {
                    list.map((car)=>{

                        
                            return <AdminCar {...car} adminCarApproveCallback={callback} />
                    
                    })
                }
                
            </table>
        </div>
        
    )
}

export default AdminCarList;