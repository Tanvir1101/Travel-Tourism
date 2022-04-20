import {Link} from 'react-router-dom';
import './UserNavbar.css';

const UserNavbar2 = ()=>{
    return(

        <>

            <div class="wrapper">
                <div class="navbar">
                    <ul class="main_ul">
                        <li><Link to='/user'>Home</Link></li>
                        <li><a href="#">Booking
                        <span class="arrow"></span>
                        </a>
                            <ul class="dropdown">
                                <li><Link to='/user/flight'>Flight</Link></li>
                                <li><Link to='/user/hotel'>Hotel</Link></li>
                                <li><Link to='/user/car'>Car</Link></li>
                            </ul>
                        </li>
                        <li><a href="#">Service
                        <span class="arrow"></span>
                        </a>
                        <ul class="dropdown">
                                <li><Link to='/user/destination'>Destination</Link></li>
                                <li><Link to='/user/package'>Packages</Link></li>
                                <li><Link to='/user/show_hotels'>Hotels</Link></li>
                                <li><Link to='/user/flight_list'>Flight</Link></li>
                                <li><Link to='/user/Car_list'>Car</Link></li>
                        </ul>  
                        </li>
                        <li><Link to='/user/travel_history'>Travel History</Link></li>
                        <li><Link to='/user/guideline'>Travel Guideline</Link></li>
                        <li><Link to='/user/notification'>Notification</Link></li>
                        <li><a href="#">About
                        <span class="arrow"></span>
                        </a>
                        <ul class="dropdown">
                                <li><Link to='/user/about'>About Us</Link></li>
                                <li><Link to='/user/contact'>Contact Us</Link></li>
                                <li><Link to='/user/privay_policy'>Privacy Policy</Link></li>
                                <li><Link to='/user/faq'>FAQ</Link></li>
                                <li><Link to='/user/registration'>User Registraion</Link></li>
                        </ul>  
                        </li>
                        <li><Link to='/user/give_review'>Review</Link></li> 
                        <li><Link to='/user/profile'>Profile</Link></li> 
                        <li><Link to='/login'>Logout</Link></li> 
                    </ul>  
                </div>
            </div>

        </>

    );
}
export default UserNavbar2;