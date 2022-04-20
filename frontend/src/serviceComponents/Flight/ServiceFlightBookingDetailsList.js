import Service from './ServiceFlightBookingDetails';
import '../Service.css';

const ServiceFlightBookingDetailsList = ({list})=>{
    // console.log(list);

    return(
        <div>
            <table id='table'>

                {/* <th>ID</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Username</th>
                <th>Status</th> */}



                {
                    list.map((service)=>{

                        
                            return <Service {...service}/>
                    
                    })
                }
                
            </table>
        </div>
        
    )
}

export default ServiceFlightBookingDetailsList;