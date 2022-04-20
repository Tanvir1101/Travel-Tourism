<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>User Registration</title>

    <!-- Font Icon -->
    <link rel="stylesheet" href="fonts/material-icon/css/material-design-iconic-font.min.css">

    <!-- Main css -->
    <link rel="stylesheet" href="{{asset('css/regstyle.css')}}">
</head>
<body>

    <div class="main">
        <div class="container">
            <div class="signup-content">
                <div class="signup-img">
                    <img src="{{asset('img/view.jpg')}}" alt="">
                </div>
                <div class="signup-form">
                    <form method="POST" class="register-form" id="register-form" enctype="multipart/form-data">
                    @csrf
                        <h2>User Registration form</h2>
                        
                            <div class="form-group">
                                <label for="firstname"> First Name :</label>
                                <input type="text" name="firstname" id="firstname" required/>
                            </div>

                            <div class="form-group">
                                <label for="lastname"> Last Name :</label>
                                <input type="text" name="lastname" id="lastname" required/>
                            </div>

                        <div class="form-row">
                        <div class="form-group">
                            <label for="gender">Choose Gender :</label>
                            <div class="form-select">
                                <select name="gender" id="gender">
                                    <option></option>
                                    <option value="Male">Male </option>
                                    <option value="Female">Female </option>
                                    <option value="Other">Other </option>
                                </select>
                                <span class="select-icon"><i class="zmdi zmdi-chevron-down"></i></span>
                            </div>
                        </div>
                       </div>
                        <div class="form-group">
                            <label for="email">Email :</label>
                            <input type="email" name="email" id="email" required/>
                        </div>

                        <div class="form-group">
                            <label for="phone">Phone :</label>
                            <input type="text" name="phone" id="phone" required/>
                        </div>

                        <div class="form-group">
                            <label for="username">Username :</label>
                            <input type="text" name="username" id="username" required/>
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

                    <div class='error'>
                        @foreach ($errors->all() as $err)
                         {{$err}}
                         <br>
                        @endforeach
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