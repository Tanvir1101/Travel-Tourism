import { useState } from "react";
import { useHistory } from 'react-router-dom';

const UserContactUs = ({callback}) => {
   
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       
        callback({ username: username, phone: phone, email: email, message: message });
        history.push('/user');
    };
    return (
        <>
        <div>
            
            <form className='form' onSubmit={onSubmit} >
            
            <legend> Get In Touch </legend>
            <br />

                <label>
                    Name:
                    <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <br />

                <label>
                    Phone:
                    <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </label>
                <br />

                <label>
                    Email:
                    <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />

                <label>
                   Message:
                   <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows="5" cols="80"/>
                </label>

                <input type="submit" value="Send Message"/>
                
                </form>
            </div>
        </>
    );
};

export default UserContactUs;