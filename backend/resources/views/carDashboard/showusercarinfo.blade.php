<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title>Customer-Car Booking Information</title>
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

				<h1 style="color: #2e4154;"> <center> <b> User-Car Booking Information </b> </center> </h1>
				<br>

   		        <table id="table" border="1">
                    <tr>
						<th> User Information </th>
						<th> Car  Information</th>
					</tr>

                        <tr>
						<td>
							ID : {{$user->id}} <br> <br>
						    Name: {{$user->firstname}} {{$user->lastname}} <br> <br>
							Username : {{$user->username}} <br> <br>
							Gender : {{$user->gender}} <br> <br>
						    Email : {{$user->email}} <br> <br>
							Phone Number : {{$user->phone}} <br> <br>
						 </td>

						<td>
						    ID : {{$car->id}} <br> <br>
						    Title : {{$car->title}} <br> <br>
						    Model : {{$car->model}}<br> <br>
							Driver : {{$car->driver}}<br> <br>
						    Type : {{$car->type}}<br> <br>
						    Fare : {{$car->fare}}<br> <br>
						  </td>

					</tr>
				</table>

			<!--main-section end-->
			<!--main container end-->
		</div>
		<!--wrapper end-->
	</body>
</html>
