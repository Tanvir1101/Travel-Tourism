import {Link} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

const HotelNavbar = ()=>{
    return(
        <>
            {/* <!--header menu start--> */}
                <div className="header">
                    <div className="header-menu">
                        <div className="title">Hotel <span>Panel</span></div>
                             <ul>
                                  <li> <Link to='/hotelDashboard/profile'> <i class="fa fa-user-circle"> </i> </Link> </li>
                                  <li> <Link to='/login'> <i class="fa fa-sign-out" aria-hidden="true"> </i></Link> </li>
                             </ul>
                        </div>
			        </div>
            {/* <!--header menu end--> */}

            {/* <!--sidebar start--> */}
                <div className="sidebar">
                    <div className="sidebar-menu">
                        <center className="profile">
                        <img src={process.env.PUBLIC_URL + "/images/royal_tulip1.jpg"} height="10px" width="10px" />
                        </center>
                        <br>
                        </br>

                        <li className="item">
                                <Link className="menu-btn" to='/hotelDashboard/index'><i class="fa fa-home" aria-hidden="true"></i><span>Dashboard</span></Link>
                        </li>

                        <li className="item" id="service">
                            <a href="#service" className="menu-btn">
                                <i className="fa fa-cog"></i><span>Facilities<i class="fa fa-chevron-circle-down drop-down" aria-hidden="true"></i></span>
                            </a>

                            <div className="sub-menu">
                                    <Link to='/hotelDashboard/addhotelfacility'><i class="fa fa-puzzle-piece"></i><span>New Facilities</span></Link>
                                    <Link to='/hotelDashboard/managehotelfacility'><i class="fa fa-list"></i><span>Manage Facilities</span></Link>
                            </div>

                        </li>

                        <li className="item" id="user">
                            <a href="#user" className="menu-btn">
                                <i className="fa fa-bed"></i><span>Room<i class="fa fa-chevron-circle-down drop-down" aria-hidden="true"></i></span>
                            </a>

                                <div className="sub-menu">
                                    <Link to='/hotelDashboard/addhotelroom'><i class="fa fa-bed"></i><span>New Room</span></Link>
                                    <Link to='/hotelDashboard/managehotelroom'><i class="fa fa-tasks"></i><span>Manage Room</span></Link>
                                </div>
                        </li>

                        <li className="item" id="emp">
                            <a href="#emp" className="menu-btn">
                                <i className="fa fa-clipboard"></i><span>Booking<i class="fa fa-chevron-circle-down drop-down" aria-hidden="true"></i></span>
                            </a>

                                <div className="sub-menu">
                                    <Link to='/hotelDashboard/showhotelallboking'><i class="fa fa-window-maximize"></i><span>Booking List</span></Link>
                                    <Link to='/hotelDashboard/room-book-pending'><i class="fa fa-tasks"></i><span>Booking Pending List</span></Link>
                                </div>
                        </li> 

                        <li className="item">
                                    <Link className="menu-btn" to='/hotelDashboard/checkhotelreview'><i class="fa fa-comment" aria-hidden="true"></i><span>Review List</span></Link>
					    </li> 
                        

                        <li className="item">
                                    <Link className="menu-btn" to='/hotelDashboard/hoteltransactionhistory'><i class="fa fa-money" aria-hidden="true"></i><span>Transaction Report</span></Link>
					    </li> 


                        <li className="item">
                                    <Link className="menu-btn" to='/hotelDashboard/hotelsupport'><i class="fa fa-envelope-open" aria-hidden="true"></i><span>Support</span></Link>
					    </li>     

                    </div>
			    </div>
            {/* <!--sidebar end--></div> */}
        </>

    );
}

export default HotelNavbar;