<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title>Employee Delete</title>
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

				<center>
					<h1>Employee delete</h1>
				</center>

				<form method="post">
		            @csrf
				
                    <table id = "table" border="1">

                        <tr>
                            <td>Id</td>
                            <td>{{$employee->id}}</td>
                        </tr>
                        <tr>
                            <td>Username</td>
                            <td>{{$employee->username}}</td>
                        </tr>
                        <tr>
                            <td>First Name</td>
                            <td>{{$employee->firstname}}</td>
                        </tr>
                        <tr>
                            <td>Last Name</td>
                            <td>{{$employee->lastname}}</td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>{{$employee->gender}}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{{$employee->email}}</td>
                        </tr>

                        <tr>
                            <td>Status</td>
                            <td>{{$employee->status}}</td>
                        </tr>

                    </table>
                    <br>

                    <center>
                        <h3> Are you sure?</h3>
                        <input type="submit" name="submit" value="Confirm">
                    </center>

                </form>
				
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
