import AdminPlace from './AdminPlace';
import './Admin.css';

const AdminPlaceList = ({list, callback})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>
            <th>ID</th>
                <th>Place</th>
                <th>District</th>
                <th>Image</th>
                <th>Action</th>

                {
                    list.map((place)=>{

                        
                            return <AdminPlace {...place} adminPlaceDeleteCallback={callback} />
                    
                    })
                }
                
            </table>
        </div>
        
    )
}

export default AdminPlaceList;