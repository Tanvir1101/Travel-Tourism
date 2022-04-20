import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import '../Service.css';


const ServiceEditFacility = ({ callback }) => {
    
    const { id: eid } = useParams();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();

       console.log({ id: eid,  title: title, description: description });
        
        callback({ id: eid,  title: title, description: description  });
        history.push('/hotelDashboard/managehotelfacility');
    };
    return (
            <div id="registration-form">
                <div className='fieldset'>
                    <legend>Edit Facility</legend>
                        <form className='form' onSubmit={onSubmit}>
            

                            <label>
                                Facility Name :
                                <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                            </label>
                            <br />
                            <br />

                            <label>
                                Facility Description:
                                <input  type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                            </label>
                            <br />
                            <br />

                            <input id='submit' type="submit" value="Update" />
            </form>
        </div>
    </div>
    );
};

export default ServiceEditFacility;