import AdminPackage from './AdminPackage';
import './Admin.css';

const AdminPackageList = ({list, callback})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>
                <th>ID</th>
                <th>Place</th>
                <th>Location</th>
                <th>Image</th>
                <th>Description</th>
                <th>Duration</th>
                <th>Transport</th>
                <th>Hotel</th>
                <th>Cost</th>
                <th>Status</th>
                <th>Action</th>

                {
                    list.map((packageL)=>{

                        
                            return <AdminPackage {...packageL} adminPackageeDeleteCallback={callback} />
                    
                    })
                }
                
            </table>
        </div>
        
    )
}

export default AdminPackageList;