import { useState } from "react";
import { useHistory } from 'react-router-dom';
import './Employee.css';

const EmployeeAddAdvertisement = ({ status, callback }) => {

    const [message, setMessage] = useState("");
  
    
    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       
        callback({ message : message});
        history.push('/employee');
    };
    return (
        <div>
            
            <form className='form' onSubmit={onSubmit}>
            <fieldset>
            <legend>Send Advertisement</legend>
                <label>
                    Advertisement:
                    <input type="text" name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
                </label>
                <br />
                </fieldset>


                <input id="submit" type="submit" value="Send" />
            </form>
        </div>
    );
};

export default EmployeeAddAdvertisement;