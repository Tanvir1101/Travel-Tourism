<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title>Delete Booking</title>
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

				<h1 style="color: #2e4154;"> <center> <b> Delete Booking </b> </center> </h1>
				<br>
              <form method="post">
              @csrf
   		   <table id="table" border="1">
                        <tr>
                                 <td>Id</td>
                                 <td>{{$carbook->id}}</td>
                        </tr>
                        <tr>
                                <td>User Id</td>
                                <td>{{$carbook->user_id}}</td>
                        </tr>
                        <tr>
                                 <td>Car Id</td>
                                 <td>{{$carbook->car_id}} </td>
                        </tr>
                        <tr>
                                  <td>Departure Location</td>
                                  <td>{{$carbook->fromloc}}</td>
                         </tr>

                         <tr>
                                <td>Arrival Location</td>
                                <td>{{$carbook->toloc}}</td>
                         </tr>

                         <tr>
                                <td>Departure Date</td>
                                <td>{{$carbook->fromdate}}</td>
                         </tr>

                         <tr>
                                <td>Arrival Date</td>
                                <td>{{$carbook->todate}}</td>
                         </tr>
                    
		  </table>
                    <center>
                        <h3> Are you sure to delete?</h3>
                        <input type="submit" name="submit" value="Confirm">
                    </center>	
                </form>

			<!--main-section end-->
			<!--main container end-->
		</div>
		<!--wrapper end-->
	</body>
</html>
