import { useState } from "react";
import { useFetch } from './useFetch';
import { useHistory } from 'react-router-dom';

import './AdminPP.css';

const AdminGuidelinesForm = ({callback})=>{

    const [adminGuidelines, setAdminGuidelines] = useState([]);
    const urlPP = 'http://127.0.0.1:8000/api/admin/guidelines';
    useFetch(urlPP, setAdminGuidelines);

    // const [policy, setPolicy] = useState("");

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       
        callback(adminGuidelines);

        history.push('/admin/guidelines');
    };

    return(
        <>

                <h1>Edit Guidelines</h1>

                <form className='big-form' onSubmit={onSubmit}>
                    <fieldset>

                        <legend> </legend>
                        <br/>

                        <label for="guidelinesForm">Write Guidelines here:</label>

                        <textarea name="guidelinesForm" id="guidelinesForm"  rows="30" cols="40" value={adminGuidelines.guideline} onChange={(e) => setAdminGuidelines({id:adminGuidelines.id, guideline: e.target.value})} />
                           
                        <br/>

                    </fieldset>
                    <br/>
                    <br/>

                    <input type="submit" value="Submit" id="submit" />

                </form>

        </>
    );
}

export default AdminGuidelinesForm;

