<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title>All Car Companies</title>
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

				<h1>All Car Companies</h1>
				
				<table id = "table">
				<tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Phone</th>
					  <th>Email</th>
                      <th>Type</th>
                      <th>Action</th>
                    </tr>

					@foreach ($cars as $car)
                    <tr>
                    	<td>{{$car->id}}</td>
                    	<td>{{$car->name}}</td>
                        <td>{{$car->phone}}</td>
                        <td>{{$car->email}}</td>
						<td>{{$car->type}}</td>
                    	<td><a href="{{route('adminTransport.carDelete', [$car->id])}}"><i class="fa fa-trash" aria-hidden="true"></i></a></td>
                    </tr>
					@endforeach          
                    
                </table>

				
			</div>
			<!--main container end--
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
