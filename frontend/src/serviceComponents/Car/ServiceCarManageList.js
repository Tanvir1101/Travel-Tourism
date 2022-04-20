import Service from './ServiceCarManage';
import '../Service.css';

const ServiceCarManageList = ({list, callback})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>

                <th>S.No</th>
                <th>Car Title</th>
                <th>Car Model</th>
                <th>Driver Name</th>
                <th>Per Day Fare</th>
                <th>Type of Car</th>
                <th>Availability</th>
                {/* <th>Image</th> */}
                <th>Action</th>

                {
                    list.map((service)=>{

                        
                            return <Service {...service} serviceCarManageDeletecallback={callback} />
                    
                    })
                }
                
            </table>
        </div>
        
    )
}

export default ServiceCarManageList;