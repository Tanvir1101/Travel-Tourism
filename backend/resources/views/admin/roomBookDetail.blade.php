<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title>Room Booking Detail</title>
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
					<h1>Room Booking Detail</h1>
				</center>
				
				
				<table id="table" border="1">
                    <tr>
                        <th> User Information </th>
                        <th> Room  Information</th>
                    </tr>

                        <tr>
                        <td>Id : {{$user->id}} <br> <br>
                            Name: {{$user->firstname}} {{$user->lastname}} <br> <br>
                            Username : {{$user->username}} <br> <br>
                            Gender : {{$user->gender}} <br> <br>
                            Email : {{$user->email}} <br> <br>
                            Phone Number : {{$user->phone}} <br> <br>
                         </td>

                        <td>
                           Room Id : {{$room->id}} <br> <br>
                           Room Name : {{$room->name}} <br> <br>
                           Room Price : {{$room->price}}<br> <br>
                          </td>

                    </tr>
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
