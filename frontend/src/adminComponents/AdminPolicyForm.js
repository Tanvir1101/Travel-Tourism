import { useState } from "react";
import { useFetch } from '../adminComponents/useFetch';
import { useHistory } from 'react-router-dom';

import './AdminPP.css';

const AdminPolicyForm = ({callback})=>{

    const [adminPolicy, setAdminPolicy] = useState([]);
    const urlPP = 'http://127.0.0.1:8000/api/admin/policy';
    useFetch(urlPP, setAdminPolicy);

    // const [policy, setPolicy] = useState("");

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       
        callback(adminPolicy);

        history.push('/admin/policy');
    };

    return(
        <>

                <h1>Edit Privacy Policy</h1>

                <form className='big-form' onSubmit={onSubmit}>
                    <fieldset>

                        <legend> </legend>
                        <br/>

                        <label for="policyForm">Write Privacy Policies here:</label>

                        <textarea name="policyForm" id="policyForm"  rows="30" cols="40" value={adminPolicy.policy} onChange={(e) => setAdminPolicy({id:adminPolicy.id, policy: e.target.value})} />
                           
                        <br/>

                    </fieldset>
                    <br/>
                    <br/>

                    <input type="submit" value="Submit" id="submit" />

                </form>

        </>
    );
}

export default AdminPolicyForm;

