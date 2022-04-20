import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';


const UserRegistration = ({callback}) => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rpassword, setRpassword] = useState("");


    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       
        callback({ firstname: firstname, lastname: lastname, gender: gender, email: email, phone: phone, username: username, password: password, rpassword: rpassword });
        history.push('/user');
    };

    return (
        <>
        
        <div>
            
            <form className='form' onSubmit={onSubmit} >

            <legend> User Registration </legend>
            <br />

                <label>
                First Name:
                    <input type="text" name="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                </label>
                <br />

                <label>
                Last Name:
                    <input type="text" name="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                </label>
                <br />

                <label>
                Gender: 
                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value=" "> </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                    </select>
                </label>
                <br />

                <label>
                Email:
                    <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />

                <label>
                Phone Number:
                    <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </label>
                <br />

                <label>
                Username:
                    <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <br />

                <label>
                Password:
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br />

                <label>
                Re-Type Password:
                    <input type="password" name="rpassword" value={rpassword} onChange={(e) => setRpassword(e.target.value)} />
                </label>
                <br />
            
                <input type="submit" value="Register" />

                
                </form>
            </div>

        </>
    );
};

export default UserRegistration;