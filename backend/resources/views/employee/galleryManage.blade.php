<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title>Gallery</title>
		<link rel="stylesheet" href="{{asset('css/empStyle.css')}}">
		<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css">
	    <link rel="stylesheet" href="{{asset('css/empCard.css')}}">
	    <link href="https://fonts.googleapis.com/css?family=Raleway:100,200,400,500,600" rel="stylesheet" type="text/css">
	</head>
	<body>

		<!--wrapper start-->
		<div class="wrapper">
		@include ('employee.sidebar')

			<!--main container start-->
			<div class="main-container">

				<center>
					<h1>Gallery<h1>
				</center>
				
				
				<table id = "table">
                    <tr>
                      <th>Place</th>
                      <th>Image</th>
                      <th>Action</th>
                    </tr>
					@foreach ($galleries as $gallery)
                    <tr>
                    	<td>{{$gallery->place}}</td>
                    	<td><img src="{{asset('upload')}}/{{$gallery->image}}"  height="100px" width="250px"></td>
                    	<td><a href="{{route('employeeGallery.pictureDelete', [$gallery->id])}}"><i class="fa fa-trash" aria-hidden="true"></i></a></td>
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
