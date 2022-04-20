<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title>Promotional Offer</title>
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
				    		<h2>Send Promotional Offer</h2>
				    	</center>
						
						<br>

						<form name="jsForm" method="POST"  enctype="multipart/form-data">
							<fieldset>
								<legend></legend>
								<br>
								

								<label for="image">Image:</label>
								<input type="file" name="image" id="image" value="">
								<br>

								<label for="message">Message:</label>
								<input type="text" name="message" id="message" value="">
								<br>

							


							</fieldset>
							<br>

							<input type="submit" value="Send" id="submit" >

						</form>
								@foreach ($errors->all() as $err)
								{{$err}}
								<br>
								@endforeach
					</div>

				
								<table id = "table">
								<tr>
								<th>Image</th>	
								<th>Message</th>
								<th>Action</th>
								</tr>

								@foreach($promos as $promos)
								<tr>
									
									<td><img src="{{asset('upload')}}/{{$promos->image}}"  height="100px" width="250px"></td>
									<td>{{$promos->message}}</td>
									<td><a href="{{route('employee.promoDelete', [$promos->id])}}"><i class="fa fa-trash" aria-hidden="true"></i></a></td>
								</tr>
								@endforeach

								
								</table>
					<br><br>
				
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