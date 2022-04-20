<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title>Admin Dashboard</title>
		<link rel="stylesheet" href="{{asset('css/adminstyle.css')}}">
		<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css">
	    <link rel="stylesheet" type="text/css" href="css/admincard.css">
	    <link href="https://fonts.googleapis.com/css?family=Raleway:100,200,400,500,600" rel="stylesheet" type="text/css">
	</head>
	<body>

		<!--wrapper start-->
		<div class="wrapper">
			@include ('admin.sidebar')

			<!--main container start-->
			<div class="main-container">
				<!--main-section start-->
				<div class="card-section">
					<div class="dashbord">
						<div class="icon-section">
							<i class="fa fa-users" aria-hidden="true"></i><br>
							<small>Users</small>
							<p>{{$userCount}}</p>
						</div>
						<div class="detail-section">
							<a href="{{route('adminUser.userList')}}">More Info </a>
						</div>
					</div>
					<div class="dashbord dashbord-green">
						<div class="icon-section">
							<i class="fa fa-briefcase" aria-hidden="true"></i><br>
							<small>Employees</small>
							<p>{{$employeeCount}}</p>
						</div>
						<div class="detail-section">
							<a href="{{route('adminEmployee.employeeList')}}">More Info </a>
						</div>
					</div>
					<div class="dashbord dashbord-orange">
						<div class="icon-section">
							<i class="fa fa-bell" aria-hidden="true"></i><br>
							<small>Messages</small>
							<p>{{$supportCount}}</p>
						</div>
						<div class="detail-section">
							<a href="{{route('AdminSupport.index')}}">More Info </a>
						</div>
					</div>					
					<div class="dashbord dashbord-blue">
						<div class="icon-section">
							<i class="fa fa-bed" aria-hidden="true"></i><br>
							<small>Hotel Bookings</small>
							<p>{{$hotelBookCount}}</p>
						</div>
						<div class="detail-section">
							<a href="{{route('adminHotel.hotelBookings')}}">More Info </a>
						</div>
					</div>
					<div class="dashbord dashbord-red">
						<div class="icon-section">
							<i class="fa fa-car" aria-hidden="true"></i><br>
							<small>Car Bookings</small>
							<p>{{$carBookCount}}</p>
						</div>
						<div class="detail-section">
							<a href="{{route('adminTransport.carBookingList')}}">More Info </a>
						</div>
					</div>
					<div class="dashbord dashbord-skyblue">
						<div class="icon-section">
							<i class="fa fa-plane" aria-hidden="true"></i><br>
							<small>Flight Bookings</small>
							<p>{{$flightBookCount}}</p>
						</div>
						<div class="detail-section">
							<a href="{{route('adminTransport.flightBookingList')}}">More Info </a>
						</div>
					</div>
					<div class="dashbord dashbord-new">
						<div class="icon-section">
							<i class="fa fa-gift" aria-hidden="true"></i><br>
							<small>Packages</small>
							<p>{{$packageCount}}</p>
						</div>
						<div class="detail-section">
							<a href="{{route('AdminPackage.packageList')}}">More Info </a>
						</div>
					</div>
				</div>
				<!--main-section end-->
				
			</div>
			<!--main container end-->
		</div>
		<!--wrapper end-->
	</body>
</html>
