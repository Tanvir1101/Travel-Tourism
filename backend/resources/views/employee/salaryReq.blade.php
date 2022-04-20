<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title>Add Salary And Festival Bonus</title>
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
				    		<h2>Add Salary & Festival Bonus</h2>
				    	</center>
						
						<br>

						<form name="jsForm" method= "POST">
							<fieldset>
								<legend></legend>
								<br>

								<label for="employee_id">Employee ID:</label>
								<input type="text" name="employee_id" id="employeee_id" value="">
								<br>

								<label for="username">User Name:</label>
								<input type="text" name="username" id="username" value="">
								<br>

								<label for="salary">Salary:</label>
								<input type="number" name="salary" id="salary" value="">
								<br>

								<label for="bonus">Bonus Percentage:</label>
								<input type="number" name="bonus" id="bonus" value="">
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