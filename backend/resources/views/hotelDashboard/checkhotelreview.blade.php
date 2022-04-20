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
				
				<center>
					<h1 style="color: #2e4154;"> <center> <b> Review </b> </center> </h2>
				</center>
				<br>
				
				
				<table id = "table">
                      <th> Id </th>
					  <th>Service Id</th>
                      <th>Service Type</th>
                      <th>Company</th>
                      <th>User Id</th>
					  <th>Rating</th>
                      <th>Message</th>
                    </tr>

				@foreach($reviews as $review)
                    <tr>
                    	<td>{{$review->id}}</td>
                    	<td>{{$review->service_id}}</td>
						<td>{{$review->service_type}}</td>
                    	<td>{{$review->company}}</td>
						<td>{{$review->user_id}}</td>
						<td>{{$review->rating}}</td>
						<td>{{$review->msg}}</td>
                    </tr>
				@endforeach

                </table>

			<!--main-section end-->
			<!--main container end-->
		</div>
		<!--wrapper end-->
	</body>
</html>
