<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Account</title>

    <!-- Font Icon -->
    <link rel="stylesheet" href="fonts/material-icon/css/material-design-iconic-font.min.css">

    <!-- Main css -->
    <link rel="stylesheet" href="{{asset('css/regstyle.css')}}">
</head>
<body>
            <div class="back">
            <li><a href="{{route('user.home')}}">Back</a></li>
            </div>

    <div class="main">
        <div class="container">
            <div class="signup-content">
                <div class="signup-img">
                    <img src="{{asset('img/view.jpg')}}" alt="">
                </div>
                <div class="signup-form">
                    <form method="POST" class="register-form" id="register-form">
                    @csrf
                        <h2>Profile</h2>
                        
                            <div class="form-group">
                                <label for="name"> First Name :</label>
                                <input type="text" name="firstname" id="firstname" value= "{{$profile->firstname}}">
                            </div>

                            <div class="form-group">
                                <label for="name"> Last Name :</label>
                                <input type="text" name="lastname" id="lastname" value="{{$profile->lastname}}">
                            </div>

                        
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="gender"> Gender :</label>
                                        
                                        <input type="text" name="gender" id="gender" value="{{$profile->gender}}">
                                       
                                </div>
                            </div>
                            
                       
                            <div class="form-group">
                                <label for="email"> Email :</label>
                                <input type="email" name="email" id="email" value="{{$profile->email}}">
                            </div>

                            <div class="form-group">
                                <label for="phone"> Phone :</label>
                                <input type="text" name="phone" id="phone" value="{{$profile->phone}}">
                            </div>

                            <div class="form-group">
                                <label for="username"> Username :</label>
                                <input type="text" name="username" id="username" value="{{$profile->username}}">
                            </div>

                            <div class="form-group">
                                <label for="password"> Password :</label>
                                <input type="text" minlength='4' id="password" name="password" value="{{$profile->password}}">
                            </div>

                            <div class="form-group">
                                <label for="conPassword"> Confirm Password :</label>
                                <input type="text" minlength='4' id="conPassword" name="conPassword" value="{{$profile->password}}">
                            </div>

                            <div class="form-submit">
                                <input type="submit" value="Update" class="submit" name="submit" id="submit" />
                                <input type="submit" value="Delete" class="submit" name="submit" id="submit" />
                            </div>

                        {{session('userUDMsg')}}

                    </form>
                </div>
            </div>
        </div>

    </div>
<style>
    body{
              background-image: url({{asset('img/bg.jpg')}});
              background-repeat: no-repeat;
              background-size: 100%;
            }
                </style>
</body>
</html>