import { useState } from "react";
import { useFetch } from '../useFetch';
import {Link} from 'react-router-dom';

import '../Service.css';
import '../ServiceCard.css';

const FlightHome = ()=>{

    // Show Homepage by Flight
    const [flightHome, setFlightHome] = useState([]);
    const urlHome = 'http://127.0.0.1:8000/api/flightDashboard/index';
    useFetch(urlHome, setFlightHome);


    console.log(flightHome);
    console.log(flightHome.airCount);
	console.log(flightHome.airBookCount);
    console.log(flightHome.airAvailable);
	console.log(flightHome.airAirbus);
	console.log(flightHome.airJett);
	console.log(flightHome.reviewCount);


    return(
        <>
        <div>

            {/* !--main-section start--> */}
				<div className="card-section">
					<div className="dashbord">
						<div className="icon-section">
							<i className="fa fa-plane" aria-hidden="true"></i><br/>
							<small>Total Airplane</small>
							<p>{flightHome.airCount}</p>
						</div>
						<div className="detail-section">
                            <Link to='/flightDashboard/manageflight'><span>More Info</span></Link>
						</div>
					</div>

					<div className="dashbord dashbord-green">
						<div className="icon-section">
							<i className="fa fa-bell" aria-hidden="true"></i><br/>
							<small>Total Airplane Booked</small>
							<p>{flightHome.airBookCount}</p>
						</div>
						<div className="detail-section">
                            <Link to='/flightDashboard/flight-booking-list'><span>More Info</span></Link>
						</div>
					</div>

					<div className="dashbord dashbord-new">
						<div className="icon-section">
							<i className="fa fa-pause" aria-hidden="true"></i><br/>
							<small>Total Airplane Pending</small>
							<p>{flightHome.airPendingCount}</p>
						</div>
						<div className="detail-section">
                            <Link to='/flightDashboard/flight-pending-list'><span>More Info</span></Link>
						</div>
					</div>

					<div className="dashbord dashbord-orange">
						<div className="icon-section">
							<i className="fa fa-briefcase" aria-hidden="true"></i><br/>
							<small>Total Airplane Available</small>
							<p>{flightHome.airAvailable}</p>
						</div>
						<div className="detail-section">
                            <Link to='/flightDashboard/manageflight'><span>More Info</span></Link>
						</div>
					</div>	

					<div className="dashbord dashbord-blue">
						<div className="icon-section">
							<i className="fa fa-plane" aria-hidden="true"></i><br/>
							<small>Total Airbus</small>
							<p>{flightHome.airAirbus}</p>
						</div>
						<div className="detail-section">
                            <Link to='/flightDashboard/manageflight'><span>More Info</span></Link>
						</div>
					</div>

					<div className="dashbord dashbord-red">
						<div className="icon-section">
							<i className="fa fa-fighter-jet" aria-hidden="true"></i><br/>
							<small>Total Jett</small>
							<p>{flightHome.airJett}</p>
						</div>
						<div className="detail-section">
                            <Link to='/flightDashboard/manageflight'><span>More Info</span></Link>
						</div>
					</div>
					
					<div className="dashbord dashbord-skyblue">
						<div className="icon-section">
							<i className="fa fa-comments" aria-hidden="true"></i><br/>
							<small>Total Review</small>
							<p>{flightHome.reviewCount}</p>
						</div>
						<div className="detail-section">
                            <Link to='/flightDashboard/checkflightreview'><span>More Info</span></Link>
						</div>
					</div>

				</div>
				{/* <!--main-section end--> */}
            
        </div>
        </>
    )
}

export default FlightHome;