<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title>Admin Dashboard</title>
		<link rel="stylesheet" href="{{asset('css/car-style.css')}}">
		<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css">
	    <link rel="stylesheet" href="{{asset('css/car-card.css')}}">
	    <link href="https://fonts.googleapis.com/css?family=Raleway:100,200,400,500,600" rel="stylesheet" type="text/css">
	</head>
	<body>

		<!--wrapper start-->
		<div class="wrapper">
			@include ('carDashboard.sidebar')
			
			<!--main container start-->
			<div class="main-container">
				<!--main-section start-->
				<div class="card-section"></div>
				<br>
				<br>
				
				<br>
				<div id="registration-form">
					<div class='fieldset'>
						<legend>Car Type</legend>

						<form action="#" method="post" data-validate="parsley">
						@csrf
					
					

					 <label for="title">Select Car:</label>

						<select name="title" id="title">
						@foreach($cars as $car)
							<option value="{{$car->title}}">{{$car->title}}</option>
						@endforeach
						</select> <br>
						
						<br>

                        <label for="type">Select Type:</label>
						<select name="type" id="type">
							<option value="Luxury">Luxury</option>
							<option value="Standard"> Standard</option>
						</select> <br><br>

                     <label for="fare">Per Day Fare </label><br>
					 <input type="text" id="fare" name="fare"><br><br>
					

					 <input type="submit" value="Submit">
					 <br>

				</form> 
				@foreach ($errors->all() as $err)
                    {{$err}}
                    <br>
                @endforeach
			</div>
        </div>

			<!--main-section end-->
			<!--main container end-->
		</div>
		<!--wrapper end-->
	</body>
</html>
