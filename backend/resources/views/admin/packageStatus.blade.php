<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title>Package Status</title>
		<link rel="stylesheet" href="{{asset('css/car-style.css')}}">
		<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css">
	    <link rel="stylesheet" href="{{asset('css/car-card.css')}}">
	    <link href="https://fonts.googleapis.com/css?family=Raleway:100,200,400,500,600" rel="stylesheet" type="text/css">
	</head>
	<body>

		<!--wrapper start-->
		<div class="wrapper">
			@include ('admin.sidebar')
			
			<!--main container start-->
			<div class="main-container">
				<!--main-section start-->
				<div class="card-section"></div>
				<br>
				<br>
				
				<br>
				<div id="registration-form">
					<div class='fieldset'>
						<legend>Package Status</legend>
						<form action="#" method="post" data-validate="parsley">
						@csrf

							<label for="title">Select Status:</label>

								<select name="place" id="place">
								@foreach($packages as $package)
								<option value="{{$package->place}}">{{$package->place}}</option>
								@endforeach
								</select> <br><br>

								<label for="status">Status:</label>
								<select name="status" id="status">

									<option value="Upcoming">Upcoming</option>
									<option value="Completed">Completed</option>
									
								</select> <br><br>

							<input type="submit" value="Submit">
							<br>

						</form> 
					</div>
				</div>
			</div>
			<!--main-section end-->
			<!--main container end-->
		</div>
		<!--wrapper end-->
	</body>
</html>
