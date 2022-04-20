import { useState } from "react";
import { useHistory } from 'react-router-dom';
import '../Service.css';


const ServiceAddCar = ({ callback }) => {
    
    const [title, setTitle] = useState("");
    const [model, setModel] = useState("");
    const [driver, setDriver] = useState("");
    const [fare, setFare] = useState("");
    const [type, setType] = useState("");
    // const [image, setImage] = useState("");


    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       
        callback({ title: title, model: model, driver:driver, fare:fare, type:type});
        history.push('/carDashboard/addcar');
    };
    return (
            <div id="registration-form">
                <div className='fieldset'>
                    <legend>Add Car</legend>
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

                            <label>
                                Per Day Fare:
                                <input  type="text" name="fare" value={fare} onChange={(e) => setFare(e.target.value)} />
                            </label>
                            <br />
                            <br />

                            <label>
                                Type of a Car:
                                <select value={type} onChange={(e) => setType(e.target.value)}>
                                    <option value="Luxury">Luxury</option>
                                    <option value="Standard">Standard</option>
                                </select>
                            </label>
                            <br />
                            <br />

                            {/* <label>
                            Car Image:
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

export default ServiceAddCar;