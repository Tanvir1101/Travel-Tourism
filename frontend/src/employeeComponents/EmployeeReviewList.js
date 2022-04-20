import EmployeeReview from './EmployeeReview';
import './Employee.css';

const EmployeeReviewList = ({list})=>{
    console.log(list);

    return(
        <div>

            <legend>Reviews</legend>
            
            <table id='table'>

                <th>ID</th>
                <th>Service ID</th>
                <th>Service Type</th>
                <th>Company</th>
                <th>User ID</th>
                <th>Rating</th>
                <th>Message</th>
               
                {
                    list.map((review)=>{


                            return <EmployeeReview {...review} />

                    })
                }
            </table>
        </div>
        
    )
}

export default EmployeeReviewList;