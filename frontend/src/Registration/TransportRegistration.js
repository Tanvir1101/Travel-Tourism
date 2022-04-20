import { useState } from "react";
import { useHistory } from 'react-router-dom';
import './css/reg-style.css';

const TransportRegistration = ({ callback }) => {
    
    const [type, setType] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rpassword, setRpassword] = useState("");

    const [typeErr, setTypeErr] = useState("");
    const [nameErr, setNameErr] = useState("");
    const [phoneErr, setPhoneErr] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [passwordErr, setPasswordErr] = useState("");
    const [rpasswordErr, setRpasswordErr] = useState("");


    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();

        if(type != "" && name != ""  && phone != "" && email != "" &&  password != "" && rpassword != "" && password==rpassword ) 
        { 

        setTypeErr("")
        setNameErr("")
        setPhoneErr("")
        setEmailErr("")
        setPasswordErr("")
        setRpasswordErr("")
       
        callback({type:type, name: name, phone:phone, email:email, password:password, rpassword:rpassword});
        history.push('/register');
        }

        else{
            if(type == "")
                 setTypeErr("Please fill the service");
            else
                setTypeErr("")
            
            if(name == "")
                setNameErr("Please fill the name");
            else
                setNameErr("")
                

            if(phone == "")
                setPhoneErr("Please fill the phone number");
            else
                setPhoneErr("")

            if(email == "")
                setEmailErr("Please fill the Email");
            else
                setEmailErr("")

            if(password == "")
                setPasswordErr("Please fill the Password");
            else
                setPasswordErr("")

            if(rpassword == "")
                setRpasswordErr("Please fill the Confirm Password");
            else
                setRpasswordErr("")
                
            if(password != rpassword)
                setRpasswordErr("Doestn't Match");
            else
                setRpasswordErr("")
                
        }
    };

    return (
        <div class="main">
            <div class="container">
                <div class="signup-content">
                     <div class="signup-img">
                            <img src={process.env.PUBLIC_URL + "/images/signup-transport.jpg"}/>
                     </div>

                        <div class="signup-form">
                            <form class="register-form" id="register-form" onSubmit={onSubmit} >
                                <h2>Transport Registration Form</h2>
                                    <div class="form-row"></div>

                                        <div class="form-select">
                                            <label for="type">Service Provider:</label>
                                                <select name="type" id="type" onChange={(e) => setType(e.target.value)}>
                                                    <option value=""></option>
                                                    <option value="Car">Car</option>
                                                    <option value="Flight">Flight </option>
                                                </select>
                                            <p style={{color: "red"}}>{typeErr}</p>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label for="name"> 
                                                Name :
                                                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                                            </label>
                                            <p style={{color: "red"}}>{nameErr}</p>
                                        </div>

                                        <div class="form-group">
                                            <label for="email">
                                                Email :
                                                <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                            </label>
                                            <p style={{color: "red"}}>{emailErr}</p>
                                        </div>
                        
                                        <div class="form-group">
                                            <label for="phone">
                                                Phone Number :
                                                <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                            </label>
                                            <p style={{color: "red"}}>{phoneErr}</p>
                                        </div>

                                        <div class="form-group">
                                            <label for="password">
                                                Password :
                                                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                            </label>
                                            <p style={{color: "red"}}>{passwordErr}</p>
                                        </div>

                                        <div class="form-group">
                                            <label for="rpassword">
                                                Re-type Password :
                                                <input type="password" name="rpassword" value={rpassword} onChange={(e) => setRpassword(e.target.value)} />
                                            </label>
                                            <p style={{color: "red"}}>{rpasswordErr}</p>
                                        </div>

                                        <div class="form-submit">
                                            <input type="submit" value="Submit" class="regsubmit" name="regsubmit" id="regsubmit" />
                                        </div>
                            </form>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default TransportRegistration;