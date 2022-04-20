<!DOCTYPE html>
<html>
  <head>
  <meta charset="utf-8">
  <head>
		<meta charset="utf-8">
		<title>Add in Income Statement</title>
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
                         <h1>Add in Income Statement</h1>
                        </center>
                        <form name="jsForm" method = "POST">
							<fieldset>
								<legend></legend>
								<br>

                            <label for="month">Month</label><br>
                            <input type="month" id="month" name="month" value="">

                            <label for="revenue">Revenue</label><br>
                            <input type="number" id="revenue" name="revenue" value="">

                            <label for="cost">Cost</label><br>
                            <input type="number" id="cost" name="cost" value="">

                            </fieldset>
							<br>

                            <input type="submit" value="Submit" id="submit" >


				</form> 
                @foreach ($errors->all() as $err)
                    {{$err}}
                    <br>
                @endforeach

                     </div>


        </form><!-- /form -->
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