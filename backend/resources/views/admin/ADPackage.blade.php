<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title>Pending Packages</title>
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

				<center>
					<h1>Pending Packages<h1>
				</center>
				
				
				<table id = "table">
                    <tr>
                      <th>ID.</th>
                      <th>Place</th>
                      <th>Location</th>
                      <th>Image</th>
                      <th>Description</th>
                      <th>Duration</th>
                      <th>Transport</th>
                      <th>Hotel</th>
                      <th>Cost</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>

					@foreach ($ADPackageList as $package)
                    <tr>
                    	<td>{{$package->id}}</td>
                    	<td>{{$package->place}}</td>
                        <td>{{$package->location}}</td>  
                    	<td><img src="{{asset('upload')}}/{{$package->image}}" height="100" width="150"></td>
                    	<td>{{$package->description}}</td>
                    	<td>{{$package->duration}}</td>
                        <td>{{$package->transport}}</td>
                        <td>{{$package->hotel}}</td>
                        <td>{{$package->cost}}</td>
                        <td>{{$package->status}}</td>
                    	<td><a href="{{route('AdminPackage.packageApprove', [$package->id])}}"><i class="fa fa-check-circle" aria-hidden="true"></i></a> 
						<a href="{{route('AdminPackage.packageDecline', [$package->id])}}"><i class="fa fa-ban" aria-hidden="true"></i></a></td>
                    </tr>
					@endforeach 



                    
                </table>

				
			</div>
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
