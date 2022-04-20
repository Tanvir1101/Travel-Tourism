import {Link} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
const FlightNavbar = ()=>{
    return(

    <>
            {/* <!--header menu start--> */}
                <div className="header">
                    <div className="header-menu">
                        <div className="title">Flight <span>Panel</span></div>
                             <ul>
                                  <li> <Link to='/flightDashboard/profile'> <i class="fa fa-user-circle"> </i> </Link> </li>
                                  <li> <Link to='/login'> <i class="fa fa-sign-out" aria-hidden="true"> </i></Link> </li>
                             </ul>
                        </div>
			        </div>
            {/* <!--header menu end--> */}

            {/* <!--sidebar start--> */}
                <div className="sidebar">
                    <div className="sidebar-menu">
                        <center className="profile">
                        <img src={process.env.PUBLIC_URL + "/images/airplane.jpg"}  />
                        </center>
                        <br>
                        </br>

                        <li className="item">
                                <Link className="menu-btn" to='/flightDashboard/index'><i class="fa fa-home" aria-hidden="true"></i><span>Dashboard</span></Link>
                        </li>

                        <li className="item" id="service">
                            <a href="#service" className="menu-btn">
                                <i className="fa fa-plane"></i><span>Airplane<i class="fa fa-chevron-circle-down drop-down" aria-hidden="true"></i></span>
                            </a>

                            <div className="sub-menu">
                                    <Link to='/flightDashboard/addflight'><i class="fa fa-plane"></i><span>New Airplane</span></Link>
                                    <Link to='/flightDashboard/manageflight'><i class="fa fa-wrench"></i><span>Manage Airplane</span></Link>
                            </div>

                        </li>

                        <li className="item" id="emp">
                            <a href="#emp" className="menu-btn">
                                <i className="fa fa-clipboard"></i><span>Booking<i class="fa fa-chevron-circle-down drop-down" aria-hidden="true"></i></span>
                            </a>

                                <div className="sub-menu">
                                    <Link to='/flightDashboard/flight-booking-list'><i class="fa fa-window-maximize"></i><span>Booking List</span></Link>
                                    <Link to='/flightDashboard/flight-pending-list'><i class="fa fa-tasks"></i><span>Booking Pending List</span></Link>
                                </div>
                        </li> 

                        <li className="item">
                                    <Link className="menu-btn" to='/flightDashboard/flighttype'><i class="fa fa-check" aria-hidden="true"></i><span>Airplane Type</span></Link>
					    </li> 

                        <li className="item">
                                    <Link className="menu-btn" to='/flightDashboard/flightavailability'><i class="fa fa-pencil-square" aria-hidden="true"></i><span>Airplane Availability</span></Link>
					    </li> 

                        <li className="item">
                                    <Link className="menu-btn" to='/flightDashboard/checkflightreview'><i class="fa fa-comment" aria-hidden="true"></i><span>Review List</span></Link>
					    </li> 
                        

                        <li className="item">
                                    <Link className="menu-btn" to='/flightDashboard/flighttransactionhistory'><i class="fa fa-money" aria-hidden="true"></i><span>Transaction Report</span></Link>
					    </li> 


                        <li className="item">
                                    <Link className="menu-btn" to='/flightDashboard/flightsupport'><i class="fa fa-envelope-open" aria-hidden="true"></i><span>Support</span></Link>
					    </li>     

                    </div>
			    </div>
            {/* <!--sidebar end--></div> */}
    </>
    
    );
}

export default FlightNavbar;