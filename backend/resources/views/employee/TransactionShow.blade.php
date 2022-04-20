<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title>Transaction History</title>
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

				<center>
					<h1>Transaction History</h1>
				</center>
				
				
				<table id = "table">
                    <tr>
                      <th>ID</th>
                      <th>Date</th>
					  <th>Receiver ID</th>
                      <th>Receiver</th>
                      <th>User</th>
                      <th>Desscription</th>
                      <th>Amount</th>
                    </tr>
					@foreach($transactions as $transaction)
                    <tr>
                    	<td>{{$transaction->id}}</td>
                    	<td>{{$transaction->date}}</td>
						<td>{{$transaction->receiver_id}}</td>
                    	<td>{{$transaction->receiver}}</td>
                    	<td>{{$transaction->username}}</td>
                        <td>{{$transaction->description}}</td>
                        <td>{{$transaction->amount}}</td>
                    </tr>

                   @endforeach
				 
                   
                </table>
				<br><br><br>
						<div>
							<center>
								<a href="{{route('employee.genTransaction')}}">
								<i class="fas fa-download" style="color:red"></i> <span style="color:red";>Transaction Download</span></a> 
							</center>	
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
