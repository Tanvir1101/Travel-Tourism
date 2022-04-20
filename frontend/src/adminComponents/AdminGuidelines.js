import {Link} from 'react-router-dom';
import './AdminPP.css';

const AdminGuidelines = ({list})=>{

    return(
        <>


            <ul>
                <li><Link to={`/admin/guidelines/edit`}><i class="fa fa-pencil-square-o"></i></Link></li>
                
			</ul>

			<br/>

			<br/>
            <div className="content">
                <div dangerouslySetInnerHTML={{ __html: list.guideline }} />
            </div>

        </>
    );
}

export default AdminGuidelines;

