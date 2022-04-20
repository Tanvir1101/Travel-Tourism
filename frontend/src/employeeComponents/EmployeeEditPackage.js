import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import './Employee.css';


const EmployeeEditPackage = ({ callback }) => {
    
    const { id: eid } = useParams();
    const [place, setPlace] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState("");
    const [transport, setTransport] = useState("");
    const [hotel, setHotel] = useState("");
    const [cost, setCost] = useState("");
    const [status, setStatus] = useState("");


    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();

       console.log({ id: eid,  place: place, location: location, description: description, duration: duration, transport: transport, hotel: hotel, cost: cost, status: status });
        
        callback({ id: eid,  place: place, location: location, description: description, duration: duration, transport: transport, hotel: hotel, cost: cost, status: status  });
        history.push('/employee/package');
    };
    return (
        <div>

        <form className='form' onSubmit={onSubmit}>
        <fieldset>
        <legend>Edit Package</legend>
            <label>
                Place:
                <input type="text" name="place" value={place} onChange={(e) => setPlace(e.target.value)} />
            </label>
            <br />
            <label>
                Location:
                <input  type="text" name="location" value={location} onChange={(e) => setLocation(e.target.value)} />
            </label>
            <br />
                <label>
                    Description:
                    <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Duration:
                    <input type="text" name="duration" value={duration} onChange={(e) => setDuration(e.target.value)}
                    />
                </label>
                <br />
                <label for="transport">Transport:</label>
                            <select name="transport" id="transport" onChange={(e) => setTransport(e.target.value)}>

                                <option value=""></option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                                
                </select>
                <br />
                <label for="hotel">Hotel:</label>
                            <select name="hotel" id="hotel" onChange={(e) => setHotel(e.target.value)}>

                                <option value=""></option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                                
                </select>
                <br />
                <label>
                    Cost:
                    <input type="number" name="cost" value={cost} onChange={(e) => setCost(e.target.value)}
                    />
                </label>
                <br />
                <label for="status">Status:</label>
                            <select name="status" id="status" onChange={(e) => setStatus(e.target.value)}>

                                <option value=""></option>
                                <option value="Upcoming">Upcoming</option>
                                <option value="Completed">Completed</option>
                                
                </select>

            </fieldset>


            <input id="submit" type="submit" value="Submit" />
        </form>
    </div>
    );
};

export default EmployeeEditPackage;