import { useState } from "react";
import { useHistory } from 'react-router-dom';
import './css/reg-style.css';

const HotelRegistration = ({ callback }) => {
    
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rpassword, setRpassword] = useState("");


    const [nameErr, setNameErr] = useState("");
    const [locationErr, setLocationErr] = useState("");
    const [addressErr, setAddressErr] = useState("");
    const [phoneErr, setPhoneErr] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [passwordErr, setPasswordErr] = useState("");
    const [rpasswordErr, setRpasswordErr] = useState("");
    


    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();

        if(name != "" && location != "" && address != "" && phone != "" && email != "" &&  password != "" && rpassword != "" && password==rpassword ) 
        {
            setNameErr("")
            setLocationErr("")
            setAddressErr("")
            setPhoneErr("")
            setEmailErr("")
            setPasswordErr("")
            setRpasswordErr("")
       
        callback({ name: name, location: location, address:address, phone:phone, email:email, password:password, rpassword:rpassword});
        history.push('/register');
        }

        else{
            
            if(name == "")
                setNameErr("Please fill the name");
            else
                setNameErr("")
                
            if(location == "")
                setLocationErr("Please fill the location");
            else
                setLocationErr("")

            if(address == "")
                setAddressErr("Please fill the address");
            else
                setAddressErr("")

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
                            <img src={process.env.PUBLIC_URL + "/images/signup-hotel.jpg"}/>
                     </div>

                        <div class="signup-form">
                            <form class="register-form" id="register-form" onSubmit={onSubmit} >
                                <h2>Hotel Registration Form</h2>
                                    <div class="form-row"></div>
                                        <div class="form-group">
                                            <label for="name"> 
                                                Name :
                                                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                                            </label>
                                            <p style={{color: "red"}}>{nameErr}</p>

                                        </div>

                                        <div class="form-group">
                                            <label for="location">
                                                Location :
                                                 <input type="text" name="location" value={location} onChange={(e) => setLocation(e.target.value)} />
                                            </label>
                                            <p style={{color: "red"}}>{locationErr}</p>
                                            
                                        </div>
                        
                                         <div class="form-group">
                                             <label for="address">
                                                Address :
                                                <input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                                            </label>
                                            <p style={{color: "red"}}>{addressErr}</p>
                                        </div>
                        
                                        <div class="form-group">
                                            <label for="phone">
                                                Phone Number :
                                                <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                            </label>
                                            <p style={{color: "red"}}>{phoneErr}</p>

                                        </div>

                                        <div class="form-group">
                                            <label for="email">
                                                Email :
                                                <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                            </label>
                                            <p style={{color: "red"}}>{emailErr}</p>

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

export default HotelRegistration;