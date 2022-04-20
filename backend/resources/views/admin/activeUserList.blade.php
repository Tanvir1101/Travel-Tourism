<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title>Active User List</title>
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
					<h1>Active Users</h1>
				</center>
				
				
				<table id = "table">
                    <tr>
                      <th>ID</th>
                      <th>Username</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Gender</th>
                      <th>Email</th>
                      <th>Status</th>
                    </tr>

					@foreach ($activeUserList as $user)
						<tr>
							<td>{{$user->id}}</td>
							<td>{{$user->username}}</td>
							<td>{{$user->firstname}}</td>
							<td>{{$user->lastname}}</td>
							<td>{{$user->gender}}</td>
							<td>{{$user->email}}</td>
							<td>{{$user->status}}</td>
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

			.wrapper .main-container #table {
		        font-family: Arial, Helvetica, sans-serif;
		        border-collapse: collapse;
		        width: 70%;
		        margin: auto;
		        color: #34495e;
		        border-radius: 0px;
		        text-align: center;
		        font-weight: bold;
		        box-shadow: 0px 0px 30px black;
		        margin-top: 5vh;
		      }

		      .wrapper .main-container #table td, #table th {
		        padding: 10px;
		      }

		      .wrapper .main-container #table tr:nth-child(even){
		      	background-color: #f2f2f2;
		      }
		      .wrapper .main-container #table tr:nth-child(odd){
		      	background-color: #cdcfd0;
		      }

		      .wrapper .main-container #table tr:hover {
		      	background-color: #ddd;
		      }

		      .wrapper .main-container #table th {
		        padding-top: 12px;
		        padding-bottom: 12px;
		        text-align: center;	
		        background-color: #2e4154;
		        color: white;
		      }

			.wrapper .main-container #table tr td a{
				color: #34495e;
				cursor: pointer;
				transition: 0.3s;
				transition-property: color;
			}

			.wrapper .main-container #table tr td a:hover{
				color: red;
			}


		</style>

	</body>
</html>
