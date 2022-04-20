<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title>Edit Policy</title>
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
					<h1>Edit Privacy Policy</h1>

					<form name="jsForm" method = 'POST'>
						<fieldset>

							<legend> </legend>
							<br>

							<label for="policyForm">Write Privacy Policies here:</label>
							<textarea name="policyForm" id="policyForm"  rows="30" cols="40" value="" >
								{{$policy->policy}}
							</textarea>
							<br>

						</fieldset>
						<br>
						<br>

						<input type="submit" value="Submit" id="submit" >

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

			h1{
				text-align: center;
			}

			.wrapper .main-container .form {
			  width:90%;
			  margin:  auto;
			  padding:30px;
			  border-radius: 30px;
			  box-shadow: 0px 0px 50px black;
			  background-color: #cdcfd0; 
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
			
		</style>

	</body>
</html>
