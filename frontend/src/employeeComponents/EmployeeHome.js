import { useState } from "react";
import { useFetch } from '../employeeComponents/useFetch';
import {Link} from 'react-router-dom';

import './Employee.css';

const EmployeeHome = ()=>{

    // Show Homepage by admin
    const [employeeHome, setEmployeeHome] = useState([]);
    const empH = 'http://127.0.0.1:8000/api/employee';
    useFetch(empH, setEmployeeHome);


    console.log(employeeHome);

    return(
        <>
        <div>

            {/* !--main-section start--> */}
				<div className="card-section">
					<div className="dashbord">
						<div className="icon-section">
							<i className="fa fa-users" aria-hidden="true"></i><br/>
							<small>Users</small>
							<p>{employeeHome.userCount}</p>
						</div>
						<div className="detail-section">
                            <Link to='/employee/userlist'><span>More Info</span></Link>
						</div>
					</div>
					<div className="dashbord dashbord-green">
						<div className="icon-section">
							<i className="fa fa-briefcase" aria-hidden="true"></i><br/>
							<small>Packages</small>
							<p>{employeeHome.packageCount}</p>
						</div>
						<div className="detail-section">
                            <Link to='/employee/package'><span>More Info</span></Link>
						</div>
					</div>
					<div className="dashbord dashbord-orange">
						<div className="icon-section">
							<i className="fa fa-globe" aria-hidden="true"></i><br/>
							<small>Places</small>
							<p>{employeeHome.placeCount}</p>
						</div>
						<div className="detail-section">
                            <Link to='/employee/place'><span>More Info</span></Link>
						</div>
					</div>					
					<div className="dashbord dashbord-blue">
						<div className="icon-section">
							<i className="fa fa-bed" aria-hidden="true"></i><br/>
							<small>Hotels</small>
							<p>{employeeHome.hotelCount}</p>
						</div>
						<div className="detail-section">
                            <Link to='/employee/hotelList'><span>More Info</span></Link>
						</div>
					</div>
					<div className="dashbord dashbord-red">
						<div className="icon-section">
							<i className="fa fa-car" aria-hidden="true"></i><br/>
							<small>Transports</small>
							<p>{employeeHome.transportCount}</p>
						</div>
						<div className="detail-section">
                            <Link to='/employee/transportList'><span>More Info</span></Link>
						</div>
					</div>
					<div className="dashbord dashbord-skyblue">
						<div className="icon-section">
							<i className="fa fa-envelope" aria-hidden="true"></i><br/>
							<small>Supports</small>
							<p>{employeeHome.supportCount}</p>
						</div>
						<div className="detail-section">
                            <Link to='/employee/support'><span>More Info</span></Link>
						</div>
					</div>
					
				</div>
				{/* <!--main-section end--> */}
            
        </div>
        </>
    )
}

export default EmployeeHome;