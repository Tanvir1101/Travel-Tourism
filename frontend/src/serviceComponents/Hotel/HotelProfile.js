import { useState } from "react";
import { useHistory } from 'react-router-dom';


import '../Service.css';

const HotelProfile = ({ hotelidl,hotelnamel,hotellocationl,hoteladdressl, hotelphonel, hotelemaill, hoteltypel, callback }) => {

    console.log(hotelidl);
    console.log(hotelnamel);
    console.log(hotellocationl);
    console.log(hoteladdressl);
    console.log(hotelphonel);
    console.log(hotelemaill);
    console.log(hoteltypel);


    const [name, setName] = useState(hotelnamel);
    const [location, setLocation] = useState(hotellocationl);
    const [address, setAddress] = useState(hoteladdressl);
    const [phone, setPhone] = useState(hotelphonel);
    const [email, setEmail] = useState(hotelemaill);
    const [type, setType] = useState(hoteltypel);

   
    // setUsername(usernamel);
    const [password, setPassword] = useState("");
    const [rpassword, setRpassword] = useState("");

    const [submitButton, setSubmitButton] = useState("");


    const [nameErr, setNameErr] = useState();
    const [locationErr, setLocationErr] = useState();
    const [addressErr, setAddressErr] = useState();
    const [phoneErr, setPhoneErr] = useState();
    const [emailErr, setEmailErr] = useState();
    const [typeErr, setTypeErr] = useState();
    const [passwordErr, setPasswordErr] = useState("");
    const [rpasswordErr, setRpasswordErr] = useState("");


    const buttonU = () => { 

        setSubmitButton("Update");
    
          console.log("update");
    };

    const buttonD = () => { 

        setSubmitButton("Delete");
    
          console.log("Delete");
    };




    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();

        if(name != "" && location != "" && address != "" && phone != "" && email != "" && type != "" &&  password != "" && rpassword != "" && password==rpassword ) 
        {
            setNameErr("")
            setLocationErr("")
            setAddressErr("")
            setPhoneErr("")
            setEmailErr("")
            setTypeErr("")
            setPasswordErr("")
            setRpasswordErr("")

       
        callback({ name: name, location:location, address:address, phone: phone, email: email, type: type, password: password, rpassword: rpassword, submit:  submitButton});

        if(submitButton == "Delete")
            history.push('/login');
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
    
                if(email == "")
                    setEmailErr("Please fill the Email");
                else
                    setEmailErr("")
    
                if(type == "")
                    setTypeErr("Please fill the type");
                else
                    setTypeErr("")
    
                if(password == "")
                    setPasswordErr("Please fill the Password");
                else
                    setPasswordErr("")
    
                if(rpassword == "")
                    setRpasswordErr("Please fill the Confirm Password");
                else
                    setRpasswordErr("")
                
                if(address == "")
                    setAddressErr("Please fill the Address");
                else
                setAddressErr("")
                
                if(phone == "")
                    setPhoneErr("Please fill the Phone Number");
                else
                    setPhoneErr("")
                    
                if(password != rpassword)
                    setRpasswordErr("Doestn't Match");
                else
                     setRpasswordErr("")
                    
            }
        
    };
    return (
        <div>
            <form className='form' onSubmit={onSubmit}>
            <fieldset>
            <legend>Basic Information: </legend>
                <label>
                    Hotel Name:
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <p style={{color: "red"}}>{nameErr}</p>

                <br />

                <label>
                    Hotel Location:
                    <input type="text" name="location" value={location} onChange={(e) => setLocation(e.target.value)} />
                </label>
                <p style={{color: "red"}}>{locationErr}</p>
                <br />

                <label>
                    Hotel Address:
                    <input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                </label>
                <p style={{color: "red"}}>{addressErr}</p>
                <br />

                <label>
                     Phone:
                    <input  type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </label>
                <p style={{color: "red"}}>{phoneErr}</p>

                <br />
                <label>
                    Email:
                    <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <p style={{color: "red"}}>{emailErr}</p>

                <br />
                <label>
                     Type:
                    <input type="text" name="type" value={type} onChange={(e) => setType(e.target.value)}
                    />
                </label>
                <p style={{color: "red"}}>{typeErr}</p>

                <br />
                <label>
                    Password:
                    <input type="password" name="password" value= {password} onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <p style={{color: "red"}}>{passwordErr}</p>

                <br />
                <label>
                    Re-Type Password:
                    <input type="password" name="rpassword" value= {rpassword}  onChange={(e) => setRpassword(e.target.value)}
                    />
                </label>
                <p style={{color: "red"}}>{rpasswordErr}</p>

                <br />
            </fieldset>


                <input type="submit" name="submit" value="Update" id="updateBtn" onClick={buttonU}/>
                <input type="submit" name="submit" value="Delete" id="deleteBtn" onClick={buttonD}/>
            </form>
        </div>
    );
};

export default HotelProfile;