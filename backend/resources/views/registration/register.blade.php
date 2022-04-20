<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- Font Icon -->
    <link rel="stylesheet" href="fonts/material-icon/css/material-design-iconic-font.min.css">

    <!-- Main css -->
    <link rel="stylesheet" href="{{asset('css/reg-style.css')}}">
</head>
<body>

    <div class="main">
        <div class="container">
            <div class="signup-content">
                <div class="signup-img">
                    <img src="{{ asset('img/mainregform.jpg')}}" alt="">
                </div>
                <div class="signup-form">
                    <form method="POST" class="register-form" id="register-form">
                    @csrf
                    <h1><center>Welcome To Registration Form </center></h1>
                        <div class="signup-form">
                            <div class="form-group">
                                <div class="form-select">
                                     <label for="servicep"><h4> Choose Option :</h2></label>
                                        <div class="type">
                                            <a href="{{route('userRegistration.register')}}"><i class="fas fa-user"></i><span>User Registration</span></a> <br>
                                        </div>
                                        <br>
                                        <div class="type">
                                             <a href="{{route('registration.hotelreg')}}"><i class="fas fa-bus"></i><span>Hotel Service</span></a><br>
                                        </div>
                                        <br>
                                        <div class="type">
                                            <a href="{{route('registration.transportreg')}}"><i class="fas fa-plane"></i><span>Transport Service</span></a><br>
                                        </div>
                                        <br>
                                </div>
                             </div>
                        </div>
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