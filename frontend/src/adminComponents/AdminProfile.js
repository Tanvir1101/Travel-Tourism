import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useFetch } from '../adminComponents/useFetch';

import './Admin.css';

const AdminProfile = ({ idl, firstnamel, lastnamel, genderl, emaill, usernamel, callback }) => {



    const [firstname, setFirstname] = useState(firstnamel);
    const [lastname, setLastname] = useState(lastnamel);
    const [gender, setGender] = useState(genderl);
    const [email, setEmail] = useState(emaill);
    const [username, setUsername] = useState(usernamel);

    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");

    const [submitButton, setSubmitButton] = useState("");



    const [firstnameErr, setFirstnameErr] = useState("");
    const [lastnameErr, setLastnameErr] = useState("");
    const [genderErr, setGenderErr] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [usernameErr, setUsernameErr] = useState("");
    const [passwordErr, setPasswordErr] = useState("");
    const [conPasswordErr, setConPasswordErr] = useState("");


    const buttonU = () => { 

        setSubmitButton("Update");
        
    
        //   console.log("update");
    };

    const buttonD = () => { 

        setSubmitButton("Delete");
    
        //   console.log("Delete");
    };




    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();

        if(firstname != "" && lastname != "" && gender != "" && email != "" && username != "" && password != "" && conPassword != "" ) 
        {
            setFirstnameErr("")
            setLastnameErr("")
            setGenderErr("")
            setEmailErr("")
            setUsernameErr("")
            setPasswordErr("")
            setConPasswordErr("")

       
            callback({ firstname: firstname, lastname: lastname, gender: gender, email: email, username: username, password: password, conPassword: conPassword, submit:  submitButton});

            if(submitButton == "Delete")
                history.push('/login');
        }

        else{
            
            if(firstname == "")
                setFirstnameErr("Please fill the Firstname");
            else
                setFirstnameErr("")

            if(lastname == "")
                setLastnameErr("Please fill the Lastname");
            else
                setLastnameErr("")

            if(gender == "")
                setGenderErr("Please fill the Gender");
            else
                setGenderErr("")

            if(email == "")
                setEmailErr("Please fill the Email");
            else
                setEmailErr("")

            if(username == "")
                setUsernameErr("Please fill the Username");
            else
                setUsernameErr("")

            if(password == "")
                setPasswordErr("Please fill the Password");
            else
                setPasswordErr("")

            if(conPassword == "")
                setConPasswordErr("Please fill the Confirm Password");
            else
                setConPasswordErr("")
                
        }

    };
    return (
        <div>
            <form className='form' onSubmit={onSubmit}>
            <fieldset>
            <legend>Basic Information: </legend>
                <label>
                    Firstname:
                    <input type="text" name="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                </label>
                <p style={{color: "red"}}>{firstnameErr}</p>


                <br />
                <label>
                    Last Name:
                    <input  type="text" name="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                </label>
                <p style={{color: "red"}}>{lastnameErr}</p>


                <br />
                <label for="gender">Gender:</label>
                <select name="gender" id="gender" onChange={(e) => setGender(e.target.value)}>
                    
                    <option value={gender}>{gender}</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    
                </select>
                <p style={{color: "red"}}>{genderErr}</p>


                {/* <br />
                <label>
                    Gender:
                    <input type="text" name="gender" value={gender} onChange={(e) => setGender(e.target.value)}
                    />
                </label>
                <p style={{color: "red"}}>{genderErr}</p> */}


                <br />
                <label>
                    Email:
                    <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <p style={{color: "red"}}>{emailErr}</p>


                </fieldset>


                <fieldset>
                <legend>Account Information: </legend>
                <br />
                <label>
                    Usename:
                    <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <p style={{color: "red"}}>{usernameErr}</p>


                <br />
                <label>
                    Password:
                    <input type="password" name="password" value= {password} onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <p style={{color: "red"}}>{passwordErr}</p>


                <br />

                <label>
                    Confirm Password:
                    <input type="password" name="conPassword" value= {conPassword}  onChange={(e) => setConPassword(e.target.value)}
                    />
                </label>
                <p style={{color: "red"}}>{conPasswordErr}</p>


                <br />
                </fieldset>


                <input type="submit" name="submit" value="Update" id="updateBtn" onClick={buttonU}/>
                <input type="submit" name="submit" value="Delete" id="deleteBtn" onClick={buttonD}/>
            </form>
        </div>
    );
};


export default AdminProfile;