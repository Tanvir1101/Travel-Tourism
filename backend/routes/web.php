<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/project-login', 'LoginController@index')->name('login.index');
Route::post('/project-login', 'LoginController@verify')->name('login.verify');
Route::get('/register','RegistrationController@register')->name('registration.register');

Route::get('/logout', 'LogoutController@index')->name('logout.index');



Route::group(['middleware'=>['sess']] , function(){

    Route::group(['middleware'=>['adminCheck']] , function(){

        Route::get('/admin', 'AdminController@index')->name('admin.index');
        Route::get('/admin/profile', 'AdminController@profile')->name('admin.profile');
        Route::post('/admin/profile', 'AdminController@profileUD')->name('admin.profileUD');

        Route::get('/admin/add-admin', 'AdminController@adminAdd')->name('admin.adminAdd');
        Route::post('/admin/add-admin', 'AdminController@adminAddVerify')->name('admin.adminAddVerify');
        Route::get('/admin/all-admins', 'AdminController@adminList')->name('admin.adminList');
        Route::get('/admin/admin/delete/{id}', 'AdminController@adminDelete')->name('admin.adminDelete');
        Route::post('/admin/admin/delete/{id}', 'AdminController@adminDestroy')->name('admin.adminDestroy');

        Route::get('/admin/add-employee', 'AdminEmployeeController@employeeAdd')->name('adminEmployee.employeeAdd');
        Route::post('/admin/add-employee', 'AdminEmployeeController@employeeAddVerify')->name('adminEmployee.employeeAddVerify');
        Route::get('/admin/all-employees', 'AdminEmployeeController@employeeList')->name('adminEmployee.employeeList');
        Route::get('/admin/active-employees', 'AdminEmployeeController@activeEmployeeList')->name('adminEmployee.activeEmployeeList');
        Route::get('/admin/employee/details/{id}', 'AdminEmployeeController@employeeDetails')->name('adminEmployee.employeeDetails');
        Route::get('/admin/employee/delete/{id}', 'AdminEmployeeController@employeeDelete')->name('adminEmployee.employeeDelete');
        Route::post('/admin/employee/delete/{id}', 'AdminEmployeeController@employeeDestroy')->name('adminEmployee.employeeDestroy');

        Route::get('/admin/all-users', 'AdminUserController@userList')->name('adminUser.userList');
        Route::get('/admin/active-users', 'AdminUserController@activeUserList')->name('adminUser.activeUserList');
        Route::get('/admin/user/details/{id}', 'AdminUserController@userDetails')->name('adminUser.userDetails');
        Route::get('/admin/user/delete/{id}', 'AdminUserController@userDelete')->name('adminUser.userDelete');
        Route::post('/admin/user/delete/{id}', 'AdminUserController@userDestroy')->name('adminUser.userDestroy');

        Route::get('/admin/hotels-pending', 'AdminHotelController@adHotel')->name('adminHotel.adHotel');
        Route::get('/admin/hotel/approve{id}', 'AdminHotelController@hotelApprove')->name('AdminHotel.hotelApprove');
        Route::post('/admin/hotel/approve{id}', 'AdminHotelController@hotelAdd')->name('AdminHotel.hotelAdd');
        Route::get('/admin/hotel/decline{id}', 'AdminHotelController@hotelDecline')->name('AdminHotel.hotelDecline');
        Route::post('/admin/hotel/decline{id}', 'AdminHotelController@hotelRemove')->name('AdminHotel.hotelRemove');
        Route::get('/admin/all-hotels', 'AdminHotelController@hotelList')->name('adminHotel.hotelList');
        Route::get('/admin/hotel/delete{id}', 'AdminHotelController@hotelDelete')->name('AdminHotel.hotelDelete');
        Route::post('/admin/hotel/delete{id}', 'AdminHotelController@hotelDestroy')->name('AdminHotel.hotelDelete');
        Route::get('/admin/hotel-bookings', 'AdminHotelController@hotelBookings')->name('adminHotel.hotelBookings');
        Route::get('/admin/hotel-bookings/details{id}', 'AdminHotelController@roomBookDetail')->name('adminHotel.roomBookDetail');

        Route::get('/admin/transports-pending', 'AdminTransportController@adTransport')->name('adminTransport.adTransport');
        Route::get('/admin/transport/approve{id}', 'AdminTransportController@transportApprove')->name('adminTransport.transportApprove');
        Route::post('/admin/transport/approve{id}', 'AdminTransportController@transportAdd')->name('adminTransport.transportAdd');
        Route::get('/admin/transport/decline{id}', 'AdminTransportController@transportDecline')->name('adminTransport.transportDecline');
        Route::post('/admin/transport/decline{id}', 'AdminTransportController@transportRemove')->name('adminTransport.transportRemove');

        Route::get('/admin/all-cars', 'AdminTransportController@carList')->name('adminTransport.carList');
        Route::get('/admin/car/delete{id}', 'AdminTransportController@carDelete')->name('adminTransport.carDelete');
        Route::post('/admin/car/delete{id}', 'AdminTransportController@carDestroy')->name('adminTransport.carDestroy');
        Route::get('/admin/car-bookings', 'AdminTransportController@carBookingList')->name('adminTransport.carBookingList');
        Route::get('/admin/car-bookings/detail{id}', 'AdminTransportController@carBookingDetail')->name('adminTransport.carBookingDetail');

        Route::get('/admin/all-flight', 'AdminTransportController@flightList')->name('adminTransport.flightList');
        Route::get('/admin/flight/delete{id}', 'AdminTransportController@flightDelete')->name('adminTransport.flightDelete');
        Route::post('/admin/flight/delete{id}', 'AdminTransportController@flightDestroy')->name('adminTransport.flightDestroy');
        Route::get('/admin/flight-bookings', 'AdminTransportController@flightBookingList')->name('adminTransport.flightBookingList');
        Route::get('/admin/flight-bookings/detail{id}', 'AdminTransportController@flightBookingDetail')->name('adminTransport.flightBookingDetail');

        Route::get('/admin/package-pending', 'AdminPackageController@adPackage')->name('AdminPackage.adPackage');
        Route::get('/admin/package/approve{id}', 'AdminPackageController@packageApprove')->name('AdminPackage.packageApprove');
        Route::post('/admin/package/approve{id}', 'AdminPackageController@packageAdd')->name('AdminPackage.packageAdd');
        Route::get('/admin/package/decline{id}', 'AdminPackageController@packageDecline')->name('AdminPackage.packageDecline');
        Route::post('/admin/package/decline{id}', 'AdminPackageController@packageRemove')->name('AdminPackage.packageRemove');
        Route::get('/admin/all-packages', 'AdminPackageController@packageList')->name('AdminPackage.packageList');
        Route::get('/admin/package/delete{id}', 'AdminPackageController@packageDelete')->name('AdminPackage.packageDelete');
        Route::post('/admin/package/delete{id}', 'AdminPackageController@packageDestroy')->name('AdminPackage.packageDestroy');
		Route::get('/admin/package-bookings', 'AdminPackageController@packageBookingList')->name('AdminPackage.packageBookingList');
		Route::get('/admin/package-status', 'AdminPackageController@packageStatus')->name('AdminPackage.packageStatus');
		Route::post('/admin/package-status', 'AdminPackageController@packageStatusUpdate')->name('AdminPackage.packageStatusUpdate');

        Route::get('/admin/place-pending', 'AdminPlaceController@adPlace')->name('AdminPlace.adPlace');
        Route::get('/admin/place/approve{id}', 'AdminPlaceController@placeApprove')->name('AdminPlace.placeApprove');
        Route::post('/admin/place/approve{id}', 'AdminPlaceController@placeAdd')->name('AdminPlace.placeAdd');
        Route::get('/admin/place/decline{id}', 'AdminPlaceController@placeDecline')->name('AdminPlace.placeDecline');
        Route::post('/admin/place/decline{id}', 'AdminPlaceController@placeRemove')->name('AdminPlace.placeRemove');
        Route::get('/admin/all-places', 'AdminPlaceController@placeList')->name('AdminPlace.placeList');
        Route::get('/admin/place/delete{id}', 'AdminPlaceController@placeDelete')->name('AdminPlace.placeDelete');
        Route::post('/admin/place/delete{id}', 'AdminPlaceController@placeDestroy')->name('AdminPlace.placeDestroy');

        Route::get('/admin/income-statement', 'AdminAccountsController@income')->name('AdminAccounts.income');
        Route::get('/admin/transaction-history', 'AdminAccountsController@transaction')->name('AdminAccounts.transaction');
        Route::get('/admin/pending-salary', 'AdminAccountsController@salary')->name('AdminAccounts.salary');
        Route::get('/admin/salary/approve{id}', 'AdminAccountsController@salaryApprove')->name('AdminAccounts.salaryApprove');
        Route::post('/admin/salary/approve{id}', 'AdminAccountsController@salaryAdd')->name('AdminAccounts.salaryAdd');
        Route::get('/admin/salary/decline{id}', 'AdminAccountsController@salaryDecline')->name('AdminAccounts.salaryDecline');
        Route::post('/admin/salary/decline{id}', 'AdminAccountsController@salaryRemove')->name('AdminAccounts.salaryRemove');

        Route::get('/admin/support', 'AdminSupportController@index')->name('AdminSupport.index');
        Route::get('/admin/support/delete{id}', 'AdminSupportController@supportDelete')->name('AdminSupport.supportDelete');
        Route::post('/admin/support/delete{id}', 'AdminSupportController@supportDestroy')->name('AdminSupport.supportDestroy');

        Route::get('/admin/policy', 'AdminPolicyController@index')->name('adminPolicy.index');
        Route::get('/admin/edit-policy{id}', 'AdminPolicyController@form')->name('adminPolicy.form');
        Route::post('/admin/edit-policy{id}', 'AdminPolicyController@edit')->name('adminPolicy.edit');

        Route::get('/admin/guidelines', 'AdminGuidelinesController@index')->name('adminGuidelines.index');
        Route::get('/admin/edit-guidelines{id}', 'AdminGuidelinesController@form')->name('adminGuidelines.form');
        Route::post('/admin/edit-guidelines{id}', 'AdminGuidelinesController@edit')->name('adminGuidelines.edit');

        Route::get('/admin/about', 'AdminAboutController@index')->name('adminAbout.index');
        Route::get('/admin/edit-about{id}', 'AdminAboutController@form')->name('adminAbout.form');
        Route::post('/admin/edit-about{id}', 'AdminAboutController@edit')->name('adminAbout.edit');

        Route::get('/pdf', 'PDFMakerController@gen')->name('PDFMaker.gen');
        Route::get('/pdf2', 'PDFMakerController@gen2')->name('PDFMaker.gen2');
		

    });

//emp routes*************************************************

Route::group(['middleware'=>['employeeCheck']] , function(){

        Route::get('/employee', 'EmployeeController@index') ->name('employee.index');

        Route::get('/employee/profile', 'EmployeeController@profile') ->name('employee.profile');
        Route::post('/employee/profile', 'EmployeeController@profileUD')->name('employee.profileUD');

        Route::get('/employee/userlist', 'EmployeeUserController@userList') ->name('employee.userList');
        Route::get('/employee/userdetails{id}', 'EmployeeUserController@userDetails') ->name('employee.userDetails');

        Route::get('/employee/packageAdd', 'EmployeePackageController@packageAdd') ->name('employeePackage.packageAdd');
        Route::post('/employee/packageAdd', 'EmployeePackageController@PackageAdded') ->name('employeePackage.packageAdded');
        Route::get('/employee/packageEdit{id}', 'EmployeePackageController@packageEdit') ->name('employeePackage.packageEdit');
        Route::post('/employee/packageEdit{id}', 'EmployeePackageController@packageEdited') ->name('employeePackage.packageEdited');
        Route::get('/employee/packageDelete{id}', 'EmployeePackageController@packageDelete') ->name('employeePackage.packageDelete');
        Route::get('/employee/package', 'EmployeePackageController@package') ->name('employeePackage.package');

        Route::get('/employee/placeAdd', 'EmployeePlaceController@placeAdd') ->name('employeePlace.placeAdd');
        Route::post('/employee/placeAdd', 'EmployeePlaceController@PlaceAdded') ->name('employeePlace.placeAdded');
        Route::get('/employee/placeEdit{id}', 'EmployeePlaceController@placeEdit') ->name('employeePlace.placeEdit');
        Route::post('/employee/placeEdit{id}', 'EmployeePlaceController@placeEdited') ->name('employeePlace.placeEdited');
        Route::get('/employee/placedelete{id}', 'EmployeePlaceController@placeDelete') ->name('employeePlace.placeDelete');
        Route::get('/employee/place', 'EmployeePlaceController@place') ->name('employeePlace.place');

        Route::get('/employee/gallery', 'EmployeeGalleryController@index')->name('employeeGallery.index');
        Route::post('/employee/gallery', 'EmployeeGalleryController@upload')->name('employeeGallery.upload');
        Route::get('/employee/galleryManage', 'EmployeeGalleryController@manage')->name('employeeGallery.manage');
        Route::get('/employee/gallerydelete{id}', 'EmployeeGalleryController@pictureDelete') ->name('employeeGallery.pictureDelete');

        Route::get('/employee/salary', 'EmployeeSalaryController@salary') ->name('employeeSalary.salary');
        Route::post('/employee/salary', 'EmployeeSalaryController@salaryReq') ->name('employeeSalary.salaryReq');
        Route::get('/employee/salary/List', 'EmployeeSalaryController@salaryList') ->name('employeeSalary.salaryList');
        Route::get('/employee/salaryGen', 'EmployeeSalaryController@genSalary')->name('employee.genSalary');

        Route::get('/employee/statementAdd', 'EmployeeAccountController@addStatement') ->name('employee.addStatement');
        Route::post('employee/statementAdd', 'EmployeeAccountController@statementAdded')->name('employee.statemsentAdded');
        Route::get('/employee/statement', 'EmployeeAccountController@statement') ->name('employee.statement');
        Route::get('/employee/statementGen', 'EmployeeAccountController@genStatement')->name('employee.genStatement');
        Route::get('/employee/transactionAdd', 'EmployeeAccountController@addTransaction') ->name('employee.addTransaction');
        Route::post('employee/transactionAdd', 'EmployeeAccountController@transactionAdded')->name('employee.transactionAdded');
        Route::get('/employee/transaction', 'EmployeeAccountController@transaction') ->name('employee.transaction');
        Route::get('/employee/transactionGen', 'EmployeeAccountController@genTransaction')->name('employee.genTransaction');
       
        Route::get('/employee/advertisement', 'EmployeeAdvertisementController@adsIndex') ->name('employee.adsIndex');
        Route::post('/employee/advertisement', 'EmployeeAdvertisementController@adsVerify') ->name('employee.adsVerify');
        Route::get('/employee/adsdelete{id}', 'EmployeeAdvertisementController@adsDelete')->name('employee.adsDelete');
        Route::post('/employee/adsdelete{id}', 'EmployeeAdvertisementController@adsDestroy')->name('employee.adsDestroy');
        Route::get('/employee/promo', 'EmployeeAdvertisementController@promoIndex') ->name('employee.promoIndex');
        Route::post('/employee/promo', 'EmployeeAdvertisementController@promotions') ->name('employeePromo.promotions');
        Route::get('/employee/promodelete{id}', 'EmployeeAdvertisementController@promoDelete')->name('employee.promoDelete');
        Route::post('/employee/promodelete{id}', 'EmployeeAdvertisementController@promoDestroy')->name('employee.promoDestroy');

        Route::get('/employee/Review', 'EmployeeReviewController@showReview') ->name('employeeReview.showReview');

        Route::get('/employee/support', 'EmployeeSupportController@supportList') ->name('employee.supportList');
        Route::get('/employee/support/delete{id}', 'EmployeeSupportController@supportDelete') ->name('employee.supportDelete');
        Route::post('/employee/support/delete{id}', 'EmployeeSupportController@supportDestroy') ->name('employee.supportDestroy');

        Route::get('/employee/guideline', 'EmployeeGuidelinesController@index') ->name('employeeGuidelines.index');
        Route::get('/employee/guideline/form{id}', 'EmployeeGuidelinesController@form') ->name('employeeGuidelines.form');
        Route::post('/employee/guideline/form{id}', 'EmployeeGuidelinesController@edit') ->name('employeeGuidelines.edit');

        Route::get('/employee/faq', 'EmployeeFaqController@faq') ->name('employee.faq');
        Route::post('/employee/faq', 'EmployeeFaqController@faqAdd')->name('employee.faqAdd');
        Route::get('/employee/faqdelete{id}', 'EmployeeFaqController@faqDelete')->name('employee.faqDelete');
        Route::post('/employee/faqdelete{id}', 'EmployeeFaqController@faqDestroy')->name('employee.faqDestroy');

        Route::get('/employee/transportList', 'EmployeeTransportController@transport')->name('employee.transport');

        Route::get('/employee/hotelList', 'EmployeeHotelController@hotel')->name('employee.hotel');
    
    }); 

//user routes****************************************************************

	 Route::group(['middleware'=>['userCheck']] , function(){

		//Home
		Route::get('/user', 'UserController@home')->name('user.home');
		Route::post('/user', 'UserController@search')->name('user.search');



		//Profile
		Route::get('/user/profile', 'UserProfileController@userprofile')->name('userProfile.userprofile');
		Route::post('/user/profile', 'UserProfileController@userprofileUD')->name('userProfile.userprofileUD');


		//Flight 
		Route::get('/user/flight', 'UserFlightController@index')->name('userFlight.index');
		Route::get('/user/flight_list', 'UserFlightListController@showFlightList')->name('userFlightList.showFlightList');
		Route::get('/user/flight/book{id}', 'UserConFlightController@flightBook')->name('userConFlight.flightBook');
		Route::post('/user/flight/book{id}', 'UserConFlightController@AddflightBook')->name('userConFlight.AddflightBook');



		//Hotel
		Route::get('/user/hotel', 'UserHotelController@index')->name('userHotel.index');
		Route::get('/user/show_hotels', 'UserHotelsController@showHotel')->name('userHotels.showHotel');
		Route::get('/user/search_hotels{district}', 'UserHotelsController@searchHotel')->name('userHotels.searchHotel');
		Route::get('/user/hotel_rooms{id}', 'UserHotelRoomController@showHotelRoom')->name('userHotelRoom.showHotelRoom');
		Route::get('/user/confirm_hotel{id}', 'UserConHotelController@addHotelRoom')->name('userConHotel.addHotelRoom');
		Route::post('/user/confirm_hotel{id}', 'UserConHotelController@confirmHotel')->name('userConHotel.confirmHotel');
		Route::get('/user/hotel_facility', 'UserHotelRoomController@facility')->name('userHotelRoom.facility');



		//Car
		Route::get('/user/car', 'UserCarController@index')->name('userCar.index');
		Route::get('/user/Car_list', 'UserCarListController@showCarList')->name('userCarList.showCarList');
		Route::get('/user/car/book{id}', 'UserConCarController@carBook')->name('userConCar.carBook');
		Route::post('/user/car/book{id}', 'UserConCarController@Addcarbook')->name('userConCar.Addcarbook');



		//Destination
		Route::get('/user/destination', 'UserDestinationController@showdestination')->name('userDestination.showdestination');
		Route::get('/user/destination_details{id}', 'UserDestinationController@details')->name('userDestination.details');
		Route::get('/user/travel_history', 'UserTravelHistoryController@index')->name('userTravelHistory.index');



		//Package
		Route::get('/user/package', 'UserPackageController@showPackage')->name('userPackage.showPackage');
		Route::get('/user/package/book{id}', 'UserPackageController@packageBook')->name('userPackage.packageBook');
		Route::post('/user/package/book{id}', 'UserPackageController@confirmpackageBook')->name('userPackage.confirmpackageBook');


		//Contact Us/Support
		Route::get('/user/contact', 'UserContactController@index')->name('userContact.index');
		Route::post('/user/contact', 'UserContactController@verify')->name('userContact.verify');


		//Give Review
		Route::get('/user/give_review', 'UserReviewController@index')->name('userReview.index');
		Route::post('/user/give_review', 'UserReviewController@verify')->name('userReview.verify');



		//FAQ
		Route::get('/user/faq', 'UserFaqController@index')->name('userFaq.index');


		//Privacy Policy
		Route::get('/user/privay_policy', 'UserPrivacyController@index')->name('userPrivacy.index');


		//Travel Guideline
		Route::get('/user/guideline', 'UserGuideLineController@showGuideline')->name('userGuideline.showGuideline');


		//Notification
		Route::get('/user/notification', 'UserNotificationController@index')->name('userNotification.index');


		//About Us
		Route::get('/user/about', 'UserAboutController@index')->name('userAbout.index');



		Route::get('/user/services', 'UserServiceController@index')->name('userService.index');
		Route::get('/user/confirm_place', 'UserConPlaceController@index')->name('userConPlace.index');

	});



	 //service routes***********************************************************

	 //Car Route
	Route::group(['middleware'=>['carCheck']] , function(){

		Route::get('/carDashboard/index','CarController@index')->name('car.index');
		Route::get('/carDashboard/profile', 'CarController@profile')->name('car.profile');
		Route::post('/carDashboard/profile', 'CarController@profileUD')->name('car.profileUD');
		Route::get('/carDashboard/managecar','CarController@managecar')->name('car.managecar');
		Route::get('/carDashboard/addcar','CarController@addcar')->name('car.addcar');
		Route::post('/carDashboard/addcar','CarController@addcarVerify')->name('car.addcarVerify');
		Route::get('/carDashboard/checkcarreview','CarController@checkcarreview')->name('car.checkcarreview');
		Route::get('/carDashboard/cartransactionhistory','CarController@cartransactionhistory')->name('car.cartransactionhistory');

		//Car Type
		Route::get('/carDashboard/cartype','CarController@cartype')->name('car.cartype');
		Route::post('/carDashboard/cartype','CarController@cartypeconfirm')->name('car.cartypeconfirm');

		//Car Availability
		Route::get('/carDashboard/caravailability','CarController@caravailability')->name('car.caravailability');
		Route::post('/carDashboard/caravailability','CarController@caravailabilityconfirm')->name('car.caravailabilityconfirm');

		//Car Edit
		Route::get('/carDashboard/caredit{id}','CarController@caredit')->name('car.caredit');
		Route::post('/carDashboard/caredit{id}','CarController@careditconfirm')->name('car.careditconfirm');

		//Car delete
		Route::get('/carDashboard/cardelete{id}','CarController@cardelete')->name('car.cardelete');
		Route::post('/carDashboard/cardelete{id}','CarController@cardestroy')->name('car.cardestroy');

		//Car Support
		Route::get('/carDashboard/carsupport','CarController@carsupport')->name('car.carsupport');
		Route::post('/carDashboard/carsupport','CarController@carsupportconfirm')->name('car.carsupportconfirm');

		//Car booking part
		Route::get('/carDashboard/car-pending-list','CarController@ADcarBookList')->name('car.ADcarBookList');
		Route::get('/carDashboard/approve{id}','CarController@bookingapprove')->name('car.bookingapprove');
		Route::post('/carDashboard/approve{id}','CarController@bookingadd')->name('car.bookingadd');
		Route::get('/carDashboard/decline{id}','CarController@bookingdecline')->name('car.bookingdecline');
		Route::post('/carDashboard/decline{id}','CarController@bookingremove')->name('car.bookingremove');
		Route::get('/carDashboard/delete{id}','CarController@bookingdelete')->name('car.bookingdelete');
		Route::post('/carDashboard/delete{id}','CarController@bookingdestroy')->name('car.bookingdestroy');
		Route::get('/carDashboard/car-booking-list','CarController@showcarallbooking')->name('car.showcarallbooking');
		Route::get('/carDashboard/information{id}','carController@showusercarinfo')->name('car.showusercarinfo');

		//Transaction PDF
		Route::get('/pdfcar', 'ServicePdfMakerController@carpdf')->name('ServicePdfMaker.carpdf');


	});



		//Flight Route
	Route::group(['middleware'=>['flightCheck']] , function(){

		Route::get('/flightDashboard','FlightController@index')->name('flight.index');
		Route::get('/flightDashboard/profile', 'FlightController@profile')->name('flight.profile');
		Route::post('/flightDashboard/profile', 'FlightController@profileUD')->name('flight.profileUD');
		Route::get('/flightDashboard/addflight','FlightController@addflight')->name('flight.addflight');
		Route::post('/flightDashboard/addflight','FlightController@addflightVerify')->name('flight.addflightVerify');
		Route::get('/flightDashboard/manageflight','FlightController@manageflight')->name('flight.manageflight');
		Route::get('/flightDashboard/flightavailability','FlightController@flightavailability')->name('flight.flightavailability');
		Route::get('/flightDashboard/checkflightreview','FlightController@checkflightreview')->name('flight.checkflightreview');
		Route::get('/flightDashboard/flighttransactionhistory','FlightController@flighttransactionhistory')->name('flight.flighttransactionhistory');

		//flight edit
		Route::get('/flightDashboard/flightedit{id}','FlightController@flightedit')->name('flight.flightedit');
		Route::post('/flightDashboard/flightedit{id}','FlightController@flighteditconfirm')->name('flight.flighteditconfirm');

		//flight delete
		Route::get('/flightDashboard/flightdelete{id}','FlightController@flightdelete')->name('flight.flightdelete');
		Route::post('/flightDashboard/flightdelete{id}','FlightController@flightdestroy')->name('flight.flightdestroy');

		//flight type
		Route::get('/flightDashboard/flighttype','FlightController@flighttype')->name('flight.flighttype');
		Route::post('/flightDashboard/flighttype','FlightController@flighttypeconfirm')->name('flight.flighttypeconfirm');

		//Flight Availability
		Route::get('/flightDashboard/flightavailability','FlightController@flightavailability')->name('flight.flightavailability');
		Route::post('/flightDashboard/flightavailability','FlightController@flightavailabilityconfirm')->name('flight.flightavailabilityconfirm');


		//Flight Support
		Route::get('/flightDashboard/flightsupport','FlightController@flightsupport')->name('flight.flightsupport');
		Route::post('/flightDashboard/flightsupport','FlightController@flightsupportconfirm')->name('flight.flightsupportconfirm');

		//Flight booking part
		Route::get('/flightDashboard/flight-pending-list','FlightController@ADflightBookList')->name('flight.ADflightBookList');
		Route::get('/flightDashboard/approve{id}','FlightController@bookingapprove')->name('flight.bookingapprove');
		Route::post('/flightDashboard/approve{id}','FlightController@bookingadd')->name('flight.bookingadd');
		Route::get('/flightDashboard/decline{id}','FlightController@bookingdecline')->name('flight.bookingdecline');
		Route::post('/flightDashboard/decline{id}','FlightController@bookingremove')->name('flight.bookingremove');
		Route::get('/flightDashboard/delete{id}','FlightController@bookingdelete')->name('flight.bookingdelete');
		Route::post('/flightDashboard/delete{id}','FlightController@bookingdestroy')->name('flight.bookingdestroy');
		Route::get('/flightDashboard/flight-booking-list','FlightController@showflightallbooking')->name('flight.showflightallbooking');
		Route::get('/flightDashboard/information{id}','FlightController@showuserflightinfo')->name('flight.showuserflightinfo');

		//Transaction PDF
		Route::get('/pdfflight', 'ServicePdfMakerController@flightpdf')->name('ServicePdfMaker.flightpdf');

	});




		//HOTEL Route
	Route::group(['middleware'=>['hotelCheck']] , function(){

		Route::get('/hotelDashboard','HotelController@index')->name('hotel.index');
		Route::get('/hotelDashboard/profile', 'HotelController@profile')->name('hotel.profile');
		Route::post('/hotelDashboard/profile', 'HotelController@profileUD')->name('hotel.profileUD');
		Route::get('/hotelDashboard/checkhotelreview','HotelController@checkhotelreview')->name('hotel.checkhotelreview');
		Route::get('/hotelDashboard/hoteltransactionhistory','HotelController@hoteltransactionhistory')->name('hotel.hoteltransactionhistory');

		//Hotel facility add
		Route::get('/hotelDashboard/addhotelfacility','HotelController@addhotelfacility')->name('hotel.addhotelfacility');
		Route::post('/hotelDashboard/addhotelfacility','HotelController@addhotelfacilityVerify')->name('hotel.addhotelfacilityVerify');


		//Hotel facility edit 
		Route::get('/hotelDashboard/facilityedit{id}','HotelController@facilityedit')->name('hotel.facilityedit');
		Route::post('/hotelDashboard/facilityedit{id}','HotelController@facilityeditconfirm')->name('hotel.facilityeditconfirm');

		//Hotel facility delete 
		Route::get('/hotelDashboard/facilitydelete{id}','HotelController@facilitydelete')->name('hotel.facilitydelete');
		Route::post('/hotelDashboard/facilitydelete{id}','HotelController@facilitydestroy')->name('hotel.facilitydestroy');


		//Hotel room edit 
		Route::get('/hotelDashboard/roomedit{id}','HotelController@roomedit')->name('hotel.roomedit');
		Route::post('/hotelDashboard/roomedit{id}','HotelController@roomeditconfirm')->name('hotel.roomeditconfirm');

		//Hotel room delete
		Route::get('/hotelDashboard/roomdelete{id}','HotelController@roomdelete')->name('hotel.roomdelete');
		Route::post('/hotelDashboard/roomdelete{id}','HotelController@roomdestroy')->name('hotel.roomdestroy');

		//Hotel room add
		Route::get('/hotelDashboard/addhotelroom','HotelController@addhotelroom')->name('hotel.addhotelroom');
		Route::post('/hotelDashboard/addhotelroom','HotelController@addhotelroomVerify')->name('hotel.addhotelroomVerify');

		//Hotel Support
		Route::get('/hotelDashboard/hotelsupport','HotelController@hotelsupport')->name('hotel.hotelsupport');
		Route::post('/hotelDashboard/hotelsupport','HotelController@hotelsupportconfirm')->name('hotel.hotelsupportconfirm');

		//Hotel booking part
		Route::get('/hotelDashboard/room-book-pending','HotelController@ADroomBookList')->name('hotel.ADroomBookList');
		Route::get('/hotelDashboard/bookingapprove{id}','HotelController@bookingapprove')->name('hotel.bookingapprove');
		Route::post('/hotelDashboard/bookingapprove{id}','HotelController@bookingadd')->name('hotel.bookingadd');
		Route::get('/hotelDashboard/bookingdecline{id}','HotelController@bookingdecline')->name('hotel.bookingdecline');
		Route::post('/hotelDashboard/bookingdecline{id}','HotelController@bookingremove')->name('hotel.bookingremove');
		Route::get('/hotelDashboard/bookingdelete{id}','HotelController@bookingdelete')->name('hotel.bookingdelete');
		Route::post('/hotelDashboard/bookingdelete{id}','HotelController@bookingdestroy')->name('hotel.bookingdestroy');
		Route::get('/hotelDashboard/showhotelallboking','HotelController@showhotelallboking')->name('hotel.showhotelallboking');
		Route::get('/hotelDashboard/information{id}','HotelController@showcustomerroominfo')->name('hotel.showcustomerroominfo');

		//Hotel Manage
		Route::get('/hotelDashboard/managehotelfacility','HotelController@managehotelfacility')->name('hotel.managehotelfacility');
		Route::get('/hotelDashboard/managehotelroom','HotelController@managehotelroom')->name('hotel.managehotelroom');

		//Transaction PDF
		Route::get('/pdfhotel', 'ServicePdfMakerController@hotelpdf')->name('ServicePdfMaker.hotelpdf');

	});

});

Auth::routes();

Route::get('login/google', 'LoginController@redirectToProvider');
Route::get('login/google/callback', 'LoginController@handleProviderCallback');

Route::get('/home', 'HomeController@index')->name('home');


//user reg****************************************************

Route::get('/user/registration', 'UserRegistrationController@userreg')->name('userRegistration.register');
Route::post('/user/registration', 'UserRegistrationController@userregverify')->name('userRegistration.userregverify');



//service reg****************************************************

Route::get('/register','RegistrationController@register')->name('registration.register');
Route::get('/hotelreg','RegistrationController@hotelreg')->name('registration.hotelreg');
Route::post('/hotelreg','RegistrationController@hotelregVerify')->name('registration.hotelregVerify');
Route::get('/transportreg','RegistrationController@transportreg')->name('registration.transportreg');
Route::post('/transportreg','RegistrationController@transportregVerify')->name('registration.transportregVerify');