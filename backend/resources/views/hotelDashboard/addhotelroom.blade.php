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
				<div class="card-section"></div>
				<br>
				<br>

				<br>
				<div id="registration-form">
				<br>
					<div class='fieldset' >
		
					<legend>New Room</legend>
					<form method="POST" enctype="multipart/form-data" >
					@csrf


					 <label for="name">Room Name</label><br>
					 <input type="text" id="name" name="name" ><br><br>

					 <label for="price">Room Price</label><br>
					 <input type="text" id="price" name="price" ><br><br>


					 <label for="description">Room Description</label>
				   <textarea name="description" id="description"  rows="7" cols="15" ></textarea>


					 <label for="image">Room Image</label><br>
					 <input type="file" id="image" name="image"><br><br>

					 <input type="submit" value="Add">
					 <br>

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
