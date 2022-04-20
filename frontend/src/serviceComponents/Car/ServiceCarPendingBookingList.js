import Service from './ServiceCarPendingBooking';
import '../Service.css';

const ServiceCarPendingBookingList = ({list, callbackA,callbackD})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>

                <th>Id</th>
                <th>User Id</th>
                <th>Car Id</th>
                <th>Departure Location</th>
                <th>Arrival Location</th>
                <th>Arrival Date</th>
                <th>Departure Date</th>
                <th>Action</th>

                {
                    list.map((service)=>{

                        
                            return <Service {...service} serviceCarPendingBookingApprovecallback={callbackA}
                            serviceCarPendingBookingDeclinecallback={callbackD} />
                    
                    })
                }
                
            </table>
        </div>
        
    )
}

export default ServiceCarPendingBookingList;