import {Link} from 'react-router-dom';
import './AdminPP.css';

const AdminPolicy = ({list})=>{

    return(
        <>


            <ul>
                <li><Link to={`/admin/policy/edit`}><i class="fa fa-pencil-square-o"></i></Link></li>
                
			</ul>

			<br/>

			<br/>
            <div className="content">
                <div dangerouslySetInnerHTML={{ __html: list.policy }} />
            </div>

        </>
    );
}

export default AdminPolicy;

