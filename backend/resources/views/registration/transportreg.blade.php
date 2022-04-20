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
                    <img src="{{ asset('img/signup-transport.jpg')}}" alt="">
                </div>
                <div class="signup-form">
                    <form method="POST" class="register-form" id="register-form" enctype="multipart/form-data">
                    @csrf
                        
                        <h2>Transport Registration form</h2>
                        
                        <div class="form-row">
                        <div class="form-group">
                            <label for="type">Service Provider :</label>
                            <div class="form-select">
                                <select name="type" id="type">
                                    <option value=""></option>
                                    <option value="Car">Car</option>
                                    <option value="Flight">Flight </option>
                                </select>
                                <span class="select-icon"><i class="zmdi zmdi-chevron-down"></i></span>
                            </div>
                        </div>
                       </div>
                            <div class="form-group">
                                <label for="name"> Name :</label>
                                <input type="text" name="name" id="name" >
                            </div>
                        
                        <div class="form-group">
                            <label for="email">Email :</label>
                            <input type="email" name="email" id="email" >
                        </div>

                        <div class="form-group">
                            <label for="phone">Phone Number :</label>
                            <input type="text" name="phone" id="phone" >
                        </div>

                        <div class="form-group">
                            <label for="password">Password :</label>
                            <input type="password" name="password" id="password">
                        </div>

                        <div class="form-group">
                            <label for="rpassword">Re-type Password :</label>
                            <input type="password" name="rpassword" id="rpassword">
                        </div>

                        
                        <div class="form-submit">
                            <input type="submit" value="Submit" class="submit" name="submit" id="submit" />
                        </div>
                    </form>
                    @foreach ($errors->all() as $err)
                    {{$err}}
                    <br>
                    @endforeach
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