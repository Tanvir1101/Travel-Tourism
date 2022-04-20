<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title>User List</title>
		<link rel="stylesheet" href="{{asset('css/empstyle.css')}}">
		<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css">
	    <link href="https://fonts.googleapis.com/css?family=Raleway:100,200,400,500,600" rel="stylesheet" type="text/css">
	</head>
	<body>

		<!--wrapper start-->
		<div class="wrapper">
		@include ('employee.sidebar')

			<!--main container start-->
			<div class="main-container">

				<center>
					<h1>Users</h1>
				</center>
				
				
				<table id = "table">
                    <tr>
                      <th>ID</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Gender</th>
                      <th>Details</th>
                    </tr>
					
					@foreach($users as $users)
                    <tr>
                    	<td>{{$users->id}}</td>
                    	<td>{{$users->firstname}}</td>
                    	<td>{{$users->lastname}}</td>
                    	<td>{{$users->gender}}</td>
                        <td><a href="{{route('employee.userDetails', [$users->id])}}"><i class="fa fa-info" aria-hidden="true"></i></a></td>
					</tr>
                   @endforeach
                    
                </table>

				
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