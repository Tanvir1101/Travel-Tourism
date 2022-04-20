<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title>Profile</title>
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
					
						<h1>My Account</h1>
						<br>

						<form name="jsForm" method="POST">
						@csrf
							<fieldset>
								<legend>Basic Information: </legend>
								<br>

								<label for="firstname">FirstName:</label>
								<input type="text" name="firstname" id="firstname" value= "{{$profile->firstname}}">
								<br>


								<label for="lastname">LastName:</label>
								<input type="text" name="lastname" id="lastname" value="{{$profile->lastname}}">
								<br>


								<label for="gender">Choose Gender:</label>

								<input type="radio" name="gender" id="gender" value="male" style="display: inline-block; width: 15%;"
								{{ $profile->gender == 'male' ? 'checked' : '' }} >Male

								<input type="radio" name="gender" id="gender" value="female"  style="display: inline-block; width: 15%;"
								{{ $profile->gender == 'female' ? 'checked' : '' }} >Female

								<input type="radio" name="gender" id="gender" value="other"  style="display: inline-block; width: 15%;"
								{{ $profile->gender == 'other' ? 'checked' : '' }} >Other

								<br>
								<br>


								<label for="email">Email:</label>
								<input type="email" name="email" id="email" value="{{$profile->email}}">
								<br>


							</fieldset>
							<br>

							<fieldset>

								<legend>Account Information: </legend>
								<br>

								<label for="username">Username:</label>
								<input type="text" name="username" id="username" value="{{$profile->username}}">
								<br>

								<label for="password">Password:</label>
								<input type="password" name="password" id="password" value="{{$profile->password}}">
								<br>

								<label for="conPassword">Re-type Password:</label>
								<input type="password" name="conPassword" id="conPassword" value="{{$profile->password}}">
								<br>


							</fieldset>
							<br>

							<input type="submit" name="submit" value="Update" id="updateBtn">
      						<input type="submit" name="submit" value="Delete" id="deleteBtn">

							{{session('adminUDMsg')}}
							<br>
							{{session('adminAddMsg')}}
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

			#updateBtn{
				display: inline; 
				padding: 10px 35px;
				width: 49% ;
				background-color: #eb7d4b;
				color: #FFF;
				text-transform: uppercase; 
				font-weight: 900;
				border-bottom: 5px solid #c86a40;
				border-radius: 5px;
				cursor: pointer;
			}

			#deleteBtn{
				display: inline; 
				padding: 10px 35px;
				float: right;
				width: 49% ;
				background-color: #BB2A2A;
				color: #FFF;
				text-transform: uppercase; 
				font-weight: 900;
				border-bottom: 5px solid #c86a40;
				border-radius: 5px;
				cursor: pointer;
			}

		</style>

	</body>
</html>
