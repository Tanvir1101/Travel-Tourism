import { useState } from "react";
import { useFetch } from './useFetch';
import { useHistory } from 'react-router-dom';

import './Employee.css';

const EmployeeGuidelinesForm = ({callback})=>{

    const [employeeGuidelines, setEmployeeGuidelines] = useState([]);
    const urlPP = 'http://127.0.0.1:8000/api/employee/guidelines';
    useFetch(urlPP, setEmployeeGuidelines);

    

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       
        callback(employeeGuidelines);

        history.push('/employee/guidelines');
    };

    return(
        <>

                <h1>Edit Guidelines</h1>

                <form className='guideform' onSubmit={onSubmit}>
                    <fieldset>

                        <legend> </legend>
                        <br/>

                        <label for="guidelinesForm">Write Guidelines here:</label>

                        <textarea name="guidelinesForm" id="guidelinesForm"  rows="30" cols="40" value={employeeGuidelines.guideline} onChange={(e) => setEmployeeGuidelines({id:employeeGuidelines.id, guideline: e.target.value})} />
                           
                        <br/>

                    </fieldset>
                    <br/>
                    <br/>

                    <input type="submit" value="Submit" id="submit" />

                </form>

        </>
    );
}

export default EmployeeGuidelinesForm;