<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title>Profile</title>
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

				    <div class="form">
						<h1>My Account</h1>
						<br>

						<form name="jsForm" method="POST">
						@csrf
							<fieldset>
								<legend>Basic Information: </legend>
								<br>

								<label for="name">Company Name :</label>
								<input type="text" name="name" id="name" value= "{{$profile->name}}">
								<br>

								<label for="phone">Company Phone:</label>
								<input type="text" name="phone" id="phone" value="{{$profile->phone}}">
								<br>

								<label for="email">Company Email :</label>
								<input type="email" name="email" id="email" value="{{$profile->email}}">
								<br>

								<label for="type">Company Type :</label>
								<input type="text" name="type" id="type" value="{{$profile->type}}">
								<br>

								<label for="password">Password:</label>
								<input type="password"  name="password" id="password" value="{{$profile->password}}">
								<br>

								<label for="conPassword">Re-type Password:</label>
								<input type="password"  name="conPassword" id="conPassword" value="{{$profile->password}}">
								<br>

							</fieldset>
							<br>

							<input type="submit" name="submit" value="Update" id="updateBtn">
      						<input type="submit" name="submit" value="Delete" id="deleteBtn">

							  {{session('transportUDMsg')}}
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
				
			}

			h1{
				text-align: center;
			}

			.wrapper .main-container .form {
			  width:450px;
			  margin:  auto;
			  padding:30px;
			  border-radius: 30px;
			  box-shadow: 0px 0px 50px black;
			  background-color: white; 
			  color: #34495e;
			  margin-top: 5vh;
			}

			.wrapper .main-container .form  label {
			  display:block;
			  font-weight: bold;
			}

			.wrapper .main-container .form  input {
			  display:block;
			  width: 100%;
			  border: 1px solid #000;
			  padding:5px;
			  box-sizing: border-box;
			}

			.wrapper .main-container .form  textarea {
			  display:block;
			  width: 100%;
			  border: 1px solid #000;
			  padding:5px;
			  box-sizing: border-box;
			  margin-bottom: 10px;
			}

			.wrapper .main-container #submit{
			  display: inline-block; 
			  padding: 15px 80px;
			  margin-top: 10px;
			  background-color: #eb7d4b;
			  color: #FFF;
			  text-transform: uppercase; 
			  font-weight: 900;
			  border-bottom: 5px solid #c86a40;
			  border-radius: 5px;
			  cursor: pointer;
			}
			.wrapper .main-container legend{
			  text-align: center;
			  font-weight: bold;
			}

			.wrapper .main-container fieldset{
			  padding: 10px;
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
