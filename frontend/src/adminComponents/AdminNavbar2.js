import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { useState } from "react";
import { GoogleLogin, GoogleLogout} from 'react-google-login';

const AdminNavbar = ({callbackGoogle, googletf})=>{

	// console.log("Google status from Navbar: "+ googletf);
	const history = useHistory();

	const clientId = "472078400144-265drsrih4lt007dbusnq94fcou597oe.apps.googleusercontent.com";

	const [showloginButton, setShowloginButton] = useState(false);
	const [showlogoutButton, setShowlogoutButton] = useState(googletf);


	const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
		callbackGoogle(false)
		history.push('/login');
    };

    return(
        <>
            {/* <!--header menu start--> */}
			<div className="header">
				<div className="header-menu">
					<div className="title">Admin <span>Panel</span></div>
					{/* <div className="sidebar-btn">
					</div> */}
					<ul>
						{/* <li>{{date("l jS \of F")}}</li> */}
						<li><Link to='/admin/profile'><i class="fa fa-user-circle"></i></Link></li>
						<li><Link to='/login'><i class="fa fa-sign-out" aria-hidden="true"></i></Link></li>
						<li>
						{ showlogoutButton ?
							<GoogleLogout
								clientId={clientId}
								buttonText="Sign Out"
								onLogoutSuccess={onSignoutSuccess}
							>
							</GoogleLogout> : null
						}
						</li>
					</ul>
				</div>
			</div>
			{/* <!--header menu end--> */}

			{/* <!--sidebar start--> */}
			<div className="sidebar">
				<div className="sidebar-menu">
					<center className="profile">
                        {/* <img src="{{asset('upload')}}/{{session('image')}}" height="50px" width="50px" /> */}
						<img className="userimg" src={process.env.PUBLIC_URL + "/images/admin.jpg" }  height="50px" width="50px" />
                        {/* <p>{{session('uname')}}</p> */}
						
						
                    </center>
					<br></br>

					<li className="item">
                        <Link className="menu-btn" to='/admin/home'><i class="fa fa-home" aria-hidden="true"></i><span>Dashboard</span></Link>
					</li>

					<li className="item" id="admin">
						<a href="#admin" className="menu-btn">
							<i className="fa fa-briefcase"></i><span>Admin<i class="fa fa-chevron-circle-down drop-down" aria-hidden="true"></i></span>
						</a>

                        {/* <Link to='#admin' className="menu-btn">Admin</Link> */}
						<div className="sub-menu">
							
                            <Link to='/admin/add-admin'><i class="fa fa-puzzle-piece"></i><span>Add Admin</span></Link>
							<Link to='/admin/all-admins'><i class="fa fa-list"></i><span>Admin List</span></Link>
						</div>
					</li>

					<li className="item" id="user">
						<a href="#user" className="menu-btn">
							<i className="fa fa-users"></i><span>User<i class="fa fa-chevron-circle-down drop-down" aria-hidden="true"></i></span>
						</a>
						<div className="sub-menu">
                            <Link to='/admin/all-users'><i class="fa fa-puzzle-piece"></i><span>User list</span></Link>
							<Link to='/admin/active-users'><i class="fa fa-list"></i><span>Active User list</span></Link>
						</div>
					</li>

					<li className="item" id="emp">
						<a href="#emp" className="menu-btn">
							<i className="fa fa-briefcase"></i><span>Employee<i class="fa fa-chevron-circle-down drop-down" aria-hidden="true"></i></span>
						</a>
						<div className="sub-menu">
                            <Link to='/admin/add-employee'><i class="fa fa-puzzle-piece"></i><span>Add Employee</span></Link>
                            <Link to='/admin/all-employees'><i class="fa fa-list"></i><span>Employee List</span></Link>
							<Link to='/admin/active-employees'><i class="fa fa-list"></i><span>Active Employee List</span></Link>
						</div>
					</li>

					<li className="item" id="hotel">
						<a href="#hotel" className="menu-btn">
							<i className="fa fa-bed"></i><span>Hotel<i class="fa fa-chevron-circle-down drop-down" aria-hidden="true"></i></span>
						</a>
						<div className="sub-menu">
                            <Link to='/admin/hotels-pending'><i class="fa fa-check-square"></i><span>Approve/Decline</span></Link>
							<Link to='/admin/all-hotels'><i class="fa fa-list"></i><span>All Hotels</span></Link>
							<Link to='/admin/hotel-bookings'><i class="fa fa-clipboard"></i><span>Hotel Bookings</span></Link>
						</div>
					</li>

					<li className="item" id="transport">
						<a href="#transport" className="menu-btn">
							<i className="fa fa-car"></i><span>Transport<i class="fa fa-chevron-circle-down drop-down" aria-hidden="true"></i></span>
						</a>
						<div className="sub-menu">
							<Link to='/admin/transports-pending'><i class="fa fa-check-square"></i><span>Approve/Decline</span></Link>
							<Link to='/admin/all-cars'><i class="fa fa-list"></i><span>All Car Companies</span></Link>
							<Link to='/admin/all-flight'><i class="fa fa-list"></i><span>All Flight Companies</span></Link>
							<Link to='/admin/car-bookings'><i class="fa fa-clipboard"></i><span>Car Bookings</span></Link>
							<Link to='/admin/flight-bookings'><i class="fa fa-clipboard"></i><span>Flight Bookings</span></Link>
						</div>
					</li>

					<li className="item" id="package">
						<a href="#package" className="menu-btn">
							<i className="fa fa-gift"></i><span>Packages<i class="fa fa-chevron-circle-down drop-down" aria-hidden="true"></i></span>
						</a>
						<div className="sub-menu">
                            <Link to='/admin/package-pending'><i class="fa fa-check-square"></i><span>Approve/Decline</span></Link>
							<Link to='/admin/all-packages'><i class="fa fa-list"></i><span>All Packages</span></Link>
							<Link to='/admin/package-bookings'><i class="fa fa-clipboard"></i><span>Package Bookings</span></Link>
							<Link to='/admin/package-status'><i class="fa fa-pencil-square"></i><span>Package Status</span></Link>
						</div>
					</li>

					<li className="item" id="place">
						<a href="#place" className="menu-btn">
							<i className="fa fa-globe"></i><span>Places<i class="fa fa-chevron-circle-down drop-down" aria-hidden="true"></i></span>
						</a>
						<div className="sub-menu">
                            <Link to='/admin/place-pending'><i class="fa fa-check-square"></i><span>Approve/Decline</span></Link>
							<Link to='/admin/all-places'><i class="fa fa-list"></i><span>All Places</span></Link>
						</div>
					</li>

					<li className="item" id="accounts">
						<a href="#accounts" className="menu-btn">
							<i className="fa fa-credit-card"></i><span>Accounts<i class="fa fa-chevron-circle-down drop-down" aria-hidden="true"></i></span>
						</a>
						<div className="sub-menu">
                            <Link to='/admin/income-statement'><i class="fa fa-usd"></i><span>Income Statement</span></Link>
							<Link to='/admin/transaction-history'><i class="fa fa-money"></i><span>Transaction History</span></Link>
							<Link to='/admin/pending-salary'><i class="fa fa-check-square"></i><span>Approve/Decline Salary</span></Link>
						</div>
					</li>

					<li className="item">
                        <Link className="menu-btn" to='/admin/support'><i class="fa fa-envelope" aria-hidden="true"></i><span>Support</span></Link>
					</li>

					<li className="item">
                        <Link className="menu-btn" to='/admin/policy'><i class="fa fa-book" aria-hidden="true"></i><span>Policies</span></Link>
					</li>

					<li className="item">
                        <Link className="menu-btn" to='/admin/guidelines'><i class="fa fa-book" aria-hidden="true"></i><span>Guidelines</span></Link>
					</li>

					<li className="item">
                        <Link className="menu-btn" to='/admin/about'><i class="fa fa-address-card"></i><span>About Us</span></Link>
					</li>

				</div>
			</div>
			{/* <!--sidebar end--></div> */}
        </>
    );
}

export default AdminNavbar;