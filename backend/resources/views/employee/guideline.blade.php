<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Guidelines</title>
	<link rel="stylesheet" href="{{asset('css/empstyle.css')}}">
	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,200,400,500,600" rel="stylesheet" type="text/css">
</head>
<body>

	<div class="wrapper">

	@include ('employee.sidebar')

		<div class="main-container">

			<ul>
				<li><a href="{{route('employeeGuidelines.form', [$guideline->id])}}"><i class="fa fa-pencil-square-o"></i></a></li>
			</ul>

			<br>
			<center>
			<img src="{{asset('img/about.jpg')}}" alt="">
			</center>
			<br>

			<div class="content">

			{!!$guideline->guideline!!}
				
				
			</div>

		</div>

	</div>

	<style>
		body{
			color: white;
			background-color:rgb(114, 155, 172);

		}
		
		h1{
        	text-align: center;
        }

        .main-container{
        	width: 80%;
        }

        .content{
        	width: 80%;
        	margin: auto;
        	text-align: justify;
        }

        .wrapper .main-container ul li a{
			background: #fff;
			color: #000;
			display: block;
			float: right;
			margin: 0 10px;
			font-size: 18px;
			width: 34px;
			height: 34px;
			line-height: 35px;
			text-align: center;
			border-radius: 50%;
			transition: 0.3s;
			transition-property: background, color;
		}


	</style>


</body>
</html>
