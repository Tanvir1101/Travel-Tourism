import Service from './ServiceFlightPendingBooking';
import '../Service.css';

const ServiceFlightPendingBookingList = ({list, callbackA,callbackD})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>

                <th>Id</th>
                <th>User Id</th>
                <th>Air Id</th>
                <th>Departure Location</th>
                <th>Arrival Location</th>
                <th>Arrival Date</th>
                <th>Departure Date</th>
                <th>Action</th>

                {
                    list.map((service)=>{

                        
                            return <Service {...service} serviceFlightPendingBookingApprovecallback={callbackA}
                            serviceFlightPendingBookingDeclinecallback={callbackD} />
                    
                    
                    })
                }
                
            </table>
        </div>
        
    )
}

export default ServiceFlightPendingBookingList;