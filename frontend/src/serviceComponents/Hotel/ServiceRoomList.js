import Service from './ServiceRoom';
import '../Service.css';

const ServiceRoomList = ({list, callback})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>

                <th>S.No</th>
                <th>Room Name</th>
                <th>Description</th>
                {/* <th>Image</th> */}
                <th>Room Price </th>
                <th>Room Availability</th>
                <th>Creation Date</th>
                <th>Action</th>

                {
                    list.map((service)=>{

                        
                            return <Service {...service} serviceRoomDeletecallback={callback} />
                    
                    })
                }
                
            </table>
        </div>
        
    );
};

export default ServiceRoomList;