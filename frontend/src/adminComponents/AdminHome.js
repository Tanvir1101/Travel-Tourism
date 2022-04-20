import { useState } from "react";
import { useFetch } from '../adminComponents/useFetch';
import {Link} from 'react-router-dom';

import './Admin.css';
import './AdminCard.css';

const AdminHome = ()=>{

    // Show Homepage by admin
    const [adminHome, setAdminHome] = useState([]);
    const urlHome = 'http://127.0.0.1:8000/api/admin/home';
    useFetch(urlHome, setAdminHome);


    console.log(adminHome);
    console.log(adminHome.carBookCount);

    return(
        <>
        <div>

            {/* !--main-section start--> */}
				<div className="card-section">
					<div className="dashbord">
						<div className="icon-section">
							<i className="fa fa-users" aria-hidden="true"></i><br/>
							<small>Users</small>
							<p>{adminHome.userCount}</p>
						</div>
						<div className="detail-section">
                            <Link to='/admin/active-users'><span>More Info</span></Link>
						</div>
					</div>
					<div className="dashbord dashbord-green">
						<div className="icon-section">
							<i className="fa fa-briefcase" aria-hidden="true"></i><br/>
							<small>Employees</small>
							<p>{adminHome.employeeCount}</p>
						</div>
						<div className="detail-section">
                            <Link to='/admin/active-employees'><span>More Info</span></Link>
						</div>
					</div>
					<div className="dashbord dashbord-orange">
						<div className="icon-section">
							<i className="fa fa-bell" aria-hidden="true"></i><br/>
							<small>Messages</small>
							<p>{adminHome.supportCount}</p>
						</div>
						<div className="detail-section">
                            <Link to='/admin/support'><span>More Info</span></Link>
						</div>
					</div>					
					<div className="dashbord dashbord-blue">
						<div className="icon-section">
							<i className="fa fa-bed" aria-hidden="true"></i><br/>
							<small>Hotel Bookings</small>
							<p>{adminHome.hotelBookCount}</p>
						</div>
						<div className="detail-section">
                            <Link to='/admin/hotel-bookings'><span>More Info</span></Link>
						</div>
					</div>
					<div className="dashbord dashbord-red">
						<div className="icon-section">
							<i className="fa fa-car" aria-hidden="true"></i><br/>
							<small>Car Bookings</small>
							<p>{adminHome.carBookCount}</p>
						</div>
						<div className="detail-section">
                            <Link to='/admin/car-bookings'><span>More Info</span></Link>
						</div>
					</div>
					<div className="dashbord dashbord-skyblue">
						<div className="icon-section">
							<i className="fa fa-plane" aria-hidden="true"></i><br/>
							<small>Flight Bookings</small>
							<p>{adminHome.flightBookCount}</p>
						</div>
						<div className="detail-section">
                            <Link to='/admin/flight-bookings'><span>More Info</span></Link>
						</div>
					</div>
					<div className="dashbord dashbord-new">
						<div className="icon-section">
							<i className="fa fa-gift" aria-hidden="true"></i><br/>
							<small>Packages</small>
							<p>{adminHome.packageCount}</p>
						</div>
						<div className="detail-section">
                            <Link to='/admin/all-packages'><span>More Info</span></Link>
						</div>
					</div>
				</div>
				{/* <!--main-section end--> */}
            
        </div>
        </>
    )
}

export default AdminHome;