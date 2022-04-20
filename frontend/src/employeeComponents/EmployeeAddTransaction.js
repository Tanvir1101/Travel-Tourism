import { useState } from "react";
import { useHistory } from 'react-router-dom';
import './Employee.css';

const EmployeeAddTransaction = ({ status, callback }) => {
    const [receiver_id, setReceiver_id] = useState("");
    const [receiver, setReceiver] = useState("");
    const [username, setUsername] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       
        callback({ receiver_id : receiver_id, receiver: receiver, username: username, description: description, amount: amount});
        history.push('/employee');
    };
    return (
        
        <div>
            
            <form className='form' onSubmit={onSubmit}>
            <fieldset>
            <legend>Add in Transaction History</legend>
                <label>
                    Receiver ID:
                    <input type="text" name="receiver_id" value={receiver_id} onChange={(e) => setReceiver_id(e.target.value)} />
                </label>
                <br />
                <label>
                    Receiver:
                    <input  type="text" name="receiver" value={receiver} onChange={(e) => setReceiver(e.target.value)} />
                </label>
                <br />
                <label>
                    Username:
                    <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <br/>
                <label>
                    Description:
                    <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <br/>
                <label>
                    Amount:
                    <input type="number" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)}
                    />
                </label>
                <br/>
                </fieldset>


                <input id="submit" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default EmployeeAddTransaction;