<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Login</title>
        <link rel="stylesheet" href="{{asset('css/adminstyle.css')}}">
        <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,200,400,500,600" rel="stylesheet" type="text/css">
    </head>

    <body >

        <div class="login-wrapper">

            <div class="login-form">

                <h1 style="font-size: 40px;">Login</h1>
                <br>

                <form name="jsForm" action="" method="POST">

                    <i class="fa fa-user icon"></i>
                    <input type="text" name="uname" id="uname" value="{{old('uname')}}" placeholder = "Username">
                    <br>
                    <p> </p>
                    <br>

                    <br>

                    <i class="fa fa-unlock-alt icon"></i>
                    <input type="password" name="password" id="password" value="{{old('password')}}" placeholder = "Password">
                    <br>
                    <p> </p>
                    <br>
                    <br>
                  
                    <input type="submit" value="Login" id="submit">
                    <br>
                    <p>.</p>

                    <a href="{{route('registration.register')}}" title="" class="anchor">Not yet registered?</a>
                    <a id="googleBtn" href="login/google" class="btn btn-danger">Sign in with Google</a>

                </form>
                

                <div class = "err">
                    <br>
                    {{session('msg')}}
                    <br>
                    @foreach ($errors->all() as $err)
                        {{$err}}
                        <br>
                    @endforeach
                </div>
                
            </div>
        </div>

        <style>
            body{
              background-image: url("{{asset('img/login-bg.jpg')}}");
              background-repeat: no-repeat;
              background-size: 100%;
            }
            .err{
                color: yellow;
            }
        </style>    

    </body>
</html>