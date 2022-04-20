import { useState } from "react";
import { useFetch } from './adminComponents/useFetch';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import 'font-awesome/css/font-awesome.min.css';


// login
import Login from "./loginComponents/Login";

// *******************admin*********************************

import AdminNavbar from "./adminComponents/AdminNavbar";
import AdminNavbar2 from "./adminComponents/AdminNavbar2";

import AdminHome from "./adminComponents/AdminHome";

import AdminProfile from "./adminComponents/AdminProfile";

import AdminAdminList from "./adminComponents/AdminAdminList";

import AdminAddEmployee from "./adminComponents/AdminAddEmployee";
import AdminEmployeeList from "./adminComponents/AdminEmployeeList";
import AdminUserList from "./adminComponents/AdminUserList";
import AdminUserDetailsList from "./adminComponents/AdminUserDetailsList";

import AdminHotelADList from "./adminComponents/AdminHotelADList";
import AdminHotelList from "./adminComponents/AdminHotelList";
import AdminHotelBookingsList from "./adminComponents/AdminHotelBookingsList";

import AdminTransportADList from "./adminComponents/AdminTransportADList";
import AdminCarList from "./adminComponents/AdminCarList";
import AdminFlightList from "./adminComponents/AdminFlightList";
import AdminCarBookingsList from "./adminComponents/AdminCarBookingsList";
import AdminFlightBookingsList from "./adminComponents/AdminFlightBookingsList";

import AdminPlaceADList from "./adminComponents/AdminPlaceADList";
import AdminPlaceList from "./adminComponents/AdminPlaceList";

import AdminPackageADList from "./adminComponents/AdminPackageADList";
import AdminPackageList from "./adminComponents/AdminPackageList";
import AdminPackageBookingsList from "./adminComponents/AdminPackageBookingsList";
import AdminPackageStatus from "./adminComponents/AdminPackageStatus";


import AdminIncomeStatementList from "./adminComponents/AdminIncomeStatementList";
import AdminTransactionList from "./adminComponents/AdminTransactionList";
import AdminSalaryADList from "./adminComponents/AdminSalaryADList";


import AdminSupportList from "./adminComponents/AdminSupportList";


import AdminPolicy from "./adminComponents/AdminPolicy";
import AdminPolicyForm from "./adminComponents/AdminPolicyForm";


import AdminGuidelines from "./adminComponents/AdminGuidelines";
import AdminGuidelinesForm from "./adminComponents/AdminGuidelinesForm";

import AdminAbout from "./adminComponents/AdminAbout";
import AdminAboutForm from "./adminComponents/AdminAboutForm";



// ****************************** Admin END************************************

// ****************************************************
// ****************************************************
// ****************************************************
// ****************************************************
// ****************************************************
// ****************************************************
// ****************************************************
// ****************************************************



// // useFetch----------------------------------------- SERVICE
// import { useFetch } from './serviceComponents/useFetch';


// Registration------------------------------ SERVICE
import Register from "./Registration/Register";
import HotelRegistration from "./Registration/HotelRegistration";
import TransportRegistration from "./Registration/TransportRegistration";


// Hotel Import---------------------------------------- SERVICE Start
import HotelHome from "./serviceComponents/Hotel/HotelHome";
import HotelProfile from "./serviceComponents/Hotel/HotelProfile";
import HotelNavbar from "./serviceComponents/Hotel/HotelNavbar";
import ServiceAddFacility from "./serviceComponents/Hotel/ServiceAddFacility";
import ServiceEditFacility from "./serviceComponents/Hotel/ServiceEditFacility";
import ServiceAddRoom from "./serviceComponents/Hotel/ServiceAddRoom";
import ServiceEditRoom from "./serviceComponents/Hotel/ServiceEditRoom";
import ServiceFacilityList from "./serviceComponents/Hotel/ServiceFacilityList";
import ServiceRoomList from "./serviceComponents/Hotel/ServiceRoomList";
import ServiceBookingList from "./serviceComponents/Hotel/ServiceBookingList";
import ServiceBookingDetailsList from "./serviceComponents/Hotel/ServiceBookingDetailsList";
import ServicePendingBookingList from "./serviceComponents/Hotel/ServicePendingBookingList";
import ServiceReviewList from "./serviceComponents/Hotel/ServiceReviewList";
import ServiceTransactionList from "./serviceComponents/Hotel/ServiceTransactionList";
import ServiceHotelSupport from "./serviceComponents/Hotel/ServiceHotelSupport";
// Hotel Import----------------------------------------------------- SERVICE End



// Car Import ----------------------------------------------- SERVICE Start
import CarHome from "./serviceComponents/Car/CarHome";
import CarProfile from "./serviceComponents/Car/CarProfile";
import CarNavbar from "./serviceComponents/Car/CarNavbar";
import ServiceAddCar from "./serviceComponents/Car/ServiceAddCar";
import ServiceEditCar from "./serviceComponents/Car/ServiceEditCar";
import ServiceCarManageList from "./serviceComponents/Car/ServiceCarManageList";
import ServiceCarBookingList from "./serviceComponents/Car/ServiceCarBookingList";
import ServiceCarBookingDetailsList from "./serviceComponents/Car/ServiceCarBookingDetailsList";
import ServiceCarPendingBookingList from "./serviceComponents/Car/ServiceCarPendingBookingList";
import ServiceCarType from "./serviceComponents/Car/ServiceCarType";
import ServiceCarAvailability from "./serviceComponents/Car/ServiceCarAvailability";
import ServiceCarReviewList from "./serviceComponents/Car/ServiceCarReviewList";
import ServiceCarTransactionList from "./serviceComponents/Car/ServiceCarTransactionList";
import ServiceCarSupport from "./serviceComponents/Car/ServiceCarSupport";
// Car Import ------------------------------------------------------  SERVICE END



// Flight Import----------------------SERVICE Start
import FlightHome from "./serviceComponents/Flight/FlightHome";
import FlightProfile from "./serviceComponents/Flight/FlightProfile";
import FlightNavbar from "./serviceComponents/Flight/FlightNavbar";
import ServiceAddFlight from "./serviceComponents/Flight/ServiceAddFlight";
import ServiceEditFlight from "./serviceComponents/Flight/ServiceEditFlight";
import ServiceFlightManageList from "./serviceComponents/Flight/ServiceFlightManageList";
import ServiceFlightBookingList from "./serviceComponents/Flight/ServiceFlightBookingList";
import ServiceFlightBookingDetailsList from "./serviceComponents/Flight/ServiceFlightBookingDetailsList";
import ServiceFlightPendingBookingList from "./serviceComponents/Flight/ServiceFlightPendingBookingList";
import ServiceFlightType from "./serviceComponents/Flight/ServiceFlightType";
import ServiceFlightAvailability from "./serviceComponents/Flight/ServiceFlightAvailability";
import ServiceFlightReviewList from "./serviceComponents/Flight/ServiceFlightReviewList";
import ServiceFlightTransactionList from "./serviceComponents/Flight/ServiceFlightTransactionList";
import ServiceFlightSupport from "./serviceComponents/Flight/ServiceFlightSupport";
// Flight Import----------------------SERVICE END
// Flight Import----------------------SERVICE END
// Flight Import----------------------SERVICE END
// Flight Import----------------------SERVICE END
// Flight Import----------------------SERVICE END
// Flight Import----------------------SERVICE END
// Flight Import----------------------SERVICE END




// emp Start*************************************
import EmployeeNavbar from "./employeeComponents/EmployeeNavbar";
import EmployeeProfile from "./employeeComponents/EmployeeProfile";
import EmployeeHome from "./employeeComponents/EmployeeHome";
import EmployeeAddSalary from "./employeeComponents/EmployeeAddSalary";
import EmployeeAddStatement from "./employeeComponents/EmployeeAddStatement";
import EmployeeAddTransaction from "./employeeComponents/EmployeeAddTransaction";
import EmployeeAddAdvertisement from "./employeeComponents/EmployeeAddAdvertisement";
import EmployeeAddPromo from "./employeeComponents/EmployeeAddPromo";
import EmployeeAddFaq from "./employeeComponents/EmployeeAddFaq";
import EmployeeAddPackage from "./employeeComponents/EmployeeAddPackage";
import EmployeeEditPackage from "./employeeComponents/EmployeeEditPackage";
import EmployeePackageList from "./employeeComponents/EmployeePackageList";
import EmployeeAddPlace from "./employeeComponents/EmployeeAddPlace";
import EmployeeEditPlace from "./employeeComponents/EmployeeEditPlace";
import EmployeePlaceList from "./employeeComponents/EmployeePlaceList";
import EmployeeSalaryList from "./employeeComponents/EmployeeSalaryList";
import EmployeeStatementList from "./employeeComponents/EmployeeStatementList";
import EmployeeTransactionList from "./employeeComponents/EmployeeTransactionList";
import EmployeeReviewList from "./employeeComponents/EmployeeReviewList";
import EmployeeTransportList from "./employeeComponents/EmployeeTransportList";
import EmployeeHotelList from "./employeeComponents/EmployeeHotelList";
import EmployeeFaqList from "./employeeComponents/EmployeeFaqList";
import EmployeeAdvertisementList from "./employeeComponents/EmployeeAdvertisementList";
import EmployeePromoList from "./employeeComponents/EmployeePromoList";
import EmployeeSupportList from "./employeeComponents/EmployeeSupportList";
import EmployeeUserList from "./employeeComponents/EmployeeUserList";
import EmployeeUserDetailsList from "./employeeComponents/EmployeeUserDetailsList";
import EmployeeGuidelines from "./employeeComponents/EmployeeGuidelines";
import EmployeeGuidelinesForm from "./employeeComponents/EmployeeGuidelinesForm";

// emp END*********************************************************
// emp END*********************************************************
// emp END*********************************************************
// emp END*********************************************************
// emp END*********************************************************
// emp END*********************************************************
// emp END*********************************************************
// emp END*********************************************************
// emp END*********************************************************
// emp END*********************************************************
// emp END*********************************************************
// emp END*********************************************************
// emp END*********************************************************
// emp END*********************************************************





import UserNavbar from "./userComponents/UserNavbar";
import UserFooter from "./userComponents/UserFooter";
import UserHomePage from "./userComponents/UserHomePage";


import UserProfile from "./userComponents/UserProfile";

import UserRegistration from "./userComponents/UserRegistration";

import UserReview from "./userComponents/UserReview";

import UserContactUs from "./userComponents/UserContactUs";

import UserBookedHotelList from "./userComponents/UserBookedHotelList";
import UserShowHotelList from "./userComponents/UserShowHotelList";
import UserHotelRoomList from "./userComponents/UserHotelRoomList";
import UserConfirmHotel from "./userComponents/UserConfirmHotel";
import UserHotelFacilityList from "./userComponents/UserHotelFacilityList";

import UserConfirmFlight from "./userComponents/UserConfirmFlight";
import UserBookedFlightList from "./userComponents/UserBookedFlightList";
import UserFlightBookingList from "./userComponents/UserFlightBookingList";

import UserConfirmCar from "./userComponents/UserConfirmCar";
import UserBookedCarList from "./userComponents/UserBookedCarList";
import UserCarBookingList from "./userComponents/UserCarBookingList";

import UserTravelHistoryList from "./userComponents/UserTravelHistoryList";

import UserShowNotification from "./userComponents/UserShowNotification";

import UserShowTravelGuideline from "./userComponents/UserShowTravelGuideline";

import UserShowAboutUs from "./userComponents/UserShowAboutUs";

import UserShowPrivacyPolicy from "./userComponents/UserShowPrivacyPolicy";

import UserShowFAQ from "./userComponents/UserShowFAQ";

import UserPackageList from "./userComponents/UserPackageList";

import UserDestinationList from "./userComponents/UserDestinationList";
import UserShowDestinationDetails from "./userComponents/UserShowDestinstionDetails";



// User END********************************************************************
// User END********************************************************************
// User END********************************************************************
// User END********************************************************************
// User END********************************************************************
// User END********************************************************************
// User END********************************************************************
// User END********************************************************************
// User END********************************************************************
// User END********************************************************************
// User END********************************************************************
// User END********************************************************************
// User END********************************************************************










function App() {


    // *********************Admin Start***************************


// Show all employees by admin
    const [adminEmployee, setAdminEmployees] = useState([]);
    const url = 'http://127.0.0.1:8000/api/admin/all-employees';
    useFetch(url, setAdminEmployees);


// Show all Active employees by admin
    const [adminActiveEmployee, setAdminActiveEmployees] = useState([]);
    const urlA = 'http://127.0.0.1:8000/api/admin/active-employees';
    useFetch(urlA, setAdminActiveEmployees);


// Show all users by admin
    const [adminUser, setAdminUser] = useState([]);
    const urlU1 = 'http://127.0.0.1:8000/api/admin/all-users';
    useFetch(urlU1, setAdminUser);


// Show all Active users by admin
    const [adminActiveUser, setAdminActiveUser] = useState([]);
    const urlUA = 'http://127.0.0.1:8000/api/admin/active-users';
    useFetch(urlUA, setAdminActiveUser);


// Show user details by admin
    const [adminUserDetails, setAdminUserDetails] = useState([]);
    // const urlUD = 'http://127.0.0.1:8000/api/admin/all-users';
    // useFetch(urlUD, setAdminUserDetails);



// Show all Admins by admin
    const [adminadmin, setAdminAdmins] = useState([]);
    const url2 = 'http://127.0.0.1:8000/api/admin/all-admins';
    useFetch(url2, setAdminAdmins);


// Show Pending Hotels by admin
    const [adminHotelAD, setAdminHotelAD] = useState([]);
    const url3 = 'http://127.0.0.1:8000/api/admin/hotels-pending';
    useFetch(url3, setAdminHotelAD);


// Show all Hotels by admin
    const [adminHotel, setAdminHotel] = useState([]);
    const url4 = 'http://127.0.0.1:8000/api/admin/all-hotels';
    useFetch(url4, setAdminHotel);



// Show all Hotel Bookings by admin
    const [adminHotelBookings, setAdminHotelBookings] = useState([]);
    const urlHB = 'http://127.0.0.1:8000/api/admin/hotel-bookings';
    useFetch(urlHB, setAdminHotelBookings);


// Show Pending Transports by admin
    const [adminTransportAD, setAdminTransportAD] = useState([]);
    const url5 = 'http://127.0.0.1:8000/api/admin/transports-pending';
    useFetch(url5, setAdminTransportAD);

// Show all Cars by admin
    const [adminCar, setAdminCar] = useState([]);
    const url6 = 'http://127.0.0.1:8000/api/admin/all-cars';
    useFetch(url6, setAdminCar);

// Show all Flights by admin
    const [adminFlight, setAdminFlight] = useState([]);
    const url7 = 'http://127.0.0.1:8000/api/admin/all-flight';
    useFetch(url7, setAdminFlight);


// Show all Car Bookings by admin
    const [adminCarBookings, setAdminCarBookings] = useState([]);
    const urlCB = 'http://127.0.0.1:8000/api/admin/car-bookings';
    useFetch(urlCB, setAdminCarBookings);

// Show all Flight Bookings by admin
    const [adminFlightBookings, setAdminFlightBookings] = useState([]);
    const urlCF = 'http://127.0.0.1:8000/api/admin/flight-bookings';
    useFetch(urlCF, setAdminFlightBookings);


// Show Pending Places by admin
    const [adminPlaceAD, setAdminPlaceAD] = useState([]);
    const urlPAD = 'http://127.0.0.1:8000/api/admin/place-pending';
    useFetch(urlPAD, setAdminPlaceAD);


// Show all Places by admin
    const [adminPlace, setAdminPlace] = useState([]);
    const urlP = 'http://127.0.0.1:8000/api/admin/all-places';
    useFetch(urlP, setAdminPlace);



// Show Pending Packages by admin
    const [adminPackageAD, setAdminPackageAD] = useState([]);
    const urlPkAD = 'http://127.0.0.1:8000/api/admin/package-pending';
    useFetch(urlPkAD, setAdminPackageAD);


// Show all Packages by admin
    const [adminPackage, setAdminPackage] = useState([]);
    const urlPk = 'http://127.0.0.1:8000/api/admin/all-packages';
    useFetch(urlPk, setAdminPackage);

// Show all Package Bookings by admin
    const [adminPackageBookings, setAdminPackageBookings] = useState([]);
    const urlPkB = 'http://127.0.0.1:8000/api/admin/package-bookings';
    useFetch(urlPkB, setAdminPackageBookings);


// Package Status change by admin
    const [adminPackageAll, setAdminPackageAll] = useState([]);
    const urlPkS = 'http://127.0.0.1:8000/api/admin/package-status';
    useFetch(urlPkS, setAdminPackageAll);


// Income Statement by admin
    const [adminIncomeStatement, setadminIncomeStatement] = useState([]);
    const urlIS = 'http://127.0.0.1:8000/api/admin/income-statement';
    useFetch(urlIS, setadminIncomeStatement);

// Transaction History by admin
    const [adminTransaction, setAdminTransaction] = useState([]);
    const urlTH = 'http://127.0.0.1:8000/api/admin/transaction-history';
    useFetch(urlTH, setAdminTransaction);


// Show Pending Salary by admin
    const [adminSalaryAD, setAdminSalaryAD] = useState([]);
    const urlPS = 'http://127.0.0.1:8000/api/admin/pending-salary';
    useFetch(urlPS, setAdminSalaryAD);



// Show Support Messages by admin
    const [adminSupport, setAdminSupport] = useState([]);
    const urlS = 'http://127.0.0.1:8000/api/admin/support';
    useFetch(urlS, setAdminSupport);



//Show Policy Policy by Admin
    const [adminPolicy, setAdminPolicy] = useState([]);
    const urlPP = 'http://127.0.0.1:8000/api/admin/policy';
    useFetch(urlPP, setAdminPolicy);


//Show Guidelines by Admin
const [adminGuidelines, setAdminGuidelines] = useState([]);
const urlGL = 'http://127.0.0.1:8000/api/admin/guidelines';
useFetch(urlGL, setAdminGuidelines);


//Show About Policy by Admin
const [adminAbout, setAdminAbout] = useState([]);
const urlAA = 'http://127.0.0.1:8000/api/admin/about';
useFetch(urlAA, setAdminAbout);



//Google login data by Admin
const [google, setGoogle] = useState(false);

const googlef = (tf) => { 

    setGoogle(tf);
    console.log("Google login Status: "+google);

};



//store login data by Admin
const [loginId, setLoginId] = useState([]);
const [loginFirstname, setLoginFirstname] = useState([]);
const [loginLastname, setLoginLastname] = useState([]);
const [loginGender, setLoginGender] = useState([]);
const [loginEmail, setLoginEmail] = useState([]);
const [loginUsername, setLoginUsername] = useState([]);

//store LOGIN data by Car
const [carloginId, setCarLoginId] = useState([]);
const [carloginName, setCarLoginName] = useState([]);
const [carloginPhone, setCarLoginPhone] = useState([]);
const [carloginEmail, setCarLoginEmail] = useState([]);
const [carloginType, setCarLoginType] = useState([]);

//store LOGIN data by Flight
const [flightloginId, setFlightLoginId] = useState([]);
const [flightloginName, setFlightLoginName] = useState([]);
const [flightloginPhone, setFlightLoginPhone] = useState([]);
const [flightloginEmail, setFlightLoginEmail] = useState([]);
const [flightloginType, setFlightLoginType] = useState([]);

//store LOGIN data by Hotel
const [hotelloginId, setHotelLoginId] = useState([]);
const [hotelloginName, setHotelLoginName] = useState([]);
const [hotelloginLocation, setHotelLoginLocation] = useState([]);
const [hotelloginAddress, setHotelLoginAddress] = useState([]);
const [hotelloginPhone, setHotelLoginPhone] = useState([]);
const [hotelloginEmail, setHotelLoginEmail] = useState([]);
const [hotelloginType, setHotelLoginType] = useState([]);


//store login data by Admin
const loginIdf = ({id}) => { 

    if(id.type=="admin")
    {
        setLoginId(id.id);
        setLoginFirstname(id.firstname);
        setLoginLastname(id.lastname);
        setLoginGender(id.gender);
        setLoginEmail(id.email);
        setLoginUsername(id.username);
    }

    else if(id.type=="car")
    {
        setCarLoginId(id.id);
        setCarLoginName(id.name);
        setCarLoginPhone(id.phone);
        setCarLoginEmail(id.email);
        setCarLoginType(id.type);
    }

    else if(id.type=="flight")
    {
        setFlightLoginId(id.id);
        setFlightLoginName(id.name);
        setFlightLoginPhone(id.phone);
        setFlightLoginEmail(id.email);
        setFlightLoginType(id.type);

    }

    else if(id.type=="hotel")
    {
        setHotelLoginId(id.id);
        setHotelLoginName(id.name);
        setHotelLoginLocation(id.location);
        setHotelLoginAddress(id.address);
        setHotelLoginPhone(id.phone);
        setHotelLoginEmail(id.email);
        setHotelLoginType(id.type);

    }


    else if(id.type=="emp")
    {
        setLoginId(id.id);
        setLoginFirstname(id.firstname);
        setLoginLastname(id.lastname);
        setLoginGender(id.gender);
        setLoginEmail(id.email);
        setLoginUsername(id.username);
    }

    else if(id.type=="user")
    {
        setLoginId(id.id);
        setLoginFirstname(id.firstname);
        setLoginLastname(id.lastname);
        setLoginGender(id.gender);
        setLoginEmail(id.email);
        setLoginUsername(id.username);
    }

};


// Profile update by admin
const adminProfileUpdate =async (newProfile) => { 

    const axios = require('axios').default;

    const status = await axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/admin/profile',
        //data: JSON.stringify(newUser)
        data:newProfile,
      });

      if (status)
      {
        alert("Profile Updated successfully");
        
        setLoginFirstname(newProfile.firstname);
        setLoginLastname(newProfile.lastname);
        setLoginGender(newProfile.gender);
        setLoginEmail(newProfile.email);
        setLoginUsername(newProfile.username);

        console.log(newProfile);
      }


};



// Add Employee by admin
    const adminAddEmployee = (newEmployee) => { 
        var answer = window.confirm("Add this Employee?");
        if (answer) {

            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/admin/add-employee',
                //data: JSON.stringify(newUser)
                data:newEmployee,
            });
            setAdminEmployees([...adminEmployee, newEmployee]);
            console.log(newEmployee);
        }
    };


// Delete an Employee by admin
    const adminEmployeeDeleteCallback = (id) => {
        var answer = window.confirm("Are you sure to Delete?");
        if (answer) {
                
            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/admin/employee/delete',
                data:{
                    id:id,
                }
            });

            const data = adminEmployee.filter((employee) => employee.id != id);
            setAdminEmployees(data);

            const dataA = adminActiveEmployee.filter((employee) => employee.id != id);
            setAdminActiveEmployees(dataA);
        }
    };

    // Delete an User by admin
    const adminUserDeleteCallback = (id) => {
        var answer = window.confirm("Are you sure to Delete?");
        if (answer) {
                    
            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/admin/user/delete',
                data:{
                    id:id,
                }
            });

            const data = adminUser.filter((user) => user.id != id);
            setAdminUser(data);

            const dataA = adminActiveUser.filter((user) => user.id != id);
            setAdminActiveUser(dataA);
        }
    };

    

    // Show an User Details by admin
    const adminUserDetailsCallback = (id) => {
        const data = adminUser.filter((user) => user.id == id);
        setAdminUserDetails(data);
        console.log(data);
    };

    // Show an Employee Details by admin
    const adminEmployeeDetailsCallback = (id) => {
        const data = adminEmployee.filter((user) => user.id == id);
        setAdminUserDetails(data);
        console.log(data);
    };



    // Add Admin by admin
    const adminAddAdmin = (newAdmin) => { 
        var answer = window.confirm("Add this Admin?");
        if (answer) {

            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/admin/add-admin',
                //data: JSON.stringify(newUser)
                data:newAdmin,
            });
            newAdmin.image="admin.jpg";
            setAdminAdmins([...adminadmin, newAdmin]);
            console.log(newAdmin);
        }
    };


// Delete an Admin by admin
    const adminAdminDeleteCallback = (id) => {

        var answer = window.confirm("Are you sure to Delete?");
        if (answer) {
                    
            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/admin/admin/delete',
                data:{
                    id:id,
                }
            });

            const data = adminadmin.filter((admin) => admin.id != id);
            setAdminAdmins(data);
        }
    };


// Approve Hotel by admin
    const adminHotelApproveCallback = (id) => {

        var answer = window.confirm("Are you sure to Approve?");
        if (answer) {
                
            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/admin/hotel/approve',
                data:{
                    id:id,
                }
            });

            const data = adminHotelAD.filter((hotelAD) => hotelAD.id != id);
            const data2 = adminHotelAD.filter((hotelAD) => hotelAD.id == id);
            console.log(data);
            console.log(data2);
            setAdminHotelAD(data);
            setAdminHotel([...adminHotel, ...data2]);
        }
    };


// Decline Hotel by admin
    const adminHotelDeclineCallback = (id) => {

        var answer = window.confirm("Are you sure to Decline?");
        if (answer) {
                
            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/admin/hotel/decline',
                data:{
                    id:id,
                }
            });

            const data = adminHotelAD.filter((hotelAD) => hotelAD.id != id);
            setAdminHotelAD(data);
        }
    };


// Delete Hotel by admin
    const adminHotelDeleteCallback = (id) => {

        var answer = window.confirm("Are you sure to Delete?");
        if (answer) {

            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/admin/hotel/delete',
                data:{
                    id:id,
                }
            });

            const data = adminHotel.filter((hotel) => hotel.id != id);
            setAdminHotel(data);
        }
    };


    // Approve Transport by admin
    const adminTransportApproveCallback = (id) => {

        var answer = window.confirm("Are you sure to Approve?");
        if (answer) {

            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/admin/transport/approve',
                data:{
                    id:id,
                }
            });

            const data = adminTransportAD.filter((transportAD) => transportAD.id != id);
            const data2 = adminTransportAD.filter((transportAD) => transportAD.id == id);
            const data3 = {...data2};
            // const type = data2.type;
            console.log(data3[0]['type']);
            const type = data3[0]['type'];
            setAdminTransportAD(data);

            if(type == "Car"){
                setAdminCar([...adminCar, ...data2]);
            }
            else if(type == "Flight"){
                setAdminFlight([...adminFlight, ...data2]);
            }
        }
        
    };


// Decline Transport by admin
    const adminTransportDeclineCallback = (id) => {

        var answer = window.confirm("Are you sure to Decline?");
        if (answer) {

            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/admin/transport/decline',
                data:{
                    id:id,
                }
            });

            const data = adminTransportAD.filter((transportAD) => transportAD.id != id);
            setAdminTransportAD(data);
        }
    };


// Delete Car by admin
    const adminCarDeleteCallback = (id) => {
        var answer = window.confirm("Are you sure to Delete?");
        if (answer) {

            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/admin/car/delete',
                data:{
                    id:id,
                }
            });

            const data = adminCar.filter((car) => car.id != id);
            setAdminCar(data);
        }
    };


// Delete Flight by admin
    const adminFlightDeleteCallback = (id) => {
        var answer = window.confirm("Are you sure to Delete?");
        if (answer) {

            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/admin/flight/delete',
                data:{
                    id:id,
                }
            });

            const data = adminFlight.filter((car) => car.id != id);
            setAdminFlight(data);
        }
    };



    // Approve Place by admin
    const adminPlaceApproveCallback = (id) => {
        var answer = window.confirm("Are you sure to Approve?");
        if (answer) {

            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/admin/place/approve',
                data:{
                    id:id,
                }
            });

            const data = adminPlaceAD.filter((placeAD) => placeAD.id != id);
            const data2 = adminPlaceAD.filter((placeAD) => placeAD.id == id);

            setAdminPlaceAD(data);
            setAdminPlace([...adminPlace, ...data2]);
        }
    };


// Decline Place by admin
    const adminPlaceDeclineCallback = (id) => {

        var answer = window.confirm("Are you sure to Decline?");
        if (answer) {

            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/admin/place/decline',
                data:{
                    id:id,
                }
            });

            const data = adminPlaceAD.filter((placeAD) => placeAD.id != id);
            setAdminPlaceAD(data);
        }
    };


// Delete Place by admin
    const adminPlaceDeleteCallback = (id) => {

        var answer = window.confirm("Are you sure to Delete?");
        if (answer) {

            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/admin/place/delete',
                data:{
                    id:id,
                }
            });

            const data = adminPlace.filter((place) => place.id != id);
            setAdminPlace(data);
        }
    };




    // Approve Package by admin
    const adminPackageApproveCallback = (id) => {

        var answer = window.confirm("Are you sure to Approve?");
        if (answer) {

            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/admin/package/approve',
                data:{
                    id:id,
                }
                });

            const data = adminPackageAD.filter((packageAD) => packageAD.id != id);
            const data2 = adminPackageAD.filter((packageAD) => packageAD.id == id);

            setAdminPackageAD(data);
            setAdminPackage([...adminPackage, ...data2]);
        }
    };


// Decline Package by admin
    const adminPackageDeclineCallback = (id) => {
        var answer = window.confirm("Are you sure to Decline?");
        if (answer) {

            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/admin/package/decline',
                data:{
                    id:id,
                }
                });

            const data = adminPackageAD.filter((packageAD) => packageAD.id != id);
            setAdminPackageAD(data);
        }
    };


// Delete Package by admin
    const adminPackageDeleteCallback = (id) => {

        var answer = window.confirm("Are you sure to Delete?");
        if (answer) {

            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/admin/package/delete',
                data:{
                    id:id,
                }
                });

            const data = adminPackage.filter((packageD) => packageD.id != id);
            setAdminPackage(data);
        }
    };

// Package Status change by admin
    const adminPackageStatusCallback = ({place, status}) => {

        var answer = window.confirm("Are you sure to update?");
        if (answer) {

        const axios = require('axios').default;

        console.log(place);

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/admin/package-status',
            data:{
                place: place,
                status: status,
            }
            });

            alert("Updated successfully");
        }

        // const data = adminPackage.filter((packageD) => packageD.id != id);
        // setAdminPackage(data);
    };
    




    // Approve Salary by admin
    const adminSalaryApproveCallback = (id) => {

        var answer = window.confirm("Are you sure to approve?");
        if (answer) {

            const axios = require('axios').default;
            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/admin/salary/approve',
                data:{
                    id:id,
                }
            });

            const data = adminSalaryAD.filter((salaryAD) => salaryAD.id != id);
            setAdminSalaryAD(data);

            alert("Salary Approved successfully");

        }
        else {
            //some code
        }
    
    };


    // Decline Salary by admin
    const adminSalaryDeclineCallback = (id) => {
        var answer = window.confirm("Are you sure to Decline?");
        if (answer) {
                
            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/admin/salary/decline',
                data:{
                    id:id,
                }
            });

            const data = adminSalaryAD.filter((salaryAD) => salaryAD.id != id);
            setAdminSalaryAD(data);
        }
    };



    // Delete Support by admin
    const adminSupportDeleteCallback = (id) => {
        var answer = window.confirm("Are you sure to Delete?");
        if (answer) {
                
            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/admin/support/delete',
                data:{
                    id:id,
                }
            });

            const data = adminSupport.filter((support) => support.id != id);
            setAdminSupport(data);
        }
    };



    // Edit Policy by admin
    const adminPolicyEditCallback = (policy) => {
        var answer = window.confirm("Are you sure?");
        if (answer) {
                
            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/admin/edit-policy',
                data: policy
            });

            setAdminPolicy(policy);

            console.log(policy);
        }
    };


       // Edit Guidelines by admin
       const adminGuidelinesEditCallback = (guidelines) => {

        var answer = window.confirm("Are you sure?");
        if (answer) {
                
            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/admin/edit-guidelines',
                data: guidelines
            });

            setAdminGuidelines(guidelines);

            console.log(guidelines);
        }
    };


       // Edit About Us by admin
    const adminAboutEditCallback = (about) => {
        var answer = window.confirm("Are you sure?");
        if (answer) {

            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/admin/edit-about',
                data: about
            });

            setAdminAbout(about);

            console.log(about);
        }
    };


    // *********************Admin END***************************
    // *********************Admin END***************************
    // *********************Admin END***************************
    // *********************Admin END***************************
    // *********************Admin END***************************
    // *********************Admin END***************************
    // *********************Admin END***************************
    // *********************Admin END***************************
    // *********************Admin END***************************
    // *********************Admin END***************************






    // Service Function App -----------------------------------------------------------------------Start
  
//-------------- Registration -----------------
          
          // Add Hotel in Registration Page
          const hotelRegistration = (newHotel) => { 

            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/hotelreg',
                data:newHotel,
              });
        };

        // Add Transport in Registration Page
        const transportRegistration = (newTransport) => { 

          const axios = require('axios').default;

          axios({
              method: 'post',
              url: 'http://127.0.0.1:8000/api/transportreg',
              data:newTransport,
            });
      };



  //-----------------------  Hotel -----------------------------

              // Show all faccilities list by service Hotel
              const [servicefacility, setServiceFacilitys] = useState([]);
              const serviceurl11 = 'http://127.0.0.1:8000/api/hotelDashboard/managehotelfacility';
              useFetch(serviceurl11, setServiceFacilitys);

      
              // Show all room list by service Hotel
              const [serviceroom, setServiceRooms] = useState([]);
              const serviceurl12 = 'http://127.0.0.1:8000/api/hotelDashboard/managehotelroom';
              useFetch(serviceurl12, setServiceRooms);

              // Show all booking list  by service Hotel
              const [servicebooking, setServiceBookings] = useState([]);
              const serviceurl13 = 'http://127.0.0.1:8000/api/hotelDashboard/showhotelallboking';
              useFetch(serviceurl13, setServiceBookings);

               // Show all pending booking list  by service Hotel
               const [servicependingbooking, setServicePendingBookings] = useState([]);
               const serviceurl14 = 'http://127.0.0.1:8000/api/hotelDashboard/room-book-pending';
               useFetch(serviceurl14, setServicePendingBookings);

              // Show all review list  by service Hotel
              const [servicereview, setServiceReviews] = useState([]);
              const serviceurl15 = 'http://127.0.0.1:8000/api/hotelDashboard/checkhotelreview';
              useFetch(serviceurl15, setServiceReviews);

              // Show all transaction list  by service Hotel
              const [servicetransaction, setServiceTransactions] = useState([]);
              const serviceurl16 = 'http://127.0.0.1:8000/api/hotelDashboard/hoteltransactionhistory';
              useFetch(serviceurl16, setServiceTransactions);

               // Show an Booking Details by Hotel
               const [serviceBookingDetails, setServiceBookingDetails] = useState([]);

               const serviceBookingDetailscallback = (id) => {
               const data = servicebooking.filter((service) => service.id == id);
               setServiceBookingDetails(data);
               console.log(data);
               };

              
              
                // Add Facility by service Hotel
                const serviceAddFacility = (newFacility) => { 
                  var answer = window.confirm("Add this Facility?");
                    if (answer) {

                          const axios = require('axios').default;

                          axios({
                              method: 'post',
                              url: 'http://127.0.0.1:8000/api/hotelDashboard/addhotelfacility',
                              
                              data:newFacility,
                            });
                            setServiceFacilitys([...servicefacility,newFacility])
                          }
                      };


              // Edit Facility by service Hotel
              const serviceEditFacility = (editFacility) => { 

                var answer = window.confirm("Edit this Facility?");
                    if (answer) {

                const axios = require('axios').default;
  
                axios({
                    method: 'post',
                    url: 'http://127.0.0.1:8000/api/hotelDashboard/facilityedit',
                    data:editFacility,
                  });
                  const data = servicefacility.filter((facility) => facility.id != editFacility.id);
                  const data2 = servicefacility.filter((facility) => facility.id == editFacility.id);
                  const data3 = servicefacility.filter((facility) => facility.id == editFacility.id);
  
                  data3.id = editFacility.id;
                  data3.title = editFacility.title;
                  data3.description = editFacility.description;
  
                  data3.created = data2[0].created;
                  data3.image = data2[0].image;
                  
                  console.log(data2[0]);
                  console.log(data2.created);
  
                  setServiceFacilitys([...data, data3]);
                }
              };


            // Add Room by service Hotel
              const serviceAddRoom = (newRoom) => { 

                var answer = window.confirm("Add this Facility?");
                if (answer) {

                const axios = require('axios').default;

                axios({
                    method: 'post',
                    url: 'http://127.0.0.1:8000/api/hotelDashboard/addhotelroom',
                    
                    data:newRoom,
                  });
                  setServiceRooms([...serviceroom,newRoom])
                }
            };


            //Edit Room by Service Hotel
            const serviceEditRoom = (editRoom) => { 
              
              var answer = window.confirm("Edit this Room?");
                    if (answer) {

              const axios = require('axios').default;

              axios({
                  method: 'post',
                  url: 'http://127.0.0.1:8000/api/hotelDashboard/roomedit',
                  data:editRoom,
                });
                const data = serviceroom.filter((room) => room.id != editRoom.id);
                const data2 = serviceroom.filter((room) => room.id == editRoom.id);
                const data3 = serviceroom.filter((room) => room.id == editRoom.id);

                data3.id = editRoom.id;
                data3.name = editRoom.name;
                data3.description = editRoom.description;
                data3.price = editRoom.price;
                data3.availability = editRoom.availability;

                
                data3.created = data2[0].created;
                data3.image = data2[0].image;
                
                console.log(data2[0]);
                console.log(data2.created);

                setServiceRooms([...data, data3]);
              }
            };

            
                // Submit Support by service Hotel
                const serviceHotelSupport = (newSupport) => { 
                  
                  var answer = window.confirm("Want to Send Message to Admin?");
                          if (answer) {

                  const axios = require('axios').default;

                  axios({
                      method: 'post',
                      url: 'http://127.0.0.1:8000/api/hotelDashboard/hotelsupport',
                      
                      data:newSupport,
                    });
                    
                  }
              };


              // Approve Pending Bookign List Hotel
              const servicePendingBookingApprovecallback = (id) => {
                
              var answer = window.confirm("Approve this Booking?");
                    if (answer) {

                const axios = require('axios').default;
        
                axios({
                    method: 'post',
                    url: 'http://127.0.0.1:8000/api/hotelDashboard/bookingapprove',
                    data:{
                        id:id,
                    }
                  });
        
                const data = servicependingbooking.filter((service) => service.id != id);
                const data2 = servicependingbooking.filter((service) => service.id == id);
                console.log(data);
                console.log(data2);
                setServicePendingBookings(data);
                setServiceBookings([...servicebooking, ...data2]);
                    }
            };


            // Delete an Facility by Service Hotel
            const serviceFacilityDeletecallback = (id) => {
              var answer = window.confirm("Delete this Facility?");
                    if (answer) {

              const axios = require('axios').default;

              axios({
                  method: 'post',
                  url: 'http://127.0.0.1:8000/api/hotelDashboard/facilitydelete',
                  data:{
                      id:id,
                  }
                });
              const data = servicefacility.filter((service) => service.id != id);
              setServiceFacilitys(data);
                    }
          };


                // Delete a Room by Service Hotel
                const serviceRoomDeletecallback = (id) => {
                  var answer = window.confirm("Delete this Room?");
                          if (answer) {

                  const axios = require('axios').default;

                  axios({
                      method: 'post',
                      url: 'http://127.0.0.1:8000/api/hotelDashboard/roomdelete',
                      data:{
                          id:id,
                      }
                    });
                  const data = serviceroom.filter((service) => service.id != id);
                  setServiceRooms(data);
                          }
              };


                // Delete a Booking by Service Hotel
                const serviceBookingDeletecallback = (id) => {
                  var answer = window.confirm("Delete this Booking?");
                  if (answer) {

                  const axios = require('axios').default;

                  axios({
                      method: 'post',
                      url: 'http://127.0.0.1:8000/api/hotelDashboard/bookingdelete',
                      data:{
                          id:id,
                      }
                    });
                  const data = servicebooking.filter((service) => service.id != id);
                  setServiceBookings(data);
                  }
                };


                // Delete a Pending Booking by Service Hotel
                const servicePendingBookingDeclinecallback = (id) => {
                  var answer = window.confirm("Decline this Pendeing Booking?");
                  if (answer) {

                  const axios = require('axios').default;

                  axios({
                      method: 'post',
                      url: 'http://127.0.0.1:8000/api/hotelDashboard/bookingdecline',
                      data:{
                          id:id,
                      }
                    });
                  const data = servicependingbooking.filter((service) => service.id != id);
                  setServicePendingBookings(data);
                  }
              };


          
        
//------------------------------ Car -----------------------------------------

              // Show all car list by service Car
              const [servicecarmanage, setServiceCarManages] = useState([]);
              const serviceurl21 = 'http://127.0.0.1:8000/api/carDashboard/managecar';
              useFetch(serviceurl21, setServiceCarManages);

              // Show all booking list  by service Car
              const [servicecarbooking, setServiceCarBookings] = useState([]);
              const serviceurl22 = 'http://127.0.0.1:8000/api/carDashboard/car-booking-list';
              useFetch(serviceurl22, setServiceCarBookings);

              // Show all pending booking list  by service Hotel
              const [servicecarpendingbooking, setServiceCarPendingBookings] = useState([]);
              const serviceurl23 = 'http://127.0.0.1:8000/api/carDashboard/car-pending-list';
              useFetch(serviceurl23, setServiceCarPendingBookings);

               // Show all review list  by service Car
               const [servicecarreview, setServiceCarReviews] = useState([]);
               const serviceurl24 = 'http://127.0.0.1:8000/api/carDashboard/checkcarreview';
               useFetch(serviceurl24, setServiceCarReviews);

                // Show all transaction list  by service Car
                const [servicecartransaction, setServiceCarTransactions] = useState([]);
                const serviceurl25 = 'http://127.0.0.1:8000/api/carDashboard/cartransactionhistory';
                useFetch(serviceurl25, setServiceCarTransactions);

                // Show car availability by Car
                const [serviceCarAvailability, setServiceCarAvailability] = useState([]);
                const url26 = 'http://127.0.0.1:8000/api/carDashboard/caravailability';
                useFetch(url26, setServiceCarAvailability);

                // Show car type by Car
                const [serviceCarType, setServiceCarType] = useState([]);
                const url27 = 'http://127.0.0.1:8000/api/carDashboard/cartype';
                useFetch(url27, setServiceCarType);

                // Show an Booking Details by Car
                const [serviceCarBookingDetails, setServiceCarBookingDetails] = useState([]);

                const serviceCarBookingDetailscallback = (id) => {
                const data = servicecarbooking.filter((service) => service.id == id);
                setServiceCarBookingDetails(data);
                console.log(data);
                };


                    //Add CAR
                      const serviceAddCar = (newCar) => { 
                        var answer = window.confirm("Add this Car?");
                          if (answer) {

                        const axios = require('axios').default;

                        axios({
                            method: 'post',
                            url: 'http://127.0.0.1:8000/api/carDashboard/addcar',
                            data:newCar,
                            });

                            setServiceCarManages([...servicecarmanage,newCar])
                          }
                      };


                    //Edit CAR
                    const serviceEditCar = (editCar) => { 

                      var answer = window.confirm("Edit this Car?");
                        if (answer) {

                      const axios = require('axios').default;

                      axios({
                          method: 'post',
                          url: 'http://127.0.0.1:8000/api/carDashboard/caredit',
                          data:editCar,
                        });
                        const data = servicecarmanage.filter((car) => car.id != editCar.id);
                        const data2 = servicecarmanage.filter((car) => car.id == editCar.id);
                        const data3 = servicecarmanage.filter((car) => car.id == editCar.id);
    
                        data3.id = editCar.id;
                        data3.title = editCar.title;
                        data3.model = editCar.model;
                        data3.driver = editCar.driver;

                        
                        data3.type = data2[0].type;
                        data3.fare = data2[0].fare;
                        data3.availability = data2[0].availability;
                        data3.image = data2[0].image;
                        
                        console.log(data2[0]);
                        console.log(data2.type);
                        console.log(data2.fare);
                        console.log(data2.availability);
    
                        setServiceCarManages([...data, data3]);
                        }
                    };


                    //ADD CAR Support
                    const serviceCarSupport = (newSupport) => { 

                      var answer = window.confirm("Want to Send Message to Admin?");
                     if (answer) {

                      const axios = require('axios').default;

                      axios({
                          method: 'post',
                          url: 'http://127.0.0.1:8000/api/carDashboard/carsupport',
                          
                          data:newSupport,
                        });
                      }
                  };


                  // Approve Pending Bookign List Car
                  const serviceCarPendingBookingApprovecallback = (id) => {
                    var answer = window.confirm("Approve this Booking?");
                     if (answer) {

                    const axios = require('axios').default;
            
                    axios({
                        method: 'post',
                        url: 'http://127.0.0.1:8000/api/carDashboard/approve',
                        data:{
                            id:id,
                        }
                      });
            
                    const data = servicecarpendingbooking.filter((service) => service.id != id);
                    const data2 = servicecarpendingbooking.filter((service) => service.id == id);
                    console.log(data);
                    console.log(data2);
                    setServiceCarPendingBookings(data);
                    setServiceCarBookings([...servicecarbooking, ...data2]);
                     }
                };


                // Car Availability Change Post
                const carAvailabilityCallback = ({title, availability}) => {
                  var answer = window.confirm("Change this Availability?");
                     if (answer) {

                  const axios = require('axios').default;
          
                  console.log(title);
          
                  axios({
                      method: 'post',
                      url: 'http://127.0.0.1:8000/api/carDashboard/caravailability',
                      data:{
                        title: title,
                        availability: availability,
                      }
                      });
                    }
              };


               // Car Type Change Post
               const carTypeCallback = ({title, type, fare}) => {
                var answer = window.confirm("Change this Type?");
                if (answer) {

                const axios = require('axios').default;
        
                console.log(title);
        
                axios({
                    method: 'post',
                    url: 'http://127.0.0.1:8000/api/carDashboard/cartype',
                    data:{
                      title: title,
                      fare:fare,
                      type: type,
                    }
                    });
                  }
                };


                      // Delete an Car from manage list by Service Car
                      const serviceCarManageDeletecallback = (id) => {

                        var answer = window.confirm("Delete this Car?");
                           if (answer) {
                        
                        const axios = require('axios').default;

                        axios({
                            method: 'post',
                            url: 'http://127.0.0.1:8000/api/carDashboard/cardelete',
                            data:{
                                id:id,
                            }
                          });
                        const data = servicecarmanage.filter((service) => service.id != id);
                        setServiceCarManages(data);
                           }
                    };


                    // Delete a Car Booking by Service Car
                    const serviceCarBookingDeletecallback = (id) => {
                      var answer = window.confirm("Delete this Booking?");
                          if (answer) {

                      const axios = require('axios').default;

                      axios({
                          method: 'post',
                          url: 'http://127.0.0.1:8000/api/carDashboard/delete',
                          data:{
                              id:id,
                          }
                        });
                      const data = servicecarbooking.filter((service) => service.id != id);
                      setServiceCarBookings(data);
                          }
                  };


                  // Decline a Car Pending Booking by Service Car
                  const serviceCarPendingBookingDeclinecallback = (id) => {
                    var answer = window.confirm("Decline this Pending Booking?");
                      if (answer) {

                    const axios = require('axios').default;

                    axios({
                        method: 'post',
                        url: 'http://127.0.0.1:8000/api/carDashboard/decline',
                        data:{
                            id:id,
                        }
                      });
                    const data = servicecarpendingbooking.filter((service) => service.id != id);
                    setServiceCarPendingBookings(data);
                      }
                };




//  --------------------------------------- Flight ------------------------------------------------

              // Show all Flight list by service Flight
              const [serviceflightmanage, setServiceFlightManages] = useState([]);
              const serviceurl31 = 'http://127.0.0.1:8000/api/flightDashboard/manageflight';
              useFetch(serviceurl31, setServiceFlightManages);

              // Show all booking list  by service Flight
              const [serviceflightbooking, setServiceFlightBookings] = useState([]);
              const serviceurl32 = 'http://127.0.0.1:8000/api/flightDashboard/flight-booking-list';
              useFetch(serviceurl32, setServiceFlightBookings);

              // Show all pending booking list  by service Flight
              const [serviceflightpendingbooking, setServiceFlightPendingBookings] = useState([]);
              const serviceurl33 = 'http://127.0.0.1:8000/api/flightDashboard/flight-pending-list';
              useFetch(serviceurl33, setServiceFlightPendingBookings);

              // Show all review list  by service Flight
              const [serviceflightreview, setServiceFlightReviews] = useState([]);
              const serviceurl34 = 'http://127.0.0.1:8000/api/flightDashboard/checkflightreview';
              useFetch(serviceurl34, setServiceFlightReviews);

              // Show all transaction list  by service Flight
              const [serviceflighttransaction, setServiceFlightTransactions] = useState([]);
              const serviceurl35 = 'http://127.0.0.1:8000/api/flightDashboard/flighttransactionhistory';
              useFetch(serviceurl35, setServiceFlightTransactions);

               // Show Flight availability by Flight
               const [serviceFlightAvailability, setServiceFlightAvailability] = useState([]);
               const url36 = 'http://127.0.0.1:8000/api/flightDashboard/flightavailability';
               useFetch(url36, setServiceFlightAvailability);

               // Show Flight type by Flight
               const [serviceFlightType, setServiceFlightType] = useState([]);
               const url37 = 'http://127.0.0.1:8000/api/flightDashboard/flighttype';
               useFetch(url37, setServiceFlightType);

               // Show an Booking Details by Flight
               const [serviceFlightBookingDetails, setServiceFlightBookingDetails] = useState([]);

               const serviceFlightBookingDetailscallback = (id) => {
               const data = serviceflightbooking.filter((service) => service.id == id);
               setServiceFlightBookingDetails(data);
               console.log(data);
               };


                  //Add Flight
                  const serviceAddFlight = (newFlight) => { 
                    var answer = window.confirm("Add this Air?");
                      if (answer) {

                    const axios = require('axios').default;


                    axios({
                        method: 'post',
                        url: 'http://127.0.0.1:8000/api/flightDashboard/addflight',
                        
                        data:newFlight,
                      });
                      
                        setServiceFlightManages([...serviceflightmanage,newFlight])
                    }
                };


                //Add Flight Support
                const serviceFlightSupport = (newSupport) => { 
                  
                  var answer = window.confirm("Want to Send Message to Admin?");
                      if (answer) {

                  const axios = require('axios').default;

                  axios({
                      method: 'post',
                      url: 'http://127.0.0.1:8000/api/flightDashboard/flightsupport',
                      
                      data:newSupport,
                    });
                  }
              };

              const serviceEditFlight = (editFlight) => { 

                var answer = window.confirm("Edit this Air?");
                      if (answer) {

                const axios = require('axios').default;

                axios({
                    method: 'post',
                    url: 'http://127.0.0.1:8000/api/flightDashboard/flightedit',
                    data:editFlight,
                  });
                    console.log(editFlight);

                    const data = serviceflightmanage.filter((flight) => flight.id != editFlight.id);
                    const data2 = serviceflightmanage.filter((flight) => flight.id == editFlight.id);
                    const data3 = serviceflightmanage.filter((flight) => flight.id == editFlight.id);

                    data3.id = editFlight.id;
                    data3.title = editFlight.title;
                    data3.model = editFlight.model;

                    data3.type = data2[0].type;
                    data3.fare = data2[0].fare;
                    data3.availability = data2[0].availability;
                    data3.image = data2[0].image;
                    
                    console.log(data2[0]);
                    console.log(data2.type);
                    console.log(data2.fare);
                    console.log(data2.availability);

                    setServiceFlightManages([...data, data3]);
                    }
                 };


              // Flight Availability Change Post
              const flightAvailabilityCallback = ({title, availability}) => {
                
                var answer = window.confirm("Change this Availability?");
                      if (answer) {
                const axios = require('axios').default;
        
                console.log(title);
        
                axios({
                    method: 'post',
                    url: 'http://127.0.0.1:8000/api/flightDashboard/flightavailability',
                    data:{
                      title: title,
                      availability: availability,
                    }
                    });
                  }
            };


             // Flight Type Change Post
             const flightTypeCallback = ({title, type, fare}) => {
              
              var answer = window.confirm("Change this Type?");
              if (answer) {

              const axios = require('axios').default;
      
              console.log(title);
      
              axios({
                  method: 'post',
                  url: 'http://127.0.0.1:8000/api/flightDashboard/flighttype',
                  data:{
                    title: title,
                    fare:fare,
                    type: type,
                  }
                  });
                }
          };


              // Approve Pending Bookign List Flight
              const serviceFlightPendingBookingApprovecallback = (id) => {
                var answer = window.confirm("Approve this Booking?");
                      if (answer) {

                const axios = require('axios').default;
        
                axios({
                    method: 'post',
                    url: 'http://127.0.0.1:8000/api/flightDashboard/approve',
                    data:{
                        id:id,
                    }
                  });
        
                const data = serviceflightpendingbooking.filter((service) => service.id != id);
                const data2 = serviceflightpendingbooking.filter((service) => service.id == id);
                console.log(data);
                console.log(data2);
                setServiceFlightPendingBookings(data);
                setServiceFlightBookings([...serviceflightbooking, ...data2]);
                }
            };


                  // Delete an Flight from manage list by Service Flight
                  const serviceFlightManageDeletecallback = (id) => {
                    var answer = window.confirm("Delete this Air?");
                      if (answer) {

                    const axios = require('axios').default;

                    axios({
                        method: 'post',
                        url: 'http://127.0.0.1:8000/api/flightDashboard/flightdelete',
                        data:{
                            id:id,
                        }
                      });
                    const data = serviceflightmanage.filter((service) => service.id != id);
                    setServiceFlightManages(data);
                      }
                };


                  // Delete a Flight Booking by Service Flight
                const serviceFlightBookingDeletecallback = (id) => {
                  var answer = window.confirm("Delete this Booking?");
                      if (answer) {

                  const axios = require('axios').default;

                  axios({
                      method: 'post',
                      url: 'http://127.0.0.1:8000/api/flightDashboard/delete',
                      data:{
                          id:id,
                      }
                    });
                  const data = serviceflightbooking.filter((service) => service.id != id);
                  setServiceFlightBookings(data);
                  }
              };


              // Decline a Flight Pending Booking by Service Flight
              const serviceFlightPendingBookingDeclinecallback = (id) => {
                var answer = window.confirm("Decline this Pending Booking?");
                      if (answer) {

                const axios = require('axios').default;

                axios({
                    method: 'post',
                    url: 'http://127.0.0.1:8000/api/flightDashboard/decline',
                    data:{
                        id:id,
                    }
                  });
                const data = serviceflightpendingbooking.filter((service) => service.id != id);
                setServiceFlightPendingBookings(data);
                      }
            };



// --------------------------------  All Profile  ---------------------------------------------

                      
                            // Profile update by CAR
                            const carProfileUpdate = async(newProfile) => { 
                              var answer = window.confirm("Update this Profile?");
                                   if (answer) {

                                const axios = require('axios').default;

                                const status = await axios({
                                    method: 'post',
                                    url: 'http://127.0.0.1:8000/api/carDashboard/profile',
                                    data:newProfile,
                                  });

                                  if (status)
                                  {
                                    alert("Profile Updated successfully");

                                  setCarLoginName(newProfile.name);
                                  setCarLoginPhone(newProfile.phone);
                                  setCarLoginEmail(newProfile.email);
                                  setCarLoginType(newProfile.type);
                                  
                                  console.log(newProfile);
                                }
                              }
                            };


                            // Profile update by Flight
                            const flightProfileUpdate =async (newProfile) => { 
                              
                              var answer = window.confirm("Update this Profile?");
                                   if (answer) {

                              const axios = require('axios').default;
                              const status = await axios({

                                  method: 'post',
                                  url: 'http://127.0.0.1:8000/api/flightDashboard/profile',
                                  data:newProfile,
                                });

                                if (status)
                                {
                                  alert("Profile Updated successfully");

                                setFlightLoginName(newProfile.name);
                                setFlightLoginPhone(newProfile.phone);
                                setFlightLoginEmail(newProfile.email);
                                setFlightLoginType(newProfile.type);
                                
                                console.log(newProfile);
                              }
                            }
                          };


                          // Profile update by Hotel
                          const hotelProfileUpdate = async(newProfile) => {
                            
                            var answer = window.confirm("Update this Profile?");
                                   if (answer) { 

                            const axios = require('axios').default;

                            const status = await axios({
                                method: 'post',
                                url: 'http://127.0.0.1:8000/api/hotelDashboard/profile',
                                data:newProfile,
                              });

                              if (status)
                              {
                                alert("Profile Updated successfully");

                              setHotelLoginName(newProfile.name);
                              setHotelLoginAddress(newProfile.address);
                              setHotelLoginLocation(newProfile.location);
                              setHotelLoginPhone(newProfile.phone);
                              setHotelLoginEmail(newProfile.email);
                              setHotelLoginType(newProfile.type);
                              
                              console.log(newProfile);
                            }
                          }
                        };

// Service Function App -----------------------------------------------------------------------END
// Service Function App -----------------------------------------------------------------------END
// Service Function App -----------------------------------------------------------------------END
// Service Function App -----------------------------------------------------------------------END
// Service Function App -----------------------------------------------------------------------END
// Service Function App -----------------------------------------------------------------------END
// Service Function App -----------------------------------------------------------------------END
// Service Function App -----------------------------------------------------------------------END
// Service Function App -----------------------------------------------------------------------END
// Service Function App -----------------------------------------------------------------------END
// Service Function App -----------------------------------------------------------------------END
// Service Function App -----------------------------------------------------------------------END
// Service Function App -----------------------------------------------------------------------END
// Service Function App -----------------------------------------------------------------------END




 //Add package by employee
 const employeeAddPackage = (newEmployeePackage) => { 

    const axios = require('axios').default;

    axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/employee/packageAdd',
        data:newEmployeePackage,
      });
      //setEmployeePackage([...employeepackage, newEmployeePackage]);
        //  console.log(newEmployeePackage);
};


 //Add place by employee
 const employeeAddPlace = (newEmployeePlace) => { 

  const axios = require('axios').default;

  axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/employee/placeAdd',
      data:newEmployeePlace,
    });
    //setEmployeePlace([...employeeplace, newEmployeePlace]);
      //  console.log(newEmployeePlace);
};

  //Add Salary by employee
  const employeeAddSalary = (newEmployeeSalary) => { 

    const axios = require('axios').default;

    axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/employee/salary',
        data:newEmployeeSalary,
      });
      setEmployeeSalary([...employeesalary, newEmployeeSalary]);
          console.log(newEmployeeSalary);

          
};

//add statement by employee
const employeeAddStatement = (newEmployeeStatement) => { 

  const axios = require('axios').default;

  axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/employee/statementAdd',
      data:newEmployeeStatement,
    });
    setEmployeeStatement([...employeestatement, newEmployeeStatement]);
      console.log(newEmployeeStatement);
};

  //add transaction by employee
  const employeeAddTransaction = (newEmployeeTransaction) => { 

    const axios = require('axios').default;

    axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/employee/transactionAdd',
        data:newEmployeeTransaction,
      });
      setEmployeeTransaction([...employeetransaction, newEmployeeTransaction]);
        console.log(newEmployeeTransaction);
  };

  //add faq by employee
  const employeeAddFaq = (newEmployeeFaq) => { 

    const axios = require('axios').default;

    axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/employee/faq',
        data:newEmployeeFaq,
      });
      setEmployeeFaq([...employeefaq, newEmployeeFaq]);
        console.log(newEmployeeFaq);
  };


   //send promo by employee
   const employeeAddPromo = (newEmployeePromo) => { 

    const axios = require('axios').default;

    axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/employee/promo',
        data:newEmployeePromo,
      });
      setEmployeePromo([...employeepromo, newEmployeePromo]);
      console.log(newEmployeePromo);
  };




  //send advertisement by employee
  const employeeAddAdvertisement = (newEmployeeAdvertisement) => { 

    const axios = require('axios').default;

    axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/employee/advertisement',
        data:newEmployeeAdvertisement,
      });
      setEmployeeAdvertisement([...employeeadvertisement, newEmployeeAdvertisement]);
      console.log(newEmployeeAdvertisement);
  };


    //show salary to employee
    const [employeesalary, setEmployeeSalary] = useState([]);
    const emp1 = 'http://127.0.0.1:8000/api/employee/salary/list';
    useFetch(emp1, setEmployeeSalary);


    //show Statement to employee
    const [employeestatement, setEmployeeStatement] = useState([]);
    const emp2 = 'http://127.0.0.1:8000/api/employee/statement';
    useFetch(emp2, setEmployeeStatement);

  
    //show Transaction history to employee
    const [employeetransaction, setEmployeeTransaction] = useState([]);
    const emp3 = 'http://127.0.0.1:8000/api/employee/transaction';
    useFetch(emp3, setEmployeeTransaction);

    //show user review to employee
    const [employeereview, setEmployeeReview] = useState([]);
    const emp4 = 'http://127.0.0.1:8000/api/employee/review';
    useFetch(emp4, setEmployeeReview);

    //show transport to employee
    const [employeetransport, setEmployeeTransport] = useState([]);
    const emp5 = 'http://127.0.0.1:8000/api/employee/transportList';
    useFetch(emp5, setEmployeeTransport);

    //show hotel to employee
    const [employeehotel, setEmployeeHotel] = useState([]);
    const emp6 = 'http://127.0.0.1:8000/api/employee/hotelList';
    useFetch(emp6, setEmployeeHotel);

     //show faq to employee
     const [employeefaq, setEmployeeFaq] = useState([]);
     const emp7 = 'http://127.0.0.1:8000/api/employee/faq/list';
     useFetch(emp7, setEmployeeFaq);

   // Delete faq by employee
    const employeeFaqDeletecallback = (id) => {
      const axios = require('axios').default;

      axios({
          method: 'post',
          url: 'http://127.0.0.1:8000/api/employee/faq/delete',
          data:{
              id:id,
          }
        });

      const data = employeefaq.filter((employee) => employee.id != id);
      setEmployeeFaq(data);
  };

  
  //show advertisement list to employee
  const [employeeadvertisement, setEmployeeAdvertisement] = useState([]);
  const emp8 = 'http://127.0.0.1:8000/api/employee/advertisement/list';
  useFetch(emp8, setEmployeeAdvertisement);

  // Delete advertisement by employee
 const employeeAdvertisementDeletecallback = (id) => {
   const axios = require('axios').default;

   axios({
       method: 'post',
       url: 'http://127.0.0.1:8000/api/employee/advertisement/delete',
       data:{
           id:id,
       }
     });

   const data = employeeadvertisement.filter((employee) => employee.id != id);
   setEmployeeAdvertisement(data);
};
 

  //show promo list to employee
  const [employeepromo, setEmployeePromo] = useState([]);
  const emp9 = 'http://127.0.0.1:8000/api/employee/promo/list';
  useFetch(emp9, setEmployeePromo);

  // Delete promo by employee
 const employeePromoDeletecallback = (id) => {
   const axios = require('axios').default;

   axios({
       method: 'post',
       url: 'http://127.0.0.1:8000/api/employee/promo/delete',
       data:{
           id:id,
       }
     });

   const data = employeepromo.filter((employee) => employee.id != id);
   setEmployeePromo(data);
};


//show support to employee
const [employeesupport, setEmployeeSupport] = useState([]);
const emp11 = 'http://127.0.0.1:8000/api/employee/support';
useFetch(emp11, setEmployeeSupport);

// Delete support by employee
const employeeSupportDeletecallback = (id) => {
 const axios = require('axios').default;

 axios({
     method: 'post',
     url: 'http://127.0.0.1:8000/api/employee/support/delete',
     data:{
         id:id,
     }
   });

 const data = employeesupport.filter((employee) => employee.id != id);
 setEmployeeSupport(data);
};


// Show all users by employee
const [employeeUser, setEmployeeUser] = useState([]);
const emp12 = 'http://127.0.0.1:8000/api/employee/userlist';
useFetch(emp12, setEmployeeUser);

// Show user details by employee
const [employeeUserDetails, setEmployeeUserDetails] = useState([]);
const emp13 = 'http://127.0.0.1:8000/api/employee/userlist';
useFetch(emp13, setEmployeeUserDetails);

 // Show an User Details by employee
 const employeeUserDetailscallback = (id) => {
  const data = employeeUser.filter((user) => user.id == id);
  setEmployeeUserDetails(data);
  console.log(data);
  };

//Show Guidelines by employee
const [employeeGuidelines, setEmployeeGuidelines] = useState([]);
const emp14 = 'http://127.0.0.1:8000/api/employee/guidelines';
useFetch(emp14, setEmployeeGuidelines);

// Edit Guidelines by employee
const employeeGuidelinesEditCallback = (guidelines) => {
  const axios = require('axios').default;

  axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/employee/guidelines/edit',
      data: guidelines
    });

  setEmployeeGuidelines(guidelines);

  console.log(guidelines);
};

//Show place by employee
const [employeePlace, setEmployeePlace] = useState([]);
const emp15 = 'http://127.0.0.1:8000/api/employee/place';
useFetch(emp15, setEmployeePlace);

 // Edit Place by employee
 const employeeEditPlace = (editPlace) => { 
  const axios = require('axios').default;

  axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/employee/placeEdit',
      data:editPlace,
    });
    const data = employeePlace.filter((place) => place.id != editPlace.id);
  console.log(data);
    setEmployeePlace(data);
    setEmployeePlace([...data, editPlace]);
    
};

// Delete place by employee
const employeePlaceDeletecallback = (id) => {
  const axios = require('axios').default;

  axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/employee/placedelete',
      data:{
          id:id,
      }
    });
  const data = employeePlace.filter((place) => place.id != id);
  setEmployeePlace(data);
};

//Show package by employee
const [employeePackage, setEmployeePackage] = useState([]);
const emp16 = 'http://127.0.0.1:8000/api/employee/package';
useFetch(emp16, setEmployeePackage);

 // Edit Package by employee
 const employeeEditPackage = (editPackage) => { 

  const axios = require('axios').default;

  axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/employee/packageEdit',
      data:editPackage,
    });
    const data = employeePackage.filter((packages) => packages.id != editPackage.id);
  
    setEmployeePackage(data);
    setEmployeePackage([...data, editPackage]);
    
};

// Delete package by employee
const employeePackageDeletecallback = (id) => {
  const axios = require('axios').default;

  axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/employee/packagedelete',
      data:{
          id:id,
      }
    });
  const data = employeePackage.filter((packages) => packages.id != id);
  setEmployeePackage(data);
};


// Profile update by employee
const employeeProfileUpdate =async (newProfile) => { 

    const axios = require('axios').default;

    const status = await axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/employee/profile',
        //data: JSON.stringify(newUser)
        data:newProfile,
        });

        if (status)
        {
        alert("Profile Updated successfully");
        
        setLoginFirstname(newProfile.firstname);
        setLoginLastname(newProfile.lastname);
        setLoginGender(newProfile.gender);
        setLoginEmail(newProfile.email);
        setLoginUsername(newProfile.username);

        console.log(newProfile);
        }

    }
    


    // Employee END****************************************************************
    // Employee END****************************************************************
    // Employee END****************************************************************
    // Employee END****************************************************************
    // Employee END****************************************************************
    // Employee END****************************************************************
    // Employee END****************************************************************
    // Employee END****************************************************************
    // Employee END****************************************************************
    // Employee END****************************************************************
    // Employee END****************************************************************
    // Employee END****************************************************************
    // Employee END****************************************************************



     //USER API START*********


        // Profile update by User
        const userProfileUpdate = (newProfile) => { 

            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/user/profile',
                //data: JSON.stringify(newUser)
                data:newProfile,
            });

            setLoginFirstname(newProfile.firstname);
            setLoginLastname(newProfile.lastname);
            setLoginGender(newProfile.gender);
            setLoginEmail(newProfile.email);
            setLoginUsername(newProfile.username);

            console.log(newProfile);
};



    //User Give Review
    const userReview = (newReview) => { 

        const axios = require('axios').default;

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/user/give_review',
            data:newReview,
          });
    };

    //User Support/ Contact Us
    const userContactUs = (newContact) => { 
        
        const axios = require('axios').default;

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/user/contact',
            data:newContact,
          });
    };


    //Show User Booked Hotel List
    const [userbookedhotel, setUserBookedHotel] = useState([]);
    const userurl2 = 'http://127.0.0.1:8000/api/user/hotel';
    useFetch(userurl2, setUserBookedHotel);


    //Show User All Hotel List
    const [usershowhotel, setUserShowHotel] = useState([]);
    const userurl16 = 'http://127.0.0.1:8000/api/user/show_hotels';
    useFetch(userurl16, setUserShowHotel);

    const [usershowhotelsrc, setUserShowHotelSrc] = useState([]);


    //Show User Hotel Room List
    const [userhotelroom, setUserHotelRoom] = useState([]);
    const userurl15 = 'http://127.0.0.1:8000/api/user/hotel_rooms';
    useFetch(userurl15, setUserHotelRoom);


    const [userhotelroomsrc, setUserHotelRoomSrc] = useState([]);

    // Show User Hotel Room Details
    const userHotelRoomscallback = (id) => {
    const data = userhotelroom.filter((userhotelroom) => userhotelroom.hotel_id == id);
    setUserHotelRoomSrc(data);
    console.log(data);
    };

    // Show Search Hotel
    const userSrcHotel = (id) => { 

        console.log(id.id);
    const data = usershowhotel.filter((userhotel) => userhotel.location == id.id);
    setUserShowHotelSrc(data);

    };

    //Confirm User Hotel
    const userConfirmHotel = (newConfirmHotel) => { 

        console.log(newConfirmHotel);
        const axios = require('axios').default;

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/user/confirm_hotel',
            data:newConfirmHotel,
          });

    };

    //Show User Hotel Facility List
    const [userhotelfacility, setUserHotelfacility] = useState([]);
    const userurl14 = 'http://127.0.0.1:8000/api/user/hotel_facility';
    useFetch(userurl14, setUserHotelfacility);

    //Show Flight Booking List
    const [userflightbooking, setUserFlightBooking] = useState([]);
    const userurl12 = 'http://127.0.0.1:8000/api/user/flight_list';
    useFetch(userurl12, setUserFlightBooking);
    
    //Show User Booked Flight List
    const [userbookedflight, setUserBookedFlight] = useState([]);
    const userurl1 = 'http://127.0.0.1:8000/api/user/flight';
    useFetch(userurl1, setUserBookedFlight);

    //Confirm User FLight
    const userConfirmFlight = (newConfirmFLight) => { 

        console.log(newConfirmFLight);
        const axios = require('axios').default;

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/user/flight/book',
            data:newConfirmFLight,
          });
    };


    //Show Car Booking List
    const [usercarbooking, setUserCarBooking] = useState([]);
    const userurl11 = 'http://127.0.0.1:8000/api/user/Car_list';
    useFetch(userurl11, setUserCarBooking);
    //Show User Booked Car List
    const [userbookedcar, setUserBookedCar] = useState([]);
    const userurl3 = 'http://127.0.0.1:8000/api/user/car';
    useFetch(userurl3, setUserBookedCar);
    //Confirm User Car

    const userConfirmCar = (newConfirmCar) => { 

        const axios = require('axios').default;

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/user/car/book',
            data:newConfirmCar,
          });
    };


    //Show User Travel History List
    const [usertravelhistory, setUserTravelHistory] = useState([]);
    const userurl4 = 'http://127.0.0.1:8000/api/user/travel_history';
    useFetch(userurl4, setUserTravelHistory);


    //Show User Notifications 
    const [usershowpromos, setUserShowPormos] = useState([]);
    const userurl5 = 'http://127.0.0.1:8000/api/user/notification';
    useFetch(userurl5, setUserShowPormos);

    //Show User Travel Guideline 
    const [usershowguideline, setUserShowGuideLine] = useState([]);
    const userurl6 = 'http://127.0.0.1:8000/api/user/guideline';
    useFetch(userurl6, setUserShowGuideLine);

    //Show User About Us 
    const [usershowaboutus, setUserShowAboutUs] = useState([]);
    const userurl7 = 'http://127.0.0.1:8000/api/user/about';
    useFetch(userurl7, setUserShowAboutUs);

    //Show User Privacy Policy 
    const [usershowprivacypolicy, setUserShowPrivacyPolicy] = useState([]);
    const userurl8 = 'http://127.0.0.1:8000/api/user/privay_policy';
    useFetch(userurl8, setUserShowPrivacyPolicy);
    
    //Show User FAQ 
    const [usershowfaq, setUserShowFAQ] = useState([]);
    const userurl9 = 'http://127.0.0.1:8000/api/user/faq';
    useFetch(userurl9, setUserShowFAQ);

     //Show User Package 
     const [usershowpackage, setUserShowPackage] = useState([]);
     const userurl10 = 'http://127.0.0.1:8000/api/user/package';
     useFetch(userurl10, setUserShowPackage);

    //User Add Package
    const userBookPackageCallback = (bookPackage) => {
        const axios = require('axios').default;

         axios({
             method: 'post',
             url: 'http://127.0.0.1:8000/api/user/package/book',

              data:bookPackage,

            });
     };
    

    //Show User Destination List 
    const [userdestinationlist, setUserDestinationList] = useState([]);
    const userurl13 = 'http://127.0.0.1:8000/api/user/destination';
    useFetch(userurl13, setUserDestinationList);

    //Show User Destination Details List 
    const [userdestinationdetails, setUserDestinationDetails] = useState([]);
    const userurl17 = 'http://127.0.0.1:8000/api/user/destination';
    useFetch(userurl17, setUserDestinationDetails);

    // Show User Destination Details by user
    const userDestinationDetailscallback = (id) => {
    const data = userdestinationlist.filter((destination) => destination.id === id);
    setUserDestinationDetails(data);
    console.log(data);
    };


    //User Registraion
    const userRegistration = (newRegistration) => { 

        const axios = require('axios').default;

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/user/registration',
            data:newRegistration,
        });
    }



        // User END*********************************************************************
        // User END*********************************************************************
        // User END*********************************************************************
        // User END*********************************************************************
        // User END*********************************************************************
        // User END*********************************************************************
        // User END*********************************************************************
        // User END*********************************************************************
        // User END*********************************************************************





  return (
    <Router>
            {/* <Navbar /> */}
            <Switch>


            {/* *********************Admin Start*************************** */}



                <Route exact path="/login">
                    <div className="login-wrapper">

                        <Login callback={loginIdf} callbackGoogle = {googlef}/>

                    </div>
                    
                </Route>

          
                <Route exact path="/admin/home">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminHome/>
                        </div>

                    </div>
                    
                </Route>

                
                <Route exact path="/admin/add-admin">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminAddEmployee status="Admin" callback={adminAddAdmin}/>
                        </div>

                    </div>
                </Route>

                <Route exact path="/admin/all-admins">

                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminAdminList list={adminadmin} list2={adminEmployee} callback={adminAdminDeleteCallback} />
                        </div>

                    </div>

                </Route>

                <Route exact path="/admin/all-users">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminUserList list={adminUser}  callbackD={adminUserDetailsCallback} callback={adminUserDeleteCallback} />
                        </div>

                    </div>
                </Route>

                <Route exact path="/admin/active-users">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminUserList list={adminActiveUser} callbackD={adminUserDetailsCallback} callback={adminUserDeleteCallback} />
                        </div>

                    </div>
                </Route>


                <Route exact path="/admin/user/details/:id">
                    <div className="wrapper">
                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminUserDetailsList list={adminUserDetails}/>
                        </div>

                    </div>
                </Route>

                <Route exact path="/admin/add-employee">


                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminAddEmployee status="Employee" callback={adminAddEmployee} />
                        </div>

                    </div>
                   
                </Route>

                <Route exact path="/admin/all-employees">

                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminEmployeeList list={adminEmployee} callback={adminEmployeeDeleteCallback} />
                        </div>

                    </div>
                    
                </Route>

                <Route exact path="/admin/active-employees">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminEmployeeList list={adminActiveEmployee} callback={adminEmployeeDeleteCallback} />
                        </div>

                    </div>
                </Route>

                <Route exact path="/admin/hotels-pending">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminHotelADList list={adminHotelAD} callbackA={adminHotelApproveCallback} callbackD={adminHotelDeclineCallback} />
                        </div>

                    </div>
                </Route>

                <Route exact path="/admin/all-hotels">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminHotelList list={adminHotel} callback={adminHotelDeleteCallback} />
                        </div>

                    </div>
                </Route>

                <Route exact path="/admin/hotel-bookings">adminHotelBookings
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminHotelBookingsList list={adminHotelBookings} />
                        </div>

                    </div>
                </Route>

                <Route exact path="/admin/transports-pending">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminTransportADList list={adminTransportAD} callbackA={adminTransportApproveCallback} callbackD={adminTransportDeclineCallback} />
                        </div>

                    </div>
                </Route>

                <Route exact path="/admin/all-cars">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminCarList list={adminCar} callbackA={adminCarDeleteCallback} />
                        </div>

                    </div>
                </Route>

                <Route exact path="/admin/all-flight">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminFlightList list={adminFlight} callback={adminFlightDeleteCallback} />
                        </div>

                    </div>
                </Route>

                <Route exact path="/admin/car-bookings">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminCarBookingsList list={adminCarBookings} />
                        </div>

                    </div>
                </Route>

                <Route exact path="/admin/flight-bookings">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminFlightBookingsList list={adminFlightBookings} />
                        </div>

                    </div>
                </Route>




                <Route exact path="/admin/package-pending">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminPackageADList list={adminPackageAD} callbackA={adminPackageApproveCallback} callbackD={adminPackageDeclineCallback} />
                        </div>

                    </div>
                </Route>

                <Route exact path="/admin/all-packages">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminPackageList list={adminPackage} callback={adminPackageDeleteCallback} />
                        </div>

                    </div>
                </Route>

                <Route exact path="/admin/package-bookings">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminPackageBookingsList list={adminPackageBookings} />
                        </div>

                    </div>
                </Route>

                <Route exact path="/admin/package-status">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminPackageStatus list={adminPackageAll} callback={adminPackageStatusCallback} /> 
                        </div>

                    </div>
                </Route>




                <Route exact path="/admin/place-pending">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminPlaceADList list={adminPlaceAD} callbackA={adminPlaceApproveCallback} callbackD={adminPlaceDeclineCallback} />
                        </div>

                    </div>
                </Route>

                <Route exact path="/admin/all-places">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminPlaceList list={adminPlace} callback={adminPlaceDeleteCallback} />
                        </div>

                    </div>
                </Route>

                
                <Route exact path="/admin/income-statement">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminIncomeStatementList list={adminIncomeStatement}/>
                        </div>

                    </div>
                </Route>

                <Route exact path="/admin/transaction-history">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminTransactionList list={adminTransaction}/>
                        </div>

                    </div>
                </Route>

                <Route exact path="/admin/pending-salary">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminSalaryADList list={adminSalaryAD} callbackA={adminSalaryApproveCallback} callbackD={adminSalaryDeclineCallback} />
                        </div>

                    </div>
                </Route>

                <Route exact path="/admin/support">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminSupportList list={adminSupport} callback={adminSupportDeleteCallback} />
                        </div>

                    </div>
                </Route>

                <Route exact exact path="/admin/policy">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminPolicy list={adminPolicy} />
                        </div>

                    </div>
                </Route>

                <Route exact path="/admin/policy/edit">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminPolicyForm callback={adminPolicyEditCallback} />
                        </div>

                    </div>
                </Route>


                <Route exact exact path="/admin/guidelines">
                    <div className="wrapper">
                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminGuidelines list={adminGuidelines} />
                        </div>
                    </div>
                </Route>


                <Route exact path="/admin/guidelines/edit">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminGuidelinesForm callback={adminGuidelinesEditCallback} />
                        </div>

                    </div>
                </Route>



                <Route exact path="/admin/about">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminAbout list={adminAbout} />
                        </div>

                    </div>
                </Route>


                <Route exact path="/admin/about/edit">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminAboutForm callback={adminAboutEditCallback} />
                        </div>

                    </div>
                </Route>



                <Route exact path="/admin/profile">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminProfile idl = {loginId} 
                            firstnamel = {loginFirstname}
                            lastnamel = {loginLastname}
                            genderl = {loginGender}
                            emaill = {loginEmail}
                            usernamel = {loginUsername} 
                            callback={adminProfileUpdate} />
                        </div>

                    </div>
                </Route>


                {/* <Route exact path="/login">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            
                        </div>

                    </div>
                </Route> */}

                

                {/* <Route path='/edit/:id' children={<AddUser status='edit'/>}></Route> */}
            

                {/* *********************Admin END*************************** */}
                {/* *********************Admin END*************************** */}
                {/* *********************Admin END*************************** */}
                {/* *********************Admin END*************************** */}
                {/* *********************Admin END*************************** */}
                {/* *********************Admin END*************************** */}
                {/* *********************Admin END*************************** */}
                {/* *********************Admin END*************************** */}
                {/* *********************Admin END*************************** */}
                {/* *********************Admin END*************************** */}
                {/* *********************Admin END*************************** */}
                {/* *********************Admin END*************************** */}
                {/* *********************Admin END*************************** */}
                {/* *********************Admin END*************************** */}


                {/* Registration, Hotel, Car, Flight ----------------------------------------------Service Route Start */}
          


          {/* ------------------------- Service Registration Route -------------------------------- */}

            <Route exact path="/register">
            <div className="reg-wrapper"> 
              <Register />
              </div>
            </Route>

            <Route exact path="/hotelreg">
            <div className="reg-wrapper"> 
                <HotelRegistration  callback={hotelRegistration} />
                </div>
            </Route>

            <Route exact path="/transportreg">
            <div className="reg-wrapper"> 
                <TransportRegistration  callback={transportRegistration} />
                </div>
            </Route>




      {/* ---------------------------------   Service Hotel Route  --------------------------------------------  */}

           <Route exact path="/hotelDashboard/index">
                    <div className="service-wrapper">
                        <HotelNavbar />
                        <div className="main-container"> 
                            <HotelHome/>
                        </div>
                    </div>      
            </Route>

            <Route exact exact path="/hotelDashboard/profile">
                    <div className="service-wrapper">
                        <HotelNavbar />
                        <div className="main-container"> 
                            <HotelProfile hotelidl = {hotelloginId} 
                            hotelnamel = {hotelloginName}
                            hoteladdressl = {hotelloginAddress}
                            hotellocationl = {hotelloginLocation}
                            hotelphonel = {hotelloginPhone}
                            hotelemaill = {hotelloginEmail}
                            hoteltypel = {hotelloginType}
                            callback={hotelProfileUpdate} />  
                        </div>
                    </div>
            </Route>

            <Route exact path="/hotelDashboard/addhotelfacility">
                  <div className="service-wrapper">
                        <HotelNavbar />
                        <div className="main-container"> 
                            <ServiceAddFacility status="Facility" callback={serviceAddFacility} />
                        </div>
                  </div>
            </Route>

            <Route exact path="/hotelDashboard/addhotelroom">
                  <div className="service-wrapper"> 
                          <HotelNavbar />
                        <div className="main-container"> 
                             <ServiceAddRoom status="Room" callback={serviceAddRoom} />
                        </div>
                  </div>    
            </Route>

            <Route exact path="/hotelDashboard/hotelsupport">
                  <div className="service-wrapper"> 
                          <HotelNavbar />
                       <div className="main-container"> 
                            <ServiceHotelSupport status="Support" callback={serviceHotelSupport} />
                      </div>
                  </div>
            </Route>

            <Route exact path="/hotelDashboard/managehotelfacility">
                  <div className="service-wrapper"> 
                          <HotelNavbar />
                        <div className="main-container"> 
                        <ServiceFacilityList list={servicefacility} callback={serviceFacilityDeletecallback} />
                        </div>
                  </div>  
            </Route>

                <Route exact path="/hotelDashboard/facilityedit/:id">
                  <div className="service-wrapper">
                          <HotelNavbar />
                        <div className="main-container">
                        <ServiceEditFacility callback={serviceEditFacility} />
                        </div>
                    </div>  
            </Route>

            <Route exact path="/hotelDashboard/managehotelroom">
                  <div className="service-wrapper">
                        <HotelNavbar />
                      <div className="main-container"> 
                        <ServiceRoomList list={serviceroom} callback={serviceRoomDeletecallback} />
                      </div>
                  </div>    
            </Route>

            <Route exact path="/hotelDashboard/details/:id">
                    <div className="service-wrapper">
                        <HotelNavbar />
                        <div className="main-container"> 
                            <ServiceBookingDetailsList list={serviceBookingDetails}/>
                        </div>
                    </div>
            </Route>

            <Route exact path="/hotelDashboard/roomedit/:id">
                  <div className="service-wrapper">
                          <HotelNavbar />
                        <div className="main-container">
                        <ServiceEditRoom callback={serviceEditRoom} />
                        </div>
                    </div>  
            </Route>

            <Route exact path="/hotelDashboard/showhotelallboking">
                <div className="service-wrapper">
                        <HotelNavbar />
                      <div className="main-container"> 
                        <ServiceBookingList list={servicebooking} callbackD={serviceBookingDetailscallback} callback={serviceBookingDeletecallback} />
                      </div>
                </div>
            </Route>

            <Route exact path="/hotelDashboard/room-book-pending">
                  <div className="service-wrapper">
                          <HotelNavbar />
                      <div className="main-container"> 
                        <ServicePendingBookingList list={servicependingbooking} callbackA={servicePendingBookingApprovecallback} callbackD={servicePendingBookingDeclinecallback} />
                      </div>
                  </div>
            </Route>

            <Route exact path="/hotelDashboard/checkhotelreview">
                    <div className="service-wrapper">
                          <HotelNavbar />
                        <div className="main-container">
                            <ServiceReviewList list={servicereview} />
                        </div>
                    </div> 
            </Route>

            <Route exact path="/hotelDashboard/hoteltransactionhistory">
                  <div className="service-wrapper">
                          <HotelNavbar />
                      <div className="main-container">
                        <ServiceTransactionList list={servicetransaction} />
                      </div>
                  </div>
            </Route>




  {/* ------------------------------------ Service Car Route -------------------------------------------------- */}

            <Route exact path="/carDashboard/index">
                    <div className="service-wrapper">
                        <CarNavbar />
                        <div className="main-container"> 
                            <CarHome/>
                        </div>
                    </div>      
            </Route>

            <Route exact path="/carDashboard/profile">
                    <div className="service-wrapper">

                        <CarNavbar />
                        <div className="main-container"> 
                            <CarProfile caridl = {carloginId} 
                            carnamel = {carloginName}
                            carphonel = {carloginPhone}
                            caremaill = {carloginEmail}
                            cartypel = {carloginType}
                            callback={carProfileUpdate} />  
                        </div>
                    </div>
            </Route>

            <Route exact path="/carDashboard/addcar">
                  <div className="service-wrapper">
                          <CarNavbar />
                        <div className="main-container">
                           <ServiceAddCar callback={serviceAddCar} />
                        </div>
                    </div>  
            </Route>

            <Route exact path="/carDashboard/caredit/:id">
                  <div className="service-wrapper">
                          <CarNavbar />
                        <div className="main-container">
                        <ServiceEditCar callback={serviceEditCar} />
                        </div>
                    </div>  
            </Route>

            <Route exact path="/carDashboard/managecar">
                  <div className="service-wrapper"> 
                          <CarNavbar />
                        <div className="main-container"> 
                        <ServiceCarManageList list={servicecarmanage} callback={serviceCarManageDeletecallback} />
                        </div>
                  </div>  
                </Route>

            <Route exact path="/carDashboard/car-booking-list">
                <div className="service-wrapper">
                        <CarNavbar />
                      <div className="main-container"> 
                        <ServiceCarBookingList list={servicecarbooking} callbackD={serviceCarBookingDetailscallback} callback={serviceCarBookingDeletecallback} />
                      </div>
                </div>
            </Route>

            <Route exact path="/carDashboard/details/:id">
                    <div className="service-wrapper">
                        <CarNavbar />
                        <div className="main-container"> 
                            <ServiceCarBookingDetailsList list={serviceCarBookingDetails}/>
                        </div>
                    </div>
            </Route>

            <Route exact path="/carDashboard/car-pending-list">
                  <div className="service-wrapper">
                          <CarNavbar />
                      <div className="main-container"> 
                        <ServiceCarPendingBookingList list={servicecarpendingbooking} callbackA={serviceCarPendingBookingApprovecallback} callbackD={serviceCarPendingBookingDeclinecallback} />
                      </div>
                  </div>
            </Route>
            
            <Route exact path="/carDashboard/cartype">
                  <div className="service-wrapper">
                            <CarNavbar />
                      <div className="main-container">
                        <ServiceCarType list={serviceCarType} callback={carTypeCallback} /> 
                      </div>
                  </div>
            </Route>

            <Route exact path="/carDashboard/caravailability">
                   <div className="service-wrapper">
                              <CarNavbar />
                        <div className="main-container">
                            <ServiceCarAvailability list={serviceCarAvailability} callback={carAvailabilityCallback} /> 
                        </div>
                  </div>
            </Route>

            <Route exact path="/carDashboard/carsupport">
                  <div className="service-wrapper">
                        <CarNavbar />
                      <div className="main-container">

                        <ServiceCarSupport status="Support" callback={serviceCarSupport} />
                      </div>
                  </div>
            </Route>

            <Route exact path="/carDashboard/checkcarreview">
                    <div className="service-wrapper">
                          <CarNavbar />
                        <div className="main-container">
                            <ServiceCarReviewList list={servicecarreview} />
                        </div>
                    </div> 
            </Route>

            <Route exact path="/carDashboard/cartransactionhistory">
                  <div className="service-wrapper">
                          <CarNavbar />
                      <div className="main-container">
                        <ServiceCarTransactionList list={servicecartransaction} />
                      </div>
                  </div>
            </Route>



    {/* --------------------------------------Service Flight Route ----------------------------------- */}

            <Route exact path="/flightDashboard/index">
                    <div className="service-wrapper">
                        <FlightNavbar />
                        <div className="main-container"> 
                            <FlightHome/>
                        </div>
                    </div>      
            </Route>

            <Route exact path="/flightDashboard/profile">
                    <div className="service-wrapper">
                        <FlightNavbar />
                        <div className="main-container"> 
                            <FlightProfile flightidl = {flightloginId} 
                            flightnamel = {flightloginName}
                            flightphonel = {flightloginPhone}
                            flightemaill = {flightloginEmail}
                            flighttypel = {flightloginType}
                            callback={flightProfileUpdate} />  
                        </div>
                    </div>
            </Route>

            <Route exact path="/flightDashboard/addflight">
                  <div className="service-wrapper">
                          <FlightNavbar />
                      <div className="main-container"> 
                        <ServiceAddFlight status="Flight" callback={serviceAddFlight} />
                      </div>
                  </div>
            </Route>

            <Route exact path="/flightDashboard/flightedit/:id">
                  <div className="service-wrapper">
                          <FlightNavbar />
                        <div className="main-container">
                        <ServiceEditFlight callback={serviceEditFlight} />
                        </div>
                    </div>  
            </Route>

            <Route exact path="/flightDashboard/manageflight">
                  <div className="service-wrapper"> 
                          <FlightNavbar />
                        <div className="main-container"> 
                        <ServiceFlightManageList list={serviceflightmanage}  callback={serviceFlightManageDeletecallback} />
                        </div>
                  </div>  
            </Route>

            <Route exact path="/flightDashboard/details/:id">
                    <div className="service-wrapper">
                        <FlightNavbar />
                        <div className="main-container"> 
                            <ServiceFlightBookingDetailsList list={serviceFlightBookingDetails}/>
                        </div>
                    </div>
            </Route>
               
            <Route exact path="/flightDashboard/flight-booking-list">
                <div className="service-wrapper">
                        <FlightNavbar />
                      <div className="main-container"> 
                        <ServiceFlightBookingList list={serviceflightbooking} callbackD={serviceFlightBookingDetailscallback} callback={serviceFlightBookingDeletecallback} />
                      </div>
                </div>
            </Route>

            <Route exact path="/flightDashboard/flight-pending-list">
                  <div className="service-wrapper">
                          <FlightNavbar />
                      <div className="main-container"> 
                        <ServiceFlightPendingBookingList list={serviceflightpendingbooking} callbackA={serviceFlightPendingBookingApprovecallback} callbackD={serviceFlightPendingBookingDeclinecallback} />
                      </div>
                  </div>
            </Route>

            <Route exact path="/flightDashboard/flighttype">
                  <div className="service-wrapper">
                            <FlightNavbar />
                      <div className="main-container">
                        <ServiceFlightType list={serviceFlightType} callback={flightTypeCallback} /> 
                      </div>
                  </div>
            </Route>

            <Route exact path="/flightDashboard/flightavailability">
                   <div className="service-wrapper">
                              <FlightNavbar />
                        <div className="main-container">
                            <ServiceFlightAvailability list={serviceFlightAvailability} callback={flightAvailabilityCallback} /> 
                        </div>
                  </div>
            </Route>

            <Route exact path="/flightDashboard/checkflightreview">
                    <div className="service-wrapper">
                          <FlightNavbar />
                        <div className="main-container">
                            <ServiceFlightReviewList list={serviceflightreview} />
                        </div>
                    </div> 
            </Route>

            <Route exact path="/flightDashboard/flighttransactionhistory">
                  <div className="service-wrapper">
                          <FlightNavbar />
                      <div className="main-container">
                        <ServiceFlightTransactionList list={serviceflighttransaction} />
                      </div>
                  </div>
            </Route>


            <Route exact path="/flightDashboard/flightsupport">
                  <div className="service-wrapper">
                        <FlightNavbar />
                    <div className="main-container"> 
                        <ServiceFlightSupport status="Support" callback={serviceFlightSupport} />
                    </div>
                  </div>  
            </Route>
    
{/* Registration, Hotel, Car, Flight ----------------------------------------------Service Route END */}
{/* Registration, Hotel, Car, Flight ----------------------------------------------Service Route END */}
{/* Registration, Hotel, Car, Flight ----------------------------------------------Service Route END */}
{/* Registration, Hotel, Car, Flight ----------------------------------------------Service Route END */}
{/* Registration, Hotel, Car, Flight ----------------------------------------------Service Route END */}
{/* Registration, Hotel, Car, Flight ----------------------------------------------Service Route END */}
{/* Registration, Hotel, Car, Flight ----------------------------------------------Service Route END */}
{/* Registration, Hotel, Car, Flight ----------------------------------------------Service Route END */}
{/* Registration, Hotel, Car, Flight ----------------------------------------------Service Route END */}
{/* Registration, Hotel, Car, Flight ----------------------------------------------Service Route END */}
            

            
                <Route exact path="/employee">
                    <div className="wrapper">
                        <EmployeeNavbar />
                        <div className="main-container">   
                        <EmployeeHome/>   
                        </div>

                    </div>
                </Route>

                <Route exact path="/employee/userList">
                <div className="wrapper">
                    <EmployeeNavbar />
                    <div className="main-container">  
                    <EmployeeUserList list={employeeUser}  callback={employeeUserDetailscallback} />    
                    </div>

                </div>
                </Route>

                <Route exact path="/employee/user/details/:id">
                    <div className="wrapper">
                        <EmployeeNavbar />
                        <div className="main-container"> 
                            <EmployeeUserDetailsList list={employeeUserDetails}/>
                        </div>

                    </div>
                </Route>

                <Route exact path="/employee/packageAdd">
                <div className="wrapper">
                    <EmployeeNavbar />
                    <div className="main-container">  
                    <EmployeeAddPackage status="Package" callback={employeeAddPackage} />       
                    </div>

                </div>
                </Route>

                <Route exact path="/employee/package">
                <div className="wrapper">
                    <EmployeeNavbar />
                    <div className="main-container"> 
                    <EmployeePackageList list={employeePackage} callback={employeePackageDeletecallback} />       
                    </div>

                </div>
                </Route>


                <Route path="/employee/packageEdit/:id">
                    <div className="wrapper">
                            <EmployeeNavbar />
                            <div className="main-container">
                            <EmployeeEditPackage callback={employeeEditPackage} />
                            </div>
                        </div>  
                </Route>


                <Route exact path="/employee/placeAdd">
                <div className="wrapper">
                    <EmployeeNavbar />
                        <div className="main-container">
                        <EmployeeAddPlace status="Place" callback={employeeAddPlace} />          
                        </div>

                    </div>
                </Route>

                <Route exact path="/employee/place">
                <div className="wrapper">
                    <EmployeeNavbar />
                    <div className="main-container">    
                    <EmployeePlaceList list={employeePlace} callback={employeePlaceDeletecallback} />  
                    </div>

                </div>
                </Route>

                <Route path="/employee/placeEdit/:id">
                    <div className="wrapper">
                            <EmployeeNavbar />
                            <div className="main-container">
                            <EmployeeEditPlace callback={employeeEditPlace} />
                            </div>
                        </div>  
                </Route>

                <Route exact path="/employee/salary">
                <div className="wrapper">
                    <EmployeeNavbar />
                    <div className="main-container">   
                    <EmployeeAddSalary status="Salary" callback={employeeAddSalary} />   
                    </div>

                </div>     
                </Route>

                <Route exact path="/employee/salary/list">
                <div className="wrapper">
                    <EmployeeNavbar />
                    <div className="main-container">   
                    <EmployeeSalaryList list={employeesalary} />   
                    </div>
                </div>            
                </Route>

                <Route exact path="/employee/statementAdd">
                <div className="wrapper">
                    <EmployeeNavbar />
                    <div className="main-container">   
                    <EmployeeAddStatement status="Statement" callback={employeeAddStatement} />   
                    </div>
                            
                </div>
                </Route>

                <Route exact path="/employee/statement">
                <div className="wrapper">
                    <EmployeeNavbar />
                    <div className="main-container">   
                            <EmployeeStatementList list={employeestatement} />
                            </div>
                </div>            
                </Route>

                <Route exact path="/employee/transactionAdd">
                <div className="wrapper">
                    <EmployeeNavbar />
                    <div className="main-container">   
                            <EmployeeAddTransaction status="Transaction" callback={employeeAddTransaction} />
                            </div>
                </div>            
                </Route>

                <Route exact path="/employee/transaction">
                <div className="wrapper">
                    <EmployeeNavbar />
                    <div className="main-container">   
                            <EmployeeTransactionList list={employeetransaction} />
                            </div>
                </div>
                </Route>

                <Route exact path="/employee/advertisement">
                <div className="wrapper">
                    <EmployeeNavbar />
                    <div className="main-container">      
                    <EmployeeAddAdvertisement status="Advertisement" callback={employeeAddAdvertisement} />  
                    </div>

                </div>
                </Route>

                <Route exact path="/employee/advertisement/list">
                <div className="wrapper">
                    <EmployeeNavbar />
                    <div className="main-container">   
                    <EmployeeAdvertisementList list={employeeadvertisement} callback={employeeAdvertisementDeletecallback} />    
                    </div>

                </div>
                </Route>

                <Route exact path="/employee/promo">
                <div className="wrapper">
                    <EmployeeNavbar />
                    <div className="main-container">    
                    <EmployeeAddPromo status="Promo" callback={employeeAddPromo} />  
                    </div>

                </div>
                </Route>

                <Route exact path="/employee/promo/list">
                <div className="wrapper">
                    <EmployeeNavbar />
                    <div className="main-container">     
                    <EmployeePromoList list={employeepromo} callback={employeePromoDeletecallback} /> 
                    </div>

                </div>
                </Route>

                <Route exact path="/employee/review">
                <div className="wrapper">
                    <EmployeeNavbar />
                    <div className="main-container">   
                            <EmployeeReviewList list={employeereview} />
                            </div>
                </div>            
                </Route>

                <Route exact path="/employee/support">
                <div className="wrapper">
                    <EmployeeNavbar />
                    <div className="main-container">   
                    <EmployeeSupportList list={employeesupport} callback={employeeSupportDeletecallback} />   
                    </div>

                </div>
                </Route>

                <Route exact path="/employee/guidelines">
                <div className="wrapper">
                    <EmployeeNavbar />
                    <div className="main-container">   
                    <EmployeeGuidelines list={employeeGuidelines} />   
                    </div>

                </div>
                </Route>

                <Route path="/employee/guidelines/edit">
                            <div className="wrapper">

                                <EmployeeNavbar />
                                <div className="main-container"> 
                                    <EmployeeGuidelinesForm callback={employeeGuidelinesEditCallback} />
                                </div>

                            </div>
                        </Route>

                <Route exact path="/employee/faq">
                <div className="wrapper">
                    <EmployeeNavbar />
                    <div className="main-container">   
                                <EmployeeAddFaq status="Faq" callback={employeeAddFaq} />
                            </div>
                </div>            
                </Route>

                <Route exact path="/employee/faq/list">
                <div className="wrapper">
                    <EmployeeNavbar />
                    <div className="main-container">   
                                <EmployeeFaqList list={employeefaq} callback={employeeFaqDeletecallback} />
                            </div>
                </div>            
                </Route>

                <Route exact path="/employee/transportList">
                <div className="wrapper">
                    <EmployeeNavbar />
                    <div className="main-container">   
                            <EmployeeTransportList list={employeetransport} />
                            </div>
                </div>            
                </Route>

                <Route exact path="/employee/hotelList">
                <div className="wrapper">
                    <EmployeeNavbar />
                    <div className="main-container">   
                            <EmployeeHotelList list={employeehotel} />
                            </div>
                </div>            
                </Route>


                <Route exact path="/employee/profile">
                    <div className="wrapper">

                        <EmployeeNavbar />
                        <div className="main-container"> 
                            <EmployeeProfile idl = {loginId} 
                            firstnamel = {loginFirstname}
                            lastnamel = {loginLastname}
                            genderl = {loginGender}
                            emaill = {loginEmail}
                            usernamel = {loginUsername} 
                            callback={employeeProfileUpdate} />
                        </div>

                    </div>
                </Route>


                {/* Employee END*************************************************** */}
                {/* Employee END*************************************************** */}
                {/* Employee END*************************************************** */}
                {/* Employee END*************************************************** */}
                {/* Employee END*************************************************** */}
                {/* Employee END*************************************************** */}
                {/* Employee END*************************************************** */}
                {/* Employee END*************************************************** */}
                {/* Employee END*************************************************** */}
                {/* Employee END*************************************************** */}
                {/* Employee END*************************************************** */}

                <Route exact path="/user">
                  <UserNavbar />
                  <h2>Home</h2>
                  <UserHomePage callback={userSrcHotel} />
                  <UserFooter />
              </Route>

              <Route exact path="/user/flight">
                  <UserNavbar />
                  <h2>Flight List</h2>
                  <UserBookedFlightList list={userbookedflight} />
                  <UserFooter />
              </Route>

              <Route exact path="/user/hotel">
                  <UserNavbar />
                  <h2>Hotel List</h2>
                  <UserBookedHotelList list={userbookedhotel} />
                  <UserFooter />
              </Route>

              <Route exact path="/user/car">
                  <UserNavbar />
                  <h2>Car List</h2>
                  <UserBookedCarList list={userbookedcar} />
                  <UserFooter />
              </Route>

              <Route exact path="/user/destination">
                  <UserNavbar />
                  <h2>Destination</h2>
                  <UserDestinationList list={userdestinationlist} callback={userDestinationDetailscallback} />
                  <UserFooter />
              </Route>

              <Route exact path="/user/destination_details/:id">
                  <UserNavbar />
                  <h2>Destination Details</h2>
                  <UserShowDestinationDetails list={userdestinationdetails} />
                  <UserFooter />
              </Route>

              <Route exact path="/user/package">
                  <UserNavbar />
                  <h2>Packages</h2>
                  <UserPackageList list={usershowpackage} callback={userBookPackageCallback}/>
                  <UserFooter />
              </Route>

              <Route exact path="/user/show_hotels">
                  <UserNavbar />
                  <h2>Hotels</h2>
                  <UserShowHotelList list={usershowhotel} callback={userHotelRoomscallback} />
                  <UserFooter />
              </Route>

              <Route exact path="/user/show_hotels/:id">
                  <UserNavbar />
                  <h2>Hotels</h2>
                  <UserShowHotelList list={usershowhotelsrc} callback={userHotelRoomscallback} />
                  <UserFooter />
              </Route>

              <Route exact path="/user/hotel_rooms/:src_hotel">
                  <UserNavbar />
                  <h2>Hotel Room</h2>
                  <UserHotelRoomList list={userhotelroomsrc} />
                  <UserFooter />
              </Route>

              <Route exact path="/user/confirm_hotel/:id">
                  <UserNavbar />
                  <h2>Confirm Hotel</h2>
                  <UserConfirmHotel callback={userConfirmHotel} />
                  <UserFooter />
              </Route>

              <Route exact path="/user/hotel_facility">
                  <UserNavbar />
                  <h2>Hotel Facility</h2>
                  <UserHotelFacilityList list={userhotelfacility} />
                  <UserFooter />
              </Route>

              <Route exact path="/user/flight_list">
                  <UserNavbar />
                  <h2>Flight</h2>
                  <UserFlightBookingList list={userflightbooking} />
                  <UserFooter />
              </Route>

              <Route path="/user/flight/book/:id">
                  <UserNavbar />
                  <UserConfirmFlight callback={userConfirmFlight} />
                  <UserFooter />
              </Route>

              <Route exact path="/user/Car_list">
                  <UserNavbar />
                  <h2>Car</h2>
                  <UserCarBookingList list={usercarbooking} />
                  <UserFooter />
              </Route>

              <Route exact path="/user/car/book/:id">
                  <UserNavbar />
                  <UserConfirmCar status="User" callback={userConfirmCar} />
                  <UserFooter />
              </Route>

              <Route exact path="/user/travel_history">
                  <UserNavbar />
                  <h2>Travel History</h2>
                  <UserTravelHistoryList list={usertravelhistory} />
                  <UserFooter />
              </Route>

              <Route exact path="/user/guideline">
                  <UserNavbar />
                  <UserShowTravelGuideline list={usershowguideline} />
                  <UserFooter />
              </Route>

              <Route exact path="/user/notification">
                  <UserNavbar />
                  <h2>Notification</h2>
                  <UserShowNotification list={usershowpromos} />
                  <UserFooter />
              </Route>

              <Route exact path="/user/about">
                  <UserNavbar />
                  {/* <h2>About Us</h2> */}
                  <UserShowAboutUs list={usershowaboutus} />
                  <UserFooter />
              </Route>

              <Route path="/user/contact">
                  <UserNavbar />
                  <UserContactUs callback={userContactUs} />
                  <UserFooter />
              </Route>

              <Route exact path="/user/privay_policy">
                  <UserNavbar />
                  {/* <h2>Privacy Policy</h2> */}
                  <UserShowPrivacyPolicy list={usershowprivacypolicy} />
                  <UserFooter />
              </Route>

              <Route exact path="/user/faq">
                  <UserNavbar />
                  <h2>FAQ</h2>
                  <UserShowFAQ list={usershowfaq} />
                  <UserFooter />
              </Route>

              <Route path="/user/give_review">
                  <UserNavbar />
                  <UserReview callback={userReview} />
                  <UserFooter />
              </Route>

              <Route exact path="/user/registration">
                  <UserRegistration callback={userRegistration} />
              </Route>

              {/* <Route exact path="/user/profile">
                  <UserNavbar />
                  <h2>Profile</h2>
                  <UserFooter />
              </Route> */}

                 <Route exact path="/user/profile">
                    
                        <UserNavbar />
                        
                        <UserProfile idl = {loginId} 
                            firstnamel = {loginFirstname}
                            lastnamel = {loginLastname}
                            genderl = {loginGender}
                            emaill = {loginEmail}
                            usernamel = {loginUsername} 
                            callback={userProfileUpdate} />
            
                        <UserFooter />
                </Route>

                {/* User END****************************************************** */}
                {/* User END****************************************************** */}
                {/* User END****************************************************** */}
                {/* User END****************************************************** */}
                {/* User END****************************************************** */}
                {/* User END****************************************************** */}
                {/* User END****************************************************** */}
                {/* User END****************************************************** */}
                {/* User END****************************************************** */}
                {/* User END****************************************************** */}


                <Route path="*">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <h3>404 not found</h3>
                        </div>

                    </div>
                    
                </Route>
            

            </Switch>
        </Router>
  );
}

export default App;
