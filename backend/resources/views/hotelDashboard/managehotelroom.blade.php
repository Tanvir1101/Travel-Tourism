<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title>Admin Dashboard</title>
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

				<h1 style="color: #2e4154;"> <center> <b> Manage Room </b> </center> </h1>
				<br>
   
   				<table id="table" border="1">
					<tr>
						<th> S.No </th>
						<th> Room Name </th>
						<th> Description </th>
						<th> Image </th>
						<th> Room Price </th>
						<th> Room Availability </th>
						<th> Creation Date </th>
						<th> Action </th>
					</tr>

					@foreach($room as $room)
					<tr>
						<td> {{$room->id}} </td>
						<td> {{$room->name}} </td>
						<td>{{$room->description}} </td>
						<td> <img src="{{asset('upload')}}/{{$room->image}}"  height="150" width="200"> </td>
						<td> {{$room->price}} </td>
						<td> {{$room->availability}} </td>
						<td> {{$room->created}} </td>
						<td> <a href="{{route('hotel.roomedit', [$room->id])}}"><i class="fa fa-pencil-square-o"></i></a>
						<a href="{{route('hotel.roomdelete', [$room->id])}}"><i class="fa fa-trash"></i><span></span></a> </td>
					</tr>
					@endforeach
				</table>	

			<!--main-section end-->
			<!--main container end-->
		</div>
		<!--wrapper end-->
	</body>
</html>
