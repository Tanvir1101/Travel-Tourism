<!DOCTYPE html>
<html>
  <head>
  <meta charset="utf-8">
  <head>
		<meta charset="utf-8">
		<title>Add in Transaction History</title>
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
                      @csrf   <center>
                         <h1>Add in Transaction History</h1>
                        </center>
                        <form name="jsForm" method="POST">
							<fieldset>
								<legend></legend>
								<br>

                            <label for="receiver_id">Receiver ID</label><br>
                            <input type="number" id="receiver_id" name="receiver_id" value="">

                            <label for="receiver">Receiver</label><br>
                            <input type="text" id="receiver" name="receiver" value="">

                            <label for="username">User Name</label><br>
                            <input type="text" id="username" name="username" value="">
                            
                            
                            <label for="description">Desription</label><br>
                            <input type="description" id="description" name="description" value="">

                            <label for="amount">Amount</label><br>
                            <input type="number" id="amount" name="amount" value="">

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