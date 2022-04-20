import Service from './ServiceFlightManage';
import '../Service.css';

const ServiceFlightManageList = ({list, callback})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>

                <th>S.No</th>
                <th>Airplane Name</th>
                <th>Airplane Model</th>
                <th>Type of Airplane</th>
                <th>Fare</th>
                <th>Availability</th>
                {/* <th>Image</th> */}
                <th>Action</th>

                {
                    list.map((service)=>{

                        
                            return <Service {...service} serviceFlightManageDeletecallback={callback} />
                    
                    })
                }
                
            </table>
        </div>
        
    )
}

export default ServiceFlightManageList;