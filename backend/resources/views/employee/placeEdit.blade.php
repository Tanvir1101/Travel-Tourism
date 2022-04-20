<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title>Edit Places</title>
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

				    <div class="form">
					@csrf
				    	<center>
				    		<h2>Edit Places</h2>
				    	</center>
						
						<br>

						<form name="jsForm" method="POST"  enctype="multipart/form-data">
							<fieldset>
								<legend></legend>
								
								<label for="place">Place:</label>
								<input type="text" name="place" id="place" value="{{$places->place}}">
								<br>

								<label for="district">District:</label>
								<input type="text" name="district" id="district" value="{{$places->district}}">
								<br>

                                <label for="image">Image:</label>
								<input type="file" name="image" id="image" value="{{$places->image}}">
								<br>


							</fieldset>
							<br>

							<input type="submit" value="Update" id="submit" >

						</form>

						@foreach ($errors->all() as $err)
                    	{{$err}}
                    	<br>
                		@endforeach
					</div>
				
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