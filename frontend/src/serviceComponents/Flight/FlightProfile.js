import { useState } from "react";
import { useHistory } from 'react-router-dom';


import '../Service.css';

const FlightProfile = ({ flightidl, flightnamel, flightphonel, flightemaill, flighttypel, callback }) => {

    console.log(flightidl);
    console.log(flightnamel);
    console.log(flightphonel);
    console.log(flightemaill);
    console.log(flighttypel);


    const [name, setName] = useState(flightnamel);
    const [phone, setPhone] = useState(flightphonel);
    const [email, setEmail] = useState(flightemaill);
    const [type, setType] = useState(flighttypel);

   
    // setUsername(usernamel);
    const [password, setPassword] = useState("");
    const [rpassword, setRpassword] = useState("");

    const [submitButton, setSubmitButton] = useState("");

    const [nameErr, setNameErr] = useState();
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

        if(name != "" && phone != "" && email != "" && type != "" && password != "" && rpassword != "" && password==rpassword) 
        {
            setNameErr("")
            setPhoneErr("")
            setEmailErr("")
            setTypeErr("")
            setPasswordErr("")
            setRpasswordErr("")
       
        callback({ name: name, phone: phone, email: email, type: type, password: password, rpassword: rpassword, submit:  submitButton});

        if(submitButton == "Delete")
            history.push('/login');
        }

        else{
            
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
                    Company Name:
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <p style={{color: "red"}}>{nameErr}</p>

                <br />
                <label>
                    Company Phone:
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
                    Company Type:
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

export default FlightProfile;