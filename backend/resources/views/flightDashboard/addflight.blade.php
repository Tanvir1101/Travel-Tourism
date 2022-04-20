<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title>Add Airplane</title>
		<link rel="stylesheet" href="{{asset('css/flight-style.css')}}">
		<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css">
	    <link rel="stylesheet" href="{{asset('css/flight-card.css')}}">
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
						<legend>New Airplane</legend>
						
					<form method="POST" enctype="multipart/form-data" >
					@csrf

					 <label for="title">AirPlane Name </label><br>
					 <input type="text" id="title" name="title"><br><br>

					 <label for="model">Airplane Model</label><br>
					 <input type="text" id="model" name="model" ><br><br>

					 <label for="fare">Fare </label><br>
					 <input type="text" id="fare" name="fare"><br><br>

					 <label for="type">Type of a Airplane:</label>

						<select name="type" id="type">
  							<option value="airbus">Airbus</option>
  							<option value="jett"> Jett</option>
							<option value="piston"> Piston Aircraft</option> 
						</select> <br><br>
					

					 <label for="image">Airplane Image</label>
					 <input type="file" id="image" name="image"><br><br>

					 <input type="submit" value="Add">
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
