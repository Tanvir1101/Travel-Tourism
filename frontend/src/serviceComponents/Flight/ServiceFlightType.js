import { useState } from "react";
import '../Service.css';

const ServiceFlightType = ({ list, callback }) => {
    
    const [title, setTitle] = useState("");
    const [fare, setFare] = useState("");
    const [type, setType] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(title);
        console.log(fare);
        console.log(type);
       
        callback({ title: title, fare:fare, type:type});

    };
    return (
        <div id="registration-form">
            <div className='fieldset'>
                <legend>Type Status</legend>
                    <form  className='form' onSubmit={onSubmit}>
            
            <label for="title">Select Airplane:</label>
                <select name="title" id="title" onChange={(e) => setTitle(e.target.value)}>
                    <option value=""></option>  
                    
                     {
                        list.map((flight)=>(

                        <option value={flight.title}>{flight.title}</option>  

                        ))
                    }
                </select>

            <label for="type">Type:</label>
                <select name="type" id="type" onChange={(e) => setType(e.target.value)}>
                        <option value=""></option>
                        <option value="Airbus">Airbus</option>
                        <option value="Jett">Jett</option>  
                </select>
                <br/>
                <br/>

            <label>
                Per Day Fare:
                <input  type="text" name="fare" value={fare} onChange={(e) => setFare(e.target.value)} />
            </label>

            <input type="submit" value="Submit"/>
            <br/>

        </form>
    </div>
</div>  
    );
};

export default ServiceFlightType;