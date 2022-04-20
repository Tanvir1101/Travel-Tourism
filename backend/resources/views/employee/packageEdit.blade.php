<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title>Edit Package</title>
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
				    		<h2>Edit Package</h2>
				    	</center>
						
						<br>
						
						<form name="jsForm" method="POST" enctype="multipart/form-data">
							<fieldset>
								<legend></legend>
								
							<label for="place">Place</label><br>
                            <input type="text" id="place" name="place" value="{{$packages->place}}"><br>

                            <label for="location">Location</label><br>
                            <input type="text" id="location" name="location" value="{{$packages->location}}"><br>

                            <label for="image">Image</label><br>
                            <input type="file" id="image" name="image" value="{{$packages->image}}"><br>

                            <label for="description">Description</label><br>
                            <input type="text" name="description" id="description"  rows="5" cols="50" value="{{$packages->description}}"><br>

                            <label for="duration">Duration</label><br>
                            <input type="text" id="duration" name="duration" value="{{$packages->duration}}"><br>

                            <label for="transport">Include Transport?</label>

								<input type="radio" name="transport" id="transport" value="Yes" style="display: inline-block; width: 15%;"
								{{ $packages->transport == 'Yes' ? 'checked' : '' }} >Yes

								<input type="radio" name="transport" id="transport" value="No"  style="display: inline-block; width: 15%;"
								{{ $packages->transport == 'No' ? 'checked' : '' }} >No
							<br><br>
							

                            <label for="hotel">Include Hotel?</label>

								<input type="radio" name="hotel" id="hotel" value="Yes" style="display: inline-block; width: 15%;"
								{{ $packages->hotel == 'Yes' ? 'checked' : '' }} >Yes

								<input type="radio" name="hotel" id="hotel" value="No"  style="display: inline-block; width: 15%;"
								{{ $packages->hotel == 'No' ? 'checked' : '' }} >No
								<br><br>                         

                            <label for="cost">Cost</label><br>
                            <input type="number" id="cost" name="cost" value="{{$packages->cost}}"><br>

							<label for="status">Status</label>

								<input type="radio" name="status" id="status" value="Upcoming" style="display: inline-block; width: 15%;"
								{{ $packages->status == 'Upcoming' ? 'checked' : '' }} >Upcoming

								<input type="radio" name="status" id="status" value="Completed"  style="display: inline-block; width: 15%;"
								{{ $packages->status == 'Completed' ? 'checked' : '' }} >Completed
								<br><br>
							</fieldset>
							<br>

							<input type="submit" value="update" id="submit" >

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