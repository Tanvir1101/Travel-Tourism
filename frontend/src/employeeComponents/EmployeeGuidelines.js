import {Link} from 'react-router-dom';
import './Employee.css';

const EmployeeGuidelines = ({list})=>{

    return(
        <>


            <ul>
                <li><Link to={`/employee/guidelines/edit`}><i class="fa fa-pencil-square-o"></i></Link></li>
                
			</ul>

			<br/>

			<br/>
            <div className="content">
                <div dangerouslySetInnerHTML={{ __html: list.guideline }} />
            </div>

        </>
    );
}

export default EmployeeGuidelines;