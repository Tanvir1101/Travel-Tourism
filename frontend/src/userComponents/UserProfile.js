import { useState } from "react";
import { useHistory } from 'react-router-dom';
//import { useFetch } from './userComponents/useFetch';

//import './Admin.css';

const UserProfile = ({ idl, firstnamel, lastnamel, genderl, emaill, usernamel, callback }) => {

    // console.log(idl);
    // console.log(firstnamel);
    // console.log(lastnamel);
    // console.log(genderl);
    // console.log(emaill);
    // console.log(usernamel);


    const [firstname, setFirstname] = useState(firstnamel);
    // setFirstname(firstnamel);
    const [lastname, setLastname] = useState(lastnamel);
    // setLastname(lastnamel);
    const [gender, setGender] = useState(genderl);
    // setGender(genderl);
    const [email, setEmail] = useState(emaill);
    // setEmail(emaill);
    const [username, setUsername] = useState(usernamel);
    // setUsername(usernamel);
    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");

    const [submitButton, setSubmitButton] = useState("");


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

        // if(submitButton == "Update")
        //     console.log("update from submit");
        // else if(submitButton == "Delete")
        //     console.log("Delete from submit");


        console.log(submitButton);
       
        callback({ firstname: firstname, lastname: lastname, gender: gender, email: email, username: username, password: password, conPassword: conPassword, submit:  submitButton});

        if(submitButton == "Delete")
            history.push('/login');
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
                <br />
                <label>
                    Last Name:
                    <input  type="text" name="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                </label>
                <br />
                <label>
                    Gender:
                    <input type="text" name="gender" value={gender} onChange={(e) => setGender(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                </fieldset>


                <fieldset>
                <legend>Account Information: </legend>
                <br />
                <label>
                    Usename:
                    <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input type="text" name="password" value= {password} onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />

                <label>
                    Confirm Password:
                    <input type="text" name="conPassword" value= {conPassword}  onChange={(e) => setConPassword(e.target.value)}
                    />
                </label>
                <br />
                </fieldset>


                <input type="submit" name="submit" value="Update" id="updateBtn" onClick={buttonU}/>
                <input type="submit" name="submit" value="Delete" id="deleteBtn" onClick={buttonD}/>
            </form>
        </div>
    );
};

export default UserProfile;