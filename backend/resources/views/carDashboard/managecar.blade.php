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

				<h1 style="color: #2e4154;"> <center> <b> Manage Car </b> </center> </h1>
				<br>
   
   				<table id="table" border="1">
					<tr>
						<th> S.No </th>
						<th> Car Title </th>
						<th> Car Model </th>
						<th> Driver Name </th>
						<th> Per Day Fare </th>
						<th> Type of Car </th>
						<th> Availability </th>
						<th> Image </th>
						<th> Action </th>
					</tr>


				@foreach($car as $car)
					<tr>
						<td> {{$car->id}} </td>
						<td> {{$car->title}} </td>
						<td> {{$car->model}} </td>
						<td> {{$car->driver}} </td>
						<td> {{$car->type}} </td>
						<td> {{$car->fare}} </td>
						<td> {{$car->availability}} </td>
						<td> <img src="{{asset('upload')}}/{{$car->image}}"  height="170" width="230"> </td>
						<td> <a href="{{route('car.caredit', [$car->id])}}"><i class="fa fa-pencil-square-o"></i></a> 
						<a href="{{route('car.cardelete', [$car->id])}}"> <i class="fa fa-trash" ></i></td>
					</tr>
				@endforeach
				</table>	

			<!--main-section end-->
			<!--main container end-->
		</div>
		<!--wrapper end-->
	</body>
</html>
