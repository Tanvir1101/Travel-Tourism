import EmployeeFaq from './EmployeeFaq';
import './Employee.css';

const EmployeeFaqList = ({list, callback})=>{
    console.log(list);

    return(
        <div>
            <legend>FAQ</legend>
            <table id='table'>
            
                <th>Question</th>
                <th>Answer</th>
                <th>Action</th>
               
                {
                    list.map((faq)=>{


                            return <EmployeeFaq {...faq} employeeFaqDeletecallback={callback} />

                    })
                }
            </table>
        </div>
        
    )
}

export default EmployeeFaqList;