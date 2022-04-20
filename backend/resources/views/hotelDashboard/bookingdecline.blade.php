<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title>Decline Booking</title>
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

				<h1 style="color: #2e4154;"> <center> <b> Decline Booking </b> </center> </h1>
				<br>
              <form method="post">
              @csrf
   				<table id="table" border="1">
                   <tr>
                            <td>Id</td>
                            <td>{{$roombooks->id}}</td>
                    </tr>
                    <tr>
                            <td>User Id</td>
                            <td>{{$roombooks->user_id}}</td>
                    </tr>
                    <tr>
                            <td>Room Id</td>
                            <td>{{$roombooks->room_id}}</td>
                    </tr>
                    <tr>
                            <td>Arrival Date</td>
                            <td>{{$roombooks->fromdate}}</td>
                    </tr>

                    <tr>
                            <td>Departure Date</td>
                            <td>{{$roombooks->todate}}</td>
                    </tr>

                    
				</table>
                    <center>
                        <h3> Are you sure to decline?</h3>
                        <input type="submit" name="submit" value="Confirm">
                    </center>	
            </form>

			<!--main-section end-->
			<!--main container end-->
		</div>
		<!--wrapper end-->
	</body>
</html>
