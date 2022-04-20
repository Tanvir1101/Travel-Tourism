<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title>Add New Packages</title>
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
				    		<h2>Add New Packages</h2>
				    	
			
						<br>

						<form name="jsForm" method = "POST" enctype="multipart/form-data">
							<fieldset>
								<legend></legend>
								
							<label for="place">Place</label><br>
                            <input type="text" id="place" name="place" value=""><br>

                            <label for="location">Location</label><br>
                            <input type="text" id="location" name="location" value=""><br>

                            <label for="image">Image</label><br>
                            <input type="file" id="image" name="image" value=""><br>

                            <label for="description">Description</label><br>
                            <textarea name="description" id="description"  rows="5" cols="50" value=""></textarea><br>

                            <label for="duration">Duration</label><br>
                            <input type="text" id="duration" name="duration" value=""><br>

                            <label for="transport">Include Transport?</label>
                            <select name="transport" id="transport">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>                      
                            </select><br><br>

                            <label for="hotel">Include Hotel?</label><br>
                            <select name="hotel" id="hotel">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>                      
                            </select><br><br>                           

                            <label for="cost">Cost</label><br>
                            <input type="number" id="cost" name="cost" value=""><br>


							</fieldset>
							<br>

							<input type="submit" value="Submit for Approval" id="submit" >

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