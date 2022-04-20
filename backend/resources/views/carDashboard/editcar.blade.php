<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title>Edit Car</title>
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
				<div class="card-section"></div>
				<br>
				<br>
				
				<br>
				<div id="registration-form">
				<div class='fieldset'>
				
				<legend>Edit Car</legend>
					<form method="POST" enctype="multipart/form-data" >
					@csrf

					<label for="title">Car Title </label><br>
					 <input type="text" id="title" name="title" value="{{$car->title}}"> <br><br>

					 <label for="model">Car Model</label><br>
					 <input type="text" id="model" name="model" value="{{$car->model}}" ><br><br>

					 <label for="driver">Driver Name </label><br>
					 <input type="text" id="driver" name="driver" value="{{$car->driver}}" ><br><br>

					 <input type="submit" value="Update">

				</form> 
				@foreach ($errors->all() as $err)
                    {{$err}}
                    <br>
                @endforeach
				</div>
			</div>
			<!--main-section end-->
			<!--main container end-->
		</div>
		<!--wrapper end-->

	</body>
</html>
