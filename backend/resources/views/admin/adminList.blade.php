<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title>Admin List</title>
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
					<h1>Admins</h1>
				</center>
				
				<table id = "table">
                    <tr>
                      <th>ID</th>
                      <th>Username</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Gender</th>
                      <th>Image</th>
                      <th>Email</th>
                      <th>Action</th>
                    </tr>

					@foreach ($adminList as $admin)
						<tr>
						
							<td>{{$admin->id}}</td>
							<td>{{$admin->username}}</td>
							<td>{{$admin->firstname}}</td>
							<td>{{$admin->lastname}}</td>
							<td>{{$admin->gender}}</td>
							<td><img src="{{asset('upload')}}/{{$admin->image}}" height="50px" width="50px"/></td>
							<td>{{$admin->email}}</td>
							<td><a href="{{route('admin.adminDelete', [$admin->id])}}"><i class="fa fa-trash" aria-hidden="true"></i></a></td>
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
