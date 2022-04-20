import { useState } from "react";
import { useHistory } from 'react-router-dom';

const ServiceAddFlight = ({ callback }) => {
    
    const [title, setTitle] = useState("");
    const [model, setModel] = useState("");
    const [fare, setFare] = useState("");
    const [type, setType] = useState("");
    const [availability, setAvailability] = useState("Available");
    // const [image, setImage] = useState("");


    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       
        callback({ title: title, model: model, fare:fare, type:type,availability:availability });
        history.push('/flightDashboard/addflight');
    };
    return (
        <div id="registration-form">
                <div className='fieldset'>
                    <legend>Add Airplane</legend>
                        <form className='form' onSubmit={onSubmit}>

                <label>
                    Airplane Name :
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

                <label>
                  Fare:
                    <input  type="text" name="fare" value={fare} onChange={(e) => setFare(e.target.value)} />
                </label>
                <br />
                <br />

                <label>
                    Type of a Airplane:
                    <select value={type} onChange={(e) => setType(e.target.value)}>
                        
                        <option value=""></option>
                        <option value="airbus">Airbus</option>
                        <option value="jett">Jett</option>
                    </select>
                </label>
                <br />
                <br />

                {/* <label>
                   Airplane Image:
                    <input type="file" name="image" value={image} onChange={(e) => setImage(e.target.value)}
                    />
                </label>
                <br /> */}
                <input id='submit' type="submit" value="Add" />
            </form>
        </div>
    </div> 
    );
};

export default ServiceAddFlight;