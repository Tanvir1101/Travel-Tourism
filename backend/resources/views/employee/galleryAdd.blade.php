<!DOCTYPE html>
<html>
  <head>
  <meta charset="utf-8">
  <head>
		<meta charset="utf-8">
		<title>Add in Gallery</title>
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
                         <h1>Add in Gallery</h1>
                        </center>
                        <form name="jsForm" method = "POST" enctype="multipart/form-data">
							<fieldset>
								<legend></legend>
								<br>

                            <label for="place">Place</label><br>
                            <input type="text" id="place" name="place" value="">

                            <label for="image">Image</label><br>
                            <input type="file" id="image" name="image" value="">

                            </fieldset>
							<br>

                            <input type="submit" value="Upload" id="submit" >


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