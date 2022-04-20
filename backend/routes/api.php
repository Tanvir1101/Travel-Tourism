<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Admin API Start

Route::post('/project-login', 'LoginController@verify')->name('login.verify');


Route::get('/admin/profile', 'AdminController@profile')->name('admin.profile');
Route::post('/admin/profile', 'AdminController@profileUD')->name('admin.profileUD');



Route::post('/admin/add-employee', 'AdminEmployeeController@employeeAddVerify')->name('adminEmployee.employeeAddVerify');
Route::get('/admin/all-employees', 'AdminEmployeeController@employeeList')->name('adminEmployee.employeeList');
Route::post('/admin/employee/delete', 'AdminEmployeeController@employeeDestroy')->name('adminEmployee.employeeDestroy');
Route::get('/admin/active-employees', 'AdminEmployeeController@activeEmployeeList')->name('adminEmployee.activeEmployeeList');





Route::post('/admin/add-admin', 'AdminController@adminAddVerify')->name('admin.adminAddVerify');
Route::get('/admin/all-admins', 'AdminController@adminList')->name('admin.adminList');
Route::post('/admin/admin/delete', 'AdminController@adminDestroy')->name('admin.adminDestroy');





Route::get('/admin/all-users', 'AdminUserController@userList')->name('adminUser.userList');
Route::get('/admin/active-users', 'AdminUserController@activeUserList')->name('adminUser.activeUserList');
Route::get('/admin/user/details/{id}', 'AdminUserController@userDetails')->name('adminUser.userDetails');
// Route::get('/admin/user/delete/{id}', 'AdminUserController@userDelete')->name('adminUser.userDelete');
Route::post('/admin/user/delete/', 'AdminUserController@userDestroy')->name('adminUser.userDestroy');






Route::get('/admin/hotels-pending', 'AdminHotelController@adHotel')->name('adminHotel.adHotel');
Route::post('/admin/hotel/approve', 'AdminHotelController@hotelAdd')->name('AdminHotel.hotelAdd');
Route::post('/admin/hotel/decline', 'AdminHotelController@hotelRemove')->name('AdminHotel.hotelRemove');
Route::get('/admin/all-hotels', 'AdminHotelController@hotelList')->name('adminHotel.hotelList');
Route::post('/admin/hotel/delete', 'AdminHotelController@hotelDestroy')->name('AdminHotel.hotelDelete');
Route::get('/admin/hotel-bookings', 'AdminHotelController@hotelBookings')->name('adminHotel.hotelBookings');





Route::get('/admin/transports-pending', 'AdminTransportController@adTransport')->name('adminTransport.adTransport');
Route::post('/admin/transport/approve', 'AdminTransportController@transportAdd')->name('adminTransport.transportAdd');
Route::post('/admin/transport/decline', 'AdminTransportController@transportRemove')->name('adminTransport.transportRemove');

Route::get('/admin/all-cars', 'AdminTransportController@carList')->name('adminTransport.carList');
Route::post('/admin/car/delete', 'AdminTransportController@carDestroy')->name('adminTransport.carDestroy');
Route::get('/admin/car-bookings', 'AdminTransportController@carBookingList')->name('adminTransport.carBookingList');
Route::get('/admin/car-bookings/detail{id}', 'AdminTransportController@carBookingDetail')->name('adminTransport.carBookingDetail');

Route::get('/admin/all-flight', 'AdminTransportController@flightList')->name('adminTransport.flightList');
Route::post('/admin/flight/delete', 'AdminTransportController@flightDestroy')->name('adminTransport.flightDestroy');
Route::get('/admin/flight-bookings', 'AdminTransportController@flightBookingList')->name('adminTransport.flightBookingList');
Route::get('/admin/flight-bookings/detail{id}', 'AdminTransportController@flightBookingDetail')->name('adminTransport.flightBookingDetail');





Route::get('/admin/place-pending', 'AdminPlaceController@adPlace')->name('AdminPlace.adPlace');

Route::post('/admin/place/approve', 'AdminPlaceController@placeAdd')->name('AdminPlace.placeAdd');

Route::post('/admin/place/decline', 'AdminPlaceController@placeRemove')->name('AdminPlace.placeRemove');
Route::get('/admin/all-places', 'AdminPlaceController@placeList')->name('AdminPlace.placeList');

Route::post('/admin/place/delete', 'AdminPlaceController@placeDestroy')->name('AdminPlace.placeDestroy');





Route::get('/admin/package-pending', 'AdminPackageController@adPackage')->name('AdminPackage.adPackage');

Route::post('/admin/package/approve', 'AdminPackageController@packageAdd')->name('AdminPackage.packageAdd');

Route::post('/admin/package/decline', 'AdminPackageController@packageRemove')->name('AdminPackage.packageRemove');

Route::get('/admin/all-packages', 'AdminPackageController@packageList')->name('AdminPackage.packageList');

Route::post('/admin/package/delete', 'AdminPackageController@packageDestroy')->name('AdminPackage.packageDestroy');

Route::get('/admin/package-bookings', 'AdminPackageController@packageBookingList')->name('AdminPackage.packageBookingList');

Route::get('/admin/package-status', 'AdminPackageController@packageStatus')->name('AdminPackage.packageStatus');
Route::post('/admin/package-status', 'AdminPackageController@packageStatusUpdate')->name('AdminPackage.packageStatusUpdate');


Route::get('/admin/income-statement', 'AdminAccountsController@income')->name('AdminAccounts.income');
Route::get('/admin/transaction-history', 'AdminAccountsController@transaction')->name('AdminAccounts.transaction');
Route::get('/admin/pending-salary', 'AdminAccountsController@salary')->name('AdminAccounts.salary');

Route::post('/admin/salary/approve', 'AdminAccountsController@salaryAdd')->name('AdminAccounts.salaryAdd');

Route::post('/admin/salary/decline', 'AdminAccountsController@salaryRemove')->name('AdminAccounts.salaryRemove');




Route::get('/admin/support', 'AdminSupportController@index')->name('AdminSupport.index');
Route::post('/admin/support/delete', 'AdminSupportController@supportDestroy')->name('AdminSupport.supportDestroy');




Route::get('/admin/policy', 'AdminPolicyController@index')->name('adminPolicy.index');
Route::post('/admin/edit-policy', 'AdminPolicyController@edit')->name('adminPolicy.edit');




Route::get('/admin/guidelines', 'AdminGuidelinesController@index')->name('adminGuidelines.index');
Route::post('/admin/edit-guidelines', 'AdminGuidelinesController@edit')->name('adminGuidelines.edit');

Route::get('/admin/about', 'AdminAboutController@index')->name('adminAbout.index');
Route::post('/admin/edit-about', 'AdminAboutController@edit')->name('adminAbout.edit');




Route::get('/admin/home', 'AdminController@index')->name('admin.index');
Route::get('/admin/profile', 'AdminController@profile')->name('admin.profile');
Route::post('/admin/profile', 'AdminController@profileUD')->name('admin.profileUD');


// Admin API End**********************************************
// Admin API End**********************************************
// Admin API End**********************************************
// Admin API End**********************************************
// Admin API End**********************************************
// Admin API End**********************************************
// Admin API End**********************************************
// Admin API End**********************************************
// Admin API End**********************************************
// Admin API End**********************************************



//------------------------- Registration ------------------------------------------- Start
//                                        *****  Hotel ******
Route::post('/hotelreg','RegistrationController@hotelregVerify')->name('registration.hotelregVerify');

//                                        *****  Car - Flight ******
Route::post('/transportreg','RegistrationController@transportregVerify')->name('registration.transportregVerify');
//------------------------- Registration ------------------------------------------- END



//--------------------------------------------------HOTEL Service----------------------------- Start
//HOTEL Dashboard
Route::get('/hotelDashboard/index','HotelController@index')->name('hotel.index');

//Hotel Profile
Route::post('/hotelDashboard/profile', 'HotelController@profileUD')->name('hotel.profileUD');

//Hotel Facility Add/Show/delete
Route::post('/hotelDashboard/addhotelfacility','HotelController@addhotelfacilityVerify')->name('hotel.addhotelfacilityVerify');
Route::get('/hotelDashboard/managehotelfacility','HotelController@managehotelfacility')->name('hotel.managehotelfacility');
Route::post('/hotelDashboard/facilitydelete','HotelController@facilitydestroy')->name('hotel.facilitydestroy');

//Hotel Facility Edit
Route::post('/hotelDashboard/facilityedit','HotelController@facilityeditconfirm')->name('hotel.facilityeditconfirm');

//Hotel Room Add-Manage-Delete
Route::post('/hotelDashboard/addhotelroom','HotelController@addhotelroomVerify')->name('hotel.addhotelroomVerify');
Route::get('/hotelDashboard/managehotelroom','HotelController@managehotelroom')->name('hotel.managehotelroom');
Route::post('/hotelDashboard/roomdelete','HotelController@roomdestroy')->name('hotel.roomdestroy');

//Hotel Room Edit
Route::post('/hotelDashboard/roomedit','HotelController@roomeditconfirm')->name('hotel.roomeditconfirm');

//Hotel Booking Show And Delete
Route::get('/hotelDashboard/showhotelallboking','HotelController@showhotelallboking')->name('hotel.showhotelallboking');
Route::post('/hotelDashboard/bookingdelete','HotelController@bookingdestroy')->name('hotel.bookingdestroy');

//Hotel Pending Booking
Route::get('/hotelDashboard/room-book-pending','HotelController@ADroomBookList')->name('hotel.ADroomBookList');
Route::post('/hotelDashboard/bookingapprove','HotelController@bookingadd')->name('hotel.bookingadd');
Route::post('/hotelDashboard/bookingdecline','HotelController@bookingremove')->name('hotel.bookingremove');

//Hotel Review
Route::get('/hotelDashboard/checkhotelreview','HotelController@checkhotelreview')->name('hotel.checkhotelreview');

//Hotel Transaction
Route::get('/hotelDashboard/hoteltransactionhistory','HotelController@hoteltransactionhistory')->name('hotel.hoteltransactionhistory');

//Hotel Booking User-Room Information
Route::post('/hotelDashboard/information','HotelController@showcustomerroominfo')->name('hotel.showcustomerroominfo');

//Hotel Support
Route::post('/hotelDashboard/hotelsupport','HotelController@hotelsupportconfirm')->name('hotel.hotelsupportconfirm');

//--------------------------------------------------HOTEL Service----------------------------- ENd



//--------------------------------------------------Car Service----------------------------- Start


//Car Dashboard
Route::get('/carDashboard/index','CarController@index')->name('car.index');

//Car Profile
Route::post('/carDashboard/profile', 'CarController@profileUD')->name('car.profileUD');

//Car Add-Manage-Delete
Route::post('/carDashboard/addcar','CarController@addcarVerify')->name('car.addcarVerify');
Route::get('/carDashboard/managecar','CarController@managecar')->name('car.managecar');
Route::post('/carDashboard/cardelete','CarController@cardestroy')->name('car.cardestroy');

//Car Edit
Route::post('/carDashboard/caredit','CarController@careditconfirm')->name('car.careditconfirm');

//Car Booking Show And Delete
Route::get('/carDashboard/car-booking-list','CarController@showcarallbooking')->name('car.showcarallbooking');
Route::post('/carDashboard/delete','CarController@bookingdestroy')->name('car.bookingdestroy');

//Car Pending Booking
Route::get('/carDashboard/car-pending-list','CarController@ADcarBookList')->name('car.ADcarBookList');
Route::post('/carDashboard/approve','CarController@bookingadd')->name('car.bookingadd');
Route::post('/carDashboard/decline','CarController@bookingremove')->name('car.bookingremove');

//Car Type
Route::get('/carDashboard/cartype','CarController@cartype')->name('car.cartype');
Route::post('/carDashboard/cartype','CarController@cartypeconfirm')->name('car.cartypeconfirm');

//Car Availability
Route::get('/carDashboard/caravailability','CarController@caravailability')->name('car.caravailability');
Route::post('/carDashboard/caravailability','CarController@caravailabilityconfirm')->name('car.caravailabilityconfirm');

//Car Support
Route::post('/carDashboard/carsupport','CarController@carsupportconfirm')->name('car.carsupportconfirm');

//Car Review
Route::get('/carDashboard/checkcarreview','CarController@checkcarreview')->name('car.checkcarreview');

//Car Transaction
Route::get('/carDashboard/cartransactionhistory','CarController@cartransactionhistory')->name('car.cartransactionhistory');

//--------------------------------------------------Car Service----------------------------- ENd



//--------------------------------------------------Flight Service----------------------------- Start


//Flight Dashboard
Route::get('/flightDashboard/index','FlightController@index')->name('flight.index');

//Flight Profile
Route::post('/flightDashboard/profile', 'FlightController@profileUD')->name('flight.profileUD');

//Flight Add-Manage-Delete
Route::post('/flightDashboard/addflight','FlightController@addflightVerify')->name('flight.addflightVerify');
Route::get('/flightDashboard/manageflight','FlightController@manageflight')->name('flight.manageflight');
Route::post('/flightDashboard/flightdelete','FlightController@flightdestroy')->name('flight.flightdestroy');

//Flight Edit
Route::post('/flightDashboard/flightedit','FlightController@flighteditconfirm')->name('flight.flighteditconfirm');

//Flight Booking Show And Delete
Route::get('/flightDashboard/flight-booking-list','FlightController@showflightallbooking')->name('flight.showflightallbooking');
Route::post('/flightDashboard/delete','FlightController@bookingdestroy')->name('flight.bookingdestroy');

//Flight Pending Booking
Route::get('/flightDashboard/flight-pending-list','FlightController@ADflightBookList')->name('flight.ADflightBookList');
Route::post('/flightDashboard/approve','FlightController@bookingadd')->name('flight.bookingadd');
Route::post('/flightDashboard/decline','FlightController@bookingremove')->name('flight.bookingremove');

//Flight Type
Route::get('/flightDashboard/flighttype','FlightController@flighttype')->name('flight.flighttype');
Route::post('/flightDashboard/flighttype','FlightController@flighttypeconfirm')->name('flight.flighttypeconfirm');

//Flight Availability
Route::get('/flightDashboard/flightavailability','FlightController@flightavailability')->name('flight.flightavailability');
Route::post('/flightDashboard/flightavailability','FlightController@flightavailabilityconfirm')->name('flight.flightavailabilityconfirm');

//Flight Review
Route::get('/flightDashboard/checkflightreview','FlightController@checkflightreview')->name('flight.checkflightreview');

//Flight Transaction
Route::get('/flightDashboard/flighttransactionhistory','FlightController@flighttransactionhistory')->name('flight.flighttransactionhistory');

//Flight Support
Route::post('/flightDashboard/flightsupport','FlightController@flightsupportconfirm')->name('flight.flightsupportconfirm');

//--------------------------------------------------Flight Service----------------------------- End
//--------------------------------------------------Flight Service----------------------------- End
//--------------------------------------------------Flight Service----------------------------- End
//--------------------------------------------------Flight Service----------------------------- End
//--------------------------------------------------Flight Service----------------------------- End
//--------------------------------------------------Flight Service----------------------------- End
//--------------------------------------------------Flight Service----------------------------- End
//--------------------------------------------------Flight Service----------------------------- End
//--------------------------------------------------Flight Service----------------------------- End
//--------------------------------------------------Flight Service----------------------------- End
//--------------------------------------------------Flight Service----------------------------- End
//--------------------------------------------------Flight Service----------------------------- End

//emp profile
Route::post('/project-login', 'LoginController@verify')->name('login.verify');

Route::post('/employee/profile', 'EmployeeController@profileUD')->name('employee.profileUD');

//emp home
Route::get('/employee', 'EmployeeController@index') ->name('employee.index');

Route::get('/employee/profile', 'EmployeeController@profile') ->name('employee.profile');
Route::post('/employee/profile', 'EmployeeController@profileUD')->name('employee.profileUD');
//emp user
Route::get('/employee/userlist', 'EmployeeUserController@userList') ->name('employee.userList');
Route::get('/employee/userdetails{id}', 'EmployeeUserController@userDetails') ->name('employee.userDetails');
//emp package
Route::post('/employee/packageAdd', 'EmployeePackageController@PackageAdded') ->name('employeePackage.packageAdded');
Route::get('/employee/package', 'EmployeePackageController@package') ->name('employeePackage.package');
Route::post('/employee/packageEdit', 'EmployeePackageController@packageEdited') ->name('employeePackage.packageEdited');
Route::post('/employee/packagedelete', 'EmployeePackageController@packageDestroy') ->name('employeePackage.packageDestroy');
//emp place
Route::post('/employee/placeAdd', 'EmployeePlaceController@PlaceAdded') ->name('employeePlace.placeAdded');
Route::get('/employee/place', 'EmployeePlaceController@place') ->name('employeePlace.place');
Route::post('/employee/placeEdit', 'EmployeePlaceController@placeEdited') ->name('employeePlace.placeEdited');
Route::post('/employee/placedelete', 'EmployeePlaceController@placeDestroy') ->name('employeePlace.placeDestroy');
//emp salary
Route::post('/employee/salary', 'EmployeeSalaryController@salaryReq') ->name('employeeSalary.salaryReq');
Route::get('/employee/salary/list', 'EmployeeSalaryController@salaryList') ->name('employeeSalary.salaryList');
//emp statement
Route::post('/employee/statementAdd', 'EmployeeAccountController@statementAdded')->name('employee.statemsentAdded');
Route::get('/employee/statement', 'EmployeeAccountController@statement') ->name('employee.statement');
//emp transaction
Route::post('/employee/transactionAdd', 'EmployeeAccountController@transactionAdded')->name('employee.transactionAdded');
Route::get('/employee/transaction', 'EmployeeAccountController@transaction') ->name('employee.transaction');
//emp review
Route::get('/employee/review', 'EmployeeReviewController@showReview') ->name('employeeReview.showReview');
//emp advertisement
Route::post('/employee/advertisement', 'EmployeeAdvertisementController@advertisementAdd') ->name('employeeAdvertisement.advertisementAdd');
Route::get('/employee/advertisement/list', 'EmployeeAdvertisementController@advertisement') ->name('employeeAdvertisement.advertisement');
Route::post('/employee/advertisement/delete', 'EmployeeAdvertisementController@advertisementDestroy')->name('employeeAdvertisement.advertisementDestroy');
//emp promo
Route::post('/employee/promo', 'EmployeeAdvertisementController@promoAdd') ->name('employeePromo.promoAdd');
Route::get('/employee/promo/list', 'EmployeeAdvertisementController@promo') ->name('employeePromo.promo');
Route::post('/employee/promo/delete', 'EmployeeAdvertisementController@promoDestroy')->name('employeePromo.promoDestroy');
//emp support
Route::get('/employee/support', 'EmployeeSupportController@support') ->name('employee.support');
Route::post('/employee/support/delete', 'EmployeeSupportController@supportDestroy') ->name('employee.supportDestroy');
//emp faq
Route::post('/employee/faq', 'EmployeeFaqController@faqAdd') ->name('employeeFaq.faqAdd');
Route::get('/employee/faq/list', 'EmployeeFaqController@faq') ->name('employeeFaq.faq');
Route::post('/employee/faq/delete', 'EmployeeFaqController@faqDestroy')->name('employeeFaq.faqDestroy');
//emp guidelines
Route::get('/employee/guidelines', 'EmployeeGuidelinesController@index') ->name('employeeGuidelines.index');
Route::post('/employee/guidelines/edit', 'EmployeeGuidelinesController@edit') ->name('employeeGuidelines.edit');
//emp transport
Route::get('/employee/transportList', 'EmployeeTransportController@transport')->name('employee.transport');
//emp hotel
Route::get('/employee/hotelList', 'EmployeeHotelController@hotel')->name('employee.hotel');

// Employee END************************************************
// Employee END************************************************
// Employee END************************************************
// Employee END************************************************
// Employee END************************************************
// Employee END************************************************
// Employee END************************************************
// Employee END************************************************
// Employee END************************************************
// Employee END************************************************

//USER API START******************

Route::post('/project-login', 'LoginController@verify')->name('login.verify');

Route::post('/user/profile', 'UserProfileController@userprofileUD')->name('userProfile.userprofileUD');

Route::post('/user/registration', 'UserRegistrationController@userregverify')->name('userRegistration.userregverify');

Route::post('/user/give_review', 'UserReviewController@verify')->name('userReview.verify');
Route::post('/user/contact', 'UserContactController@verify')->name('userContact.verify');

Route::get('/user/car', 'UserCarController@index')->name('userCar.index');
Route::get('/user/Car_list', 'UserCarListController@showCarList')->name('userCarList.showCarList');
Route::post('/user/car/book', 'UserConCarController@Addcarbook')->name('userConCar.Addcarbook');

Route::get('/user/hotel', 'UserHotelController@index')->name('userHotel.index');
Route::get('/user/show_hotels', 'UserHotelsController@showHotel')->name('userHotels.showHotel');
Route::get('/user/hotel_rooms', 'UserHotelRoomController@showHotelRoom')->name('userHotelRoom.showHotelRoom');
Route::post('/user/confirm_hotel', 'UserConHotelController@confirmHotel')->name('userConHotel.confirmHotel');
Route::get('/user/hotel_facility', 'UserHotelRoomController@facility')->name('userHotelRoom.facility');

Route::get('/user/flight', 'UserFlightController@index')->name('userFlight.index');
Route::get('/user/flight_list', 'UserFlightListController@showFlightList')->name('userFlightList.showFlightList');
Route::post('/user/flight/book', 'UserConFlightController@AddflightBook')->name('userConFlight.AddflightBook');

Route::get('/user/travel_history', 'UserTravelHistoryController@index')->name('userTravelHistory.index');

Route::get('/user/notification', 'UserNotificationController@index')->name('userNotification.index');

Route::get('/user/guideline', 'UserGuideLineController@showGuideline')->name('userGuideline.showGuideline');

Route::get('/user/about', 'UserAboutController@index')->name('userAbout.index');

Route::get('/user/privay_policy', 'UserPrivacyController@index')->name('userPrivacy.index');

Route::get('/user/faq', 'UserFaqController@index')->name('userFaq.index');

Route::get('/user/package', 'UserPackageController@showPackage')->name('userPackage.showPackage');
Route::post('/user/package/book', 'UserPackageController@confirmpackageBook')->name('userPackage.confirmpackageBook');

Route::get('/user/destination', 'UserDestinationController@showdestination')->name('userDestination.showdestination');
Route::get('/user/destination_details{id}', 'UserDestinationController@details')->name('userDestination.details');

//USER API END***********************************
//USER API END***********************************
//USER API END***********************************
//USER API END***********************************
//USER API END***********************************
//USER API END***********************************
//USER API END***********************************
//USER API END***********************************