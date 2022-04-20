import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';

import { GoogleLogin, GoogleLogout } from 'react-google-login';


import '../adminComponents/Admin.css';

const Login = ({callback, callbackGoogle}) => {

    //const { id: eid } = useParams();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [usernameErr, setUsernameErr] = useState("");
    const [passwordErr, setPasswordErr] = useState("");

    //const [user, setUser] = useState({id:'',name: '', dept: ''});

    const history = useHistory();

    // ALogin Calling function
    const loginCall = async (lData) => { 

        console.log(lData);

        const axios = require('axios').default;

        const type = await axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/project-login',
            //data: JSON.stringify(newUser)
            data:lData,
        });

        const check = type.data;       
        return check;

    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if(username != "" && password != "" ) 
        {

            const check = await loginCall({ username: username, password: password });
            // callback({ id: check.id});
            callback({id:check});

            console.log(check);
            console.log(check.type);


            if(check.type=='admin')
                history.push('/admin/home');
            else if(check.type=='emp')
                history.push('/employee');
            else if(check.type=='user')
                history.push('/user');
            else if(check.type=='car')
                history.push('/carDashboard/index');
            else if(check.type=='flight')
                history.push('/flightDashboard/index');
            else if(check.type=='hotel')
                history.push('/hotelDashboard/index');
        }

        else{
            
            if(username == "")
                setUsernameErr("Please Enter Your Username");
            else
                setUsernameErr("")

            if(password == "")
                setPasswordErr("Please Enter Your Password");
            else
                setPasswordErr("")
        }
       
    };


    const clientId = "472078400144-265drsrih4lt007dbusnq94fcou597oe.apps.googleusercontent.com";

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);

    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
        history.push('/admin/home');
        callbackGoogle(true)
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };


    
    return (

        <>
        <div className ="login-form">

            <h1>Login</h1>
            <br/>

            <form onSubmit={onSubmit}>

                <i class="fa fa-user icon"></i>
                <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder = "Username" />
                <br/>
                <p style={{color: "red"}}>{usernameErr}</p>
                <br/>
                <br/>

                <i class="fa fa-unlock-alt icon"></i>
                <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder = "Password" />
                <br/>
                <p style={{color: "red"}}>{passwordErr}</p>
                <br/>
                <br/>
                
                <input type="submit" value="Login" id="submit" />
                <br/>
                <p>.</p>

                <a href="/register" title="" class="anchor">Not yet registered?</a>


                <div className = "g-signin">
                    { showloginButton ?
                        <GoogleLogin
                            clientId={clientId}
                            buttonText="Sign In"
                            onSuccess={onLoginSuccess}
                            onFailure={onLoginFailure}
                            cookiePolicy={'single_host_origin'}
                            isSignedIn={true}
                        /> : null}

                    { showlogoutButton ?
                        <GoogleLogout
                            clientId={clientId}
                            buttonText="Sign Out"
                            onLogoutSuccess={onSignoutSuccess}
                        >
                        </GoogleLogout> : null
                    }
                </div>
                

            </form>
            
        </div>
        
        </>
        
    );

    
};

export default Login;