import {Link} from 'react-router-dom';
import './AdminPP.css';

const AdminAbout = ({list})=>{

    return(
        <>


            <ul>
                <li><Link to={`/admin/about/edit`}><i class="fa fa-pencil-square-o"></i></Link></li>
                
			</ul>

			<br/>

			<br/>
            <div className="content">
                <div dangerouslySetInnerHTML={{ __html: list.about }} />
            </div>

        </>
    );
}

export default AdminAbout;

