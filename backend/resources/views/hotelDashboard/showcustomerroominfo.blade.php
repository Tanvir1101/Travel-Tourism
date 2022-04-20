<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title>Customer-Room Booking Information</title>
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

				<h1 style="color: #2e4154;"> <center> <b> Customer-Room Booking Information </b> </center> </h1>
				<br>

   		        <table id="table" border="1">
                    <tr>
						<th> User Information </th>
						<th> Room  Information</th>
					</tr>

                        <tr>
						<td>Id : {{$user->id}} <br> <br>
						    Name: {{$user->firstname}} {{$user->lastname}} <br> <br>
							Username : {{$user->username}} <br> <br>
							Gender : {{$user->gender}} <br> <br>
						    Email : {{$user->email}} <br> <br>
							Phone Number : {{$user->phone}} <br> <br>
						 </td>

						<td>
						   Room Id : {{$room->id}} <br> <br>
						   Room Name : {{$room->name}} <br> <br>
						   Room Price : {{$room->price}}<br> <br>
						  </td>

					</tr>
				</table>

			<!--main-section end-->
			<!--main container end-->
		</div>
		<!--wrapper end-->
	</body>
</html>
