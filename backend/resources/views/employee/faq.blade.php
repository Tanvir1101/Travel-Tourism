<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title>FAQ</title>
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
				    		<h2>FAQ</h2>
				    	</center>
						
						<br>

						<form name="jsForm" method="POST" enctype="multipart/form-data">
							<fieldset>
								<legend></legend>
								<br>

                                <label for="que">Questions:</label>
								<input type="text" name="que" id="que" value="">
								<br>

								<label for="ans">Answers:</label>
								<input type="text" name="ans" id="ans" value="">
								<br>

							</fieldset>
							<br>

							<input type="submit" value="Upload" id="submit" >

						</form>
							@foreach ($errors->all() as $err)
                   			 {{$err}}
                    		<br>
               				 @endforeach
					</div> 

					<table id = "table">
                    <tr>
                      <th>Questions</th>
					  <th>Answers</th>
                      <th>Action</th>
                    </tr>

					@foreach($faqs as $faq)
                    <tr>
                    	<td>{{$faq->que}}</td>
						<td>{{$faq->ans}}</td>
                    	<td><a href="{{route('employee.faqDelete', [$faq->id])}}"><i class="fa fa-trash" aria-hidden="true"></i></a></td>
                    </tr>
					@endforeach
                    
                </table>
				<br><br>
				
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