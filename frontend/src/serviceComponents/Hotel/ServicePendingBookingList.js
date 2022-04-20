import Service from './ServicePendingBooking';
import '../Service.css';

const ServicePendingBookingList = ({list, callbackA,callbackD})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>

                <th>Id</th>
                <th>User Id</th>
                <th>Room Id</th>
                <th>Arrival Date</th>
                <th>Departure Date</th>
                <th>Action</th>

                {
                    list.map((service)=>{

                        
                            return <Service {...service} servicePendingBookingApprovecallback={callbackA}
                            servicePendingBookingDeclinecallback={callbackD} />
                    
                    })
                }
                
            </table>
        </div>
        
    )
}

export default ServicePendingBookingList;