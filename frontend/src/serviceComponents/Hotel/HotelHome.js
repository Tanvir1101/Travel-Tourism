import { useState } from "react";
import { useFetch } from '../useFetch';
import {Link} from 'react-router-dom';

import '../Service.css';
import '../ServiceCard.css';

const HotelHome = ()=>{

    // Show Homepage by Hotel
    const [hotelHome, setHotelHome] = useState([]);
    const urlHome = 'http://127.0.0.1:8000/api/hotelDashboard/index';
    useFetch(urlHome, setHotelHome);


    console.log(hotelHome);
    console.log(hotelHome.roomCount);
	console.log(hotelHome.roomBookCount);
	console.log(hotelHome.roomPendingCount);
	console.log(hotelHome.facilityCount);
    console.log(hotelHome.roomAvailable);
	console.log(hotelHome.reviewCount);


    return(
        <>
        <div>

            {/* !--main-section start--> */}
				<div className="card-section">
					<div className="dashbord">
						<div className="icon-section">
							<i className="fa fa-bed" aria-hidden="true"></i><br/>
							<small>Total Room</small>
							<p>{hotelHome.roomCount}</p>
						</div>
						<div className="detail-section">
                            <Link to='/hotelDashboard/managehotelroom'><span>More Info</span></Link>
						</div>
					</div>

					<div className="dashbord dashbord-green">
						<div className="icon-section">
							<i className="fa fa-bookmark" aria-hidden="true"></i><br/>
							<small>Room Booked</small>
							<p>{hotelHome.roomBookCount}</p>
						</div>
						<div className="detail-section">
                            <Link to='/hotelDashboard/showhotelallboking'><span>More Info</span></Link>
						</div>
					</div>

					<div className="dashbord dashbord-orange">
						<div className="icon-section">
							<i className="fa fa-pause" aria-hidden="true"></i><br/>
							<small>Room Pending</small>
							<p>{hotelHome.roomPendingCount}</p>
						</div>
						<div className="detail-section">
                            <Link to='/hotelDashboard/room-book-pending'><span>More Info</span></Link>
						</div>
					</div>	

					<div className="dashbord dashbord-blue">
						<div className="icon-section">
							<i className="fa fa-list" aria-hidden="true"></i><br/>
							<small>Total Facility</small>
							<p>{hotelHome.facilityCount}</p>
						</div>
						<div className="detail-section">
                            <Link to='/hotelDashboard/managehotelfacility'><span>More Info</span></Link>
						</div>
					</div>

					<div className="dashbord dashbord-red">
						<div className="icon-section">
							<i className="fa fa-bed" aria-hidden="true"></i><br/>
							<small>Total Room Available</small>
							<p>{hotelHome.roomAvailable}</p>
						</div>
						<div className="detail-section">
                            <Link to='/hotelDashboard/managehotelroom'><span>More Info</span></Link>
						</div>
					</div>

					<div className="dashbord dashbord-skyblue">
						<div className="icon-section">
							<i className="fa fa-comments" aria-hidden="true"></i><br/>
							<small>Total Review</small>
							<p>{hotelHome.reviewCount}</p>
						</div>
						<div className="detail-section">
                            <Link to='/hotelDashboard/checkhotelreview'><span>More Info</span></Link>
						</div>
					</div>
				</div>
				{/* <!--main-section end--> */}
            
        </div>
        </>
    )
}

export default HotelHome;