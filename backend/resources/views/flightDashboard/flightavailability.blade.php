<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title>AirPlane Availability</title>
		<link rel="stylesheet" href="{{asset('css/flight-style.css')}}">
		<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css">
	    <link rel="stylesheet" href="{{asset('flight/car-card.css')}}">
	    <link href="https://fonts.googleapis.com/css?family=Raleway:100,200,400,500,600" rel="stylesheet" type="text/css">
	</head>
	<body>

		<!--wrapper start-->
		<div class="wrapper">
			@include ('flightDashboard.sidebar')
			
			<!--main container start-->
			<div class="main-container">
				<!--main-section start-->
				<div class="card-section"></div>
				<br>
				<br>
				
				<br>
				<div id="registration-form">
					<div class='fieldset'>
						<legend>Airplane Availability</legend>
						<form action="#" method="post" data-validate="parsley">
						@csrf

					 <label for="airplane">Select Airplane:</label>

					 <select name="title" id="title">
						@foreach($air as $air)
						<option value="{{$air->title}}">{{$air->title}}</option>
						@endforeach
						</select> <br><br>

                        <label for="availability">Availability:</label>
						<select name="availability" id="availability">

							<option value="Available">Available</option>
							<option value="Not Available"> Not Available</option>
							
						</select> <br><br>

					 <input type="submit" value="Submit">
					 <br>

				</form> 
			</div>
        </div>

			<!--main-section end-->
			<!--main container end-->
		</div>
		<!--wrapper end-->
	</body>
</html>
