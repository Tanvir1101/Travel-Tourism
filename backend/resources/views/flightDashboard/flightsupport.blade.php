<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title>Support</title>
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
					<legend>Support</legend>
					<form method="POST">
					@csrf
					 <label for="username">Company Name</label><br>
					 <input type="text" id="username" name="username"><br><br>

                     <label for="phone">Phone Number</label><br>
					 <input type="text" id="phone" name="phone"><br><br>

					 <label for="email">Email</label><br>
					 <input type="text" id="email" name="email"><br><br>

 					 <label for="message">Message</label>
				     <textarea name="message" id="message"  rows="7" cols="15" ></textarea>

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
