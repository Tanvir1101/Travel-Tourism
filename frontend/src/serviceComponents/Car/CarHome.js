import { useState } from "react";
import { useFetch } from '../useFetch';
import {Link} from 'react-router-dom';

import '../Service.css';
import '../ServiceCard.css';

const CarHome = ()=>{

    // Show Homepage by Car
    const [carHome, setCarHome] = useState([]);
    const urlHome = 'http://127.0.0.1:8000/api/carDashboard/index';
    useFetch(urlHome, setCarHome);


    console.log(carHome);
    console.log(carHome.carCount);
	console.log(carHome.carBookCount);
	console.log(carHome.carLuxury);
	console.log(carHome.carStandard);
	console.log(carHome.reviewCount);


    return(
        <>
        <div>

            {/* !--main-section start--> */}
				<div className="card-section">
					<div className="dashbord">
						<div className="icon-section">
							<i className="fa fa-car" aria-hidden="true"></i><br/>
							<small>Total Car</small>
							<p>{carHome.carCount}</p>
						</div>
						<div className="detail-section">
                            <Link to='/carDashboard/managecar'><span>More Info</span></Link>
						</div>
						
					</div>
					<div className="dashbord dashbord-green">
						<div className="icon-section">
							<i className="fa fa-briefcase" aria-hidden="true"></i><br/>
							<small>Total Car Booked</small>
							<p>{carHome.carBookCount}</p>
						</div>
						<div className="detail-section">
                            <Link to='/carDashboard/car-booking-list'><span>More Info</span></Link>
						</div>
					</div>

					<div className="dashbord dashbord-new">
						<div className="icon-section">
							<i className="fa fa-pause" aria-hidden="true"></i><br/>
							<small>Total Car Pending</small>
							<p>{carHome.carPendingCount}</p>
						</div>
						<div className="detail-section">
                            <Link to='/carDashboard/car-pending-list'><span>More Info</span></Link>
						</div>
					</div>

					<div className="dashbord dashbord-orange">
						<div className="icon-section">
							<i className="fa fa-briefcase" aria-hidden="true"></i><br/>
							<small>Total Car Available</small>
							<p>{carHome.carAvailable}</p>
						</div>
						<div className="detail-section">
                            <Link to='/carDashboard/managecar'><span>More Info</span></Link>
						</div>
					</div>

					<div className="dashbord dashbord-blue">
						<div className="icon-section">
							<i className="fa fa-bandcamp" aria-hidden="true"></i><br/>
							<small>Total Luxury Car</small>
							<p>{carHome.carLuxury}</p>
						</div>
						<div className="detail-section">
                            <Link to='/carDashboard/managecar'><span>More Info</span></Link>
						</div>
					</div>

					<div className="dashbord dashbord-red">
						<div className="icon-section">
							<i className="fa fa-eercast" aria-hidden="true"></i><br/>
							<small>Total Standard Car</small>
							<p>{carHome.carStandard}</p>
						</div>
						<div className="detail-section">
                            <Link to='/carDashboard/managecar'><span>More Info</span></Link>
						</div>
					</div>

					<div className="dashbord dashbord-skyblue">
						<div className="icon-section">
							<i className="fa fa-comments" aria-hidden="true"></i><br/>
							<small>Total Review</small>
							<p>{carHome.reviewCount}</p>
						</div>
						<div className="detail-section">
                            <Link to='/carDashboard/checkcarreview'><span>More Info</span></Link>
						</div>
					</div>

				</div>
				{/* <!--main-section end--> */}
            
        </div>
        </>
    )
}

export default CarHome;