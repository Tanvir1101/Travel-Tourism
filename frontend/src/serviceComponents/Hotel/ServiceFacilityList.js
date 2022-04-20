import Service from './ServiceFacility';
import '../Service.css';

const ServiceFacilityList = ({list, callback})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>

                <th>S.No</th>
                <th>Facility Title</th>
                <th>Description</th>
                {/* <th>Image</th> */}
                <th>Creation Date</th>
                <th>Action</th>

                {
                    list.map((service)=>{

                        
                            return <Service {...service} serviceFacilityDeletecallback={callback} />
                    
                    })
                }
                
            </table>
        </div>
        
    )
}

export default ServiceFacilityList;