<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title>Hotel Bookings</title>
		<link rel="stylesheet" href="{{asset('css/adminstyle.css')}}">
		<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css">
	    <link href="https://fonts.googleapis.com/css?family=Raleway:100,200,400,500,600" rel="stylesheet" type="text/css">
	</head>
	<body>

		<!--wrapper start-->
		<div class="wrapper">
		@include ('admin.sidebar')
			
			<!--main container start-->
			<div class="main-container">
				<!--main-section start-->

				<h1>Hotel Bookings</h1>
				<br>

				<form action="/action_page.php">

				</form>
   
				<table id="table" border="1">
                   <tr>
                        <th> Id </th>
                        <th> User Id</th>
                        <th> Room Id </th>
                        <th> Arrival Date </th>
                        <th> Departure Date </th>
                        <th> Status </th>
                        <th> Action </th>
                    </tr>

                @foreach($roomBooks as $roombook)
                    <tr>
                        <td> {{$roombook->id}} </td>
                        <td> {{$roombook->user_id}}  </td>
                        <td> {{$roombook->room_id}} </td>
                        <td> {{$roombook->fromdate}} </td>
                        <td> {{$roombook->todate}}  </td>
                        <td> {{$roombook->req}}  </td>
                        <td> <a href="{{route('adminHotel.roomBookDetail', [$roombook->id])}}"><i class="fa fa-info-circle" aria-hidden="true"></i></i></a> </td>
                        
                @endforeach
                </table>

				</table>	

			<!--main-section end-->
			<!--main container end-->
		</div>
		<!--wrapper end-->

		<style>
			body{
				color: white;
				background-color:rgb(114, 155, 172);
			}

		</style>
	</body>
</html>
