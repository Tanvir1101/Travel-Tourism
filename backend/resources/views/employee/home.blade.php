<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title>Employee Dashboard</title>
		<link rel="stylesheet" href="{{asset('css/empStyle.css')}}">
		<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css">
	    <link rel="stylesheet" href="{{asset('css/empCard.css')}}">
	    <link href="https://fonts.googleapis.com/css?family=Raleway:100,200,400,500,600" rel="stylesheet" type="text/css">
	</head>
	<body>

		<!--wrapper start-->
		<div class="wrapper">
		@include ('employee.sidebar')

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
							<a href="{{route('employee.userList')}}">More Info </a>
						</div>
					</div>

					<div class="dashbord dashbord-green">
						<div class="icon-section">
							<i class="fa fa-gift" aria-hidden="true"></i><br>
							<small>Package</small>
							<p>{{$packageCount}}</p>
						</div>
						<div class="detail-section">
							<a href="{{route('employeePackage.package')}}">More Info </a>
						</div>
					</div>

					<div class="dashbord dashbord-orange">
						<div class="icon-section">
							<i class="fa fa-globe" aria-hidden="true"></i><br>
							<small>Places</small>
							<p>{{$placeCount}}</p>
						</div>
						<div class="detail-section">
							<a href="{{route('employeePlace.place')}}">More Info </a>
						</div>
					</div>


					<div class="dashbord dashbord-blue">
						<div class="icon-section">
							<i class="fas fa-hotel" aria-hidden="true"></i><br>
							<small>Hotels</small>
							<p>{{$hotelCount}}</p>
						</div>
						<div class="detail-section">
							<a href="{{route('employee.hotel')}}">More Info </a>
						</div>
					</div>


					<div class="dashbord dashbord-red">
						<div class="icon-section">
							<i class="fas fa-car" aria-hidden="true"></i><br>
							<small>Transport</small>
							<p>{{$transportCount}}</p>
						</div>
						<div class="detail-section">
							<a href="{{route('employee.transport')}}">More Info </a>
						</div>
					</div>
					
					
					<div class="dashbord dashbord-skyblue">
						<div class="icon-section">
							<i class="fa fa-comments" aria-hidden="true"></i><br>
							<small>Supports</small>
							<p>{{$supportCount}}</p>
						</div>
						<div class="detail-section">
							<a href="{{route('employee.supportList')}}">More Info </a>
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
