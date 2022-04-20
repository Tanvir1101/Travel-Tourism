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

				<h1 style="color: #2e4154;"> <center> <b> Manage Facility </b> </center> </h1>
				<br>
   
   				<table id="table" border="1">
					<tr>
						<th> S.No </th>
						<th> Facility Title </th>
						<th> Description </th>
						<th> Image </th>
						<th> Creation Date </th>
						<th> Action </th>

					</tr>
					
				@foreach($facilities as $facility)
					<tr>
						<td> {{$facility->id}}  </td>
						<td> {{$facility->title}} </td>
						<td> {{$facility->description}} </td>
						<td> <img src="{{asset('upload')}}/{{$facility->image}}"  height="180" width="230"> </td>
						<td> {{$facility->created}} </td>
						<td> <a href="{{route('hotel.facilityedit', [$facility->id])}}"><i class="fa fa-pencil-square-o"></i></a>
						<a href="{{route('hotel.facilitydelete', [$facility->id])}}"><i class="fa fa-trash"></i><span></span></a> </td>
					</tr>
				@endforeach
				</table>	

			<!--main-section end-->
			<!--main container end-->
		</div>
		<!--wrapper end-->
	</body>
</html>
