import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import '../Service.css';


const ServiceEditFlight = ({ callback }) => {
    
    const { id: eid } = useParams();
    const [title, setTitle] = useState("");
    const [model, setModel] = useState("");

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();

       console.log({ id: eid,  title: title, model: model });
        
        callback({ id: eid, title: title, model: model});
        history.push('/flightDashboard/manageflight');
    };
    return (
            <div id="registration-form">
                <div className='fieldset'>
                    <legend>Edit Airplane</legend>
                        <form className='form' onSubmit={onSubmit}>
            

                            <label>
                                Airplane Title :
                                <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                            </label>
                            <br />
                            <br />

                            <label>
                                Airplane Model:
                                <input  type="text" name="model" value={model} onChange={(e) => setModel(e.target.value)} />
                            </label>
                            <br />
                            <br />

                            <input id='submit' type="submit" value="Update" />
            </form>
        </div>
    </div>
    );
};

export default ServiceEditFlight;