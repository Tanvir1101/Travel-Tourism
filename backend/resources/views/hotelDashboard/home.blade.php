<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title>Admin Dashboard</title>
		<link rel="stylesheet" href="{{asset('css/hotel-style.css')}}">
		<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css">
	    <link rel="stylesheet" href="{{asset('css/hotel-card.css')}}">
	    <link href="https://fonts.googleapis.com/css?family=Raleway:100,200,400,500,600" rel="stylesheet" type="text/css">
	</head>
	<body>

		<!--wrapper start-->
		<div class="wrapper">
			@include ('hotelDashboard.sidebar')

			<!--main container start-->
			<div class="main-container">
				<!--main-section start-->
				<div class="card-section">
					<div class="dashbord">
						<div class="icon-section">
							<i class="fas fa-bed" aria-hidden="true"></i><br>
							<small>Total Rooms</small>
							<p>{{$roomCount}}</p>
						</div>
						<div class="detail-section">
							<a href="{{route('hotel.managehotelroom')}}">More Info </a>
						</div>
					</div>
					
					<div class="dashbord dashbord-blue">
						<div class="icon-section">
							<i class="fa fa-tasks" aria-hidden="true"></i><br>
							<small>Booked Rooms</small>
							<p>{{$roomBookCount}}</p>
						</div>
						<div class="detail-section">
							<a href="{{route('hotel.showhotelallboking')}}">More Info </a>
						</div>
					</div>
					<div class="dashbord dashbord-skyblue">
						<div class="icon-section">
							<i class="fa fa-comments" aria-hidden="true"></i><br>
							<small>Review</small>
							<p>{{$reviewCount}}</p>
						</div>
						<div class="detail-section">
							<a href="{{route('hotel.checkhotelreview')}}">More Info </a>
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
