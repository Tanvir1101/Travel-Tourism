<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title>Add Employee</title>
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

				    <div class="form">
					@csrf
						<h1>Add Employee</h1>
						<br>

						<form name="jsForm" method = "POST">
							<fieldset>
								<legend>Basic Information: </legend>
								<br>

								<label for="firstname">FirstName:</label>
								<input type="text" name="firstname" id="firstname" value="{{old('firstname')}}">
								<br>


								<label for="lastname">LastName:</label>
								<input type="text" name="lastname" id="lastname" value="{{old('lastname')}}">
								<br>

								<label for="gender">Choose Gender:</label>

								<input type="radio" name="gender" id="gender" style="display: inline-block; width: 15%;"
								<?php if (isset($gender) && $gender=="male") echo "checked";?> value="male">Male 

								<input type="radio" name="gender" id="gender" style="display: inline-block; width: 15%;"
								<?php if (isset($gender) && $gender=="female") echo "checked";?> value="female">Female 

								<input type="radio" name="gender" id="gender" style="display: inline-block; width: 15%;"
								<?php if (isset($gender) && $gender=="other") echo "checked";?> value="other">Other
								<br>
								<br>


								<label for="email">Email:</label>
								<input type="email" name="email" id="email" placeholder="...@gmail.com" value="{{old('email')}}">
								<br>


							</fieldset>
							<br>

							<fieldset>

								<legend>Account Information: </legend>
								<br>

								<label for="username">Username:</label>
								<input type="text" name="username" id="username" value="{{old('username')}}">
								<br>

								<label for="password">Password:</label>
								<input type="password" name="password" id="password">
								<br>

								<label for="conPassword">Re-type Password:</label>
								<input type="password" name="conPassword" id="conPassword">
								<br>


							</fieldset>
							<br>

							<input type="submit" value="Submit" id="submit" >
							<br>
							{{session('empAddMsg')}}
							<br>
							@foreach ($errors->all() as $err)
								{{$err}}
								<br>
							@endforeach

						</form>
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
