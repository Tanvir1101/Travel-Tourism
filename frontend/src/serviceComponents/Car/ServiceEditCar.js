import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import '../Service.css';


const ServiceEditCar = ({ callback }) => {
    
    const { id: eid } = useParams();
    const [title, setTitle] = useState("");
    const [model, setModel] = useState("");
    const [driver, setDriver] = useState("");

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();

       console.log({ id: eid,  title: title, model: model, driver:driver });
        
        callback({ id: eid, title: title, model: model, driver:driver});
        history.push('/carDashboard/managecar');
    };
    return (
            <div id="registration-form">
                <div className='fieldset'>
                    <legend>Edit Car</legend>
                        <form className='form' onSubmit={onSubmit}>
            

                            <label>
                                Car Title :
                                <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                            </label>
                            <br />
                            <br />

                            <label>
                                Car Model:
                                <input  type="text" name="model" value={model} onChange={(e) => setModel(e.target.value)} />
                            </label>
                            <br />
                            <br />

                            <label>
                                Driver Name:
                                <input  type="text" name="driver" value={driver} onChange={(e) => setDriver(e.target.value)} />
                            </label>
                            <br />
                            <br />

                            <input id='submit' type="submit" value="Update" />
            </form>
        </div>
    </div>
    );
};

export default ServiceEditCar;