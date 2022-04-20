import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import './Admin.css';

const AdminAddEmployee = ({ status, callback }) => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");


    const [firstnameErr, setFirstnameErr] = useState("");
    const [lastnameErr, setLastnameErr] = useState("");
    const [genderErr, setGenderErr] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [usernameErr, setUsernameErr] = useState("");
    const [passwordErr, setPasswordErr] = useState("");
    const [conPasswordErr, setConPasswordErr] = useState("");

    //const [user, setUser] = useState({id:'',name: '', dept: ''});

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();

        if(firstname != "" && lastname != "" && gender != "" && email != "" && username != "" && password != "" && conPassword != "" && password == conPassword)
        {
            setFirstnameErr("")
            setLastnameErr("")
            setGenderErr("")
            setEmailErr("")
            setUsernameErr("")
            setPasswordErr("")
            setConPasswordErr("")

            callback({ firstname: firstname, lastname: lastname, gender: gender, email: email, username: username, password: password, conPassword: conPassword });

            if (status == "Employee")
                history.push('/admin/all-employees');
            else
                history.push('/admin/all-admins');

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
                setGenderErr("Please Select a Gender");
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

            if(password != conPassword)
                setConPasswordErr("Doestn't Match");
            else
                setConPasswordErr("")
                
        }
       
        
    };
    return (
        <div>
            <h2>
                This is {status} Add page
            </h2>
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
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <p style={{color: "red"}}>{passwordErr}</p>


                <br />

                <label>
                    Confirm Password:
                    <input type="password" name="conPassword" value={conPassword} onChange={(e) => setConPassword(e.target.value)}
                    />
                </label>
                <p style={{color: "red"}}>{conPasswordErr}</p>


                <br />
                </fieldset>

                <input id='submit' type="submit" value="Submit" />
            </form>
        </div>
        
    );
};

export default AdminAddEmployee;