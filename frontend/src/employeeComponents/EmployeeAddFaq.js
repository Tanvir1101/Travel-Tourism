import { useState } from "react";
import { useHistory } from 'react-router-dom';
import './Employee.css';

const EmployeeAddFaq = ({ status, callback }) => {
    const [que, setQue] = useState("");
    const [ans, setAns] = useState("");
    
    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       
        callback({ que : que, ans: ans});
        history.push('/employee');
    };
    return (
        <div>
            
            <form className='form' onSubmit={onSubmit}>
            <fieldset>
            <legend>FAQ</legend>
                <label>
                    Question:
                    <input type="text" name="que" value={que} onChange={(e) => setQue(e.target.value)} />
                </label>
                <br />
                <label>
                    Answer:
                    <input  type="text" name="ans" value={ans} onChange={(e) => setAns(e.target.value)} />
                </label>
                <br />
                </fieldset>


                <input id="submit" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default EmployeeAddFaq;