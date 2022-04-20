import Service from './ServiceFlightReview';
import '../Service.css';

const ServiceFlightReviewList = ({list})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>

                <th>Id</th>
                <th>Service Id</th>
                <th>Service Type</th>
                <th>Company</th>
                <th>User Id</th>
                <th>Rating</th>
                <th>Message</th>

                {
                    list.map((service)=>{

                        
                            return <Service {...service} />
                    
                    })
                }
                
            </table>
        </div>
        
    )
}

export default ServiceFlightReviewList;