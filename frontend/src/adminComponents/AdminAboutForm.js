import { useState } from "react";
import { useFetch } from './useFetch';
import { useHistory } from 'react-router-dom';

import './AdminPP.css';

const AdminAboutForm = ({callback})=>{

    const [adminAbout, setAdminAbout] = useState([]);
    const urlPP = 'http://127.0.0.1:8000/api/admin/about';
    useFetch(urlPP, setAdminAbout);

    // const [policy, setPolicy] = useState("");

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       
        callback(adminAbout);

        history.push('/admin/about');
    };

    return(
        <>

                <h1>Edit About Us</h1>

                <form className='big-form' onSubmit={onSubmit}>
                    <fieldset>

                        <legend> </legend>
                        <br/>

                        <label for="aboutForm">Write About Us Page content here:</label> 

                        <textarea name="aboutForm" id="aboutForm"  rows="30" cols="40" value={adminAbout.about} onChange={(e) => setAdminAbout({id:adminAbout.id, about: e.target.value})} />
                           
                        <br/>

                    </fieldset>
                    <br/>
                    <br/>

                    <input type="submit" value="Submit" id="submit" />

                </form>

        </>
    );
}

export default AdminAboutForm;

