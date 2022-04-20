import {Link} from 'react-router-dom';

const AdminNavbar = ()=>{
    return(
        <div>
            <Link to='/admin'>Dashboard</Link> |
            <Link to='/admin/add-admin'>Add Admin</Link> |
            <Link to='/admin/all-admins'>Admin List</Link> |


            <Link to='/admin/all-users'>User List</Link> |
            <Link to='/admin/active-users'>Active User List</Link> |


            <Link to='/admin/add-employee'>Add Employee</Link> |
            <Link to='/admin/all-employees'>Employee List</Link> |
            <Link to='/admin/active-employees'>Active Employee List</Link> |
            
            
            <Link to='/admin/hotels-pending'>Hotel Approval</Link> |
            <Link to='/admin/all-hotels'>All Hotels</Link> |
            <Link to='/admin/hotel-bookings'>Hotel Bookings</Link> |


            <Link to='/admin/transports-pending'>Transport Approval</Link> |
            <Link to='/admin/all-cars'>All Car Companies</Link> |
            <Link to='/admin/all-flight'>All Flight Companies</Link> |
            <Link to='/admin/car-bookings'>Car Bookings</Link> |
            <Link to='/admin/flight-bookings'>Flight Bookings</Link> |

            <Link to='/admin/package-pending'>Package Approval</Link> |
            <Link to='/admin/all-packages'>All Packages</Link> |
            <Link to='/admin/package-bookings'>Package Bookings</Link> |
            <Link to='/admin/package-status'>Package Status</Link> |


            <Link to='/admin/place-pending'>Place Approval</Link> |
            <Link to='/admin/all-places'>All Places</Link> |
            
            
            <Link to='/admin/income-statement'>Income Statement</Link> |
            <Link to='/admin/transaction-history'>Transaction History</Link> |
            <Link to='/admin/pending-salary'>Salary Approval</Link> |
            
            
            <Link to='/admin/support'>Support</Link> |
            
            <Link to='/admin/policy'>Policies</Link> |
            
            <Link to='/admin/guidelines'>Guidelines</Link> |
            
            <Link to='/admin/about'>About Us</Link> |
            
            <Link to='/admin/profile'>Profile</Link> |
            
            <Link to='/login'>Logout</Link>
            

        </div>
    );
}

export default AdminNavbar;