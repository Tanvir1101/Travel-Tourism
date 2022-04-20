import { useState } from "react";
import '../Service.css';

const ServiceCarAvailability = ({ list, callback }) => {
    
    const [title, setTitle] = useState("");
    const [availability, setAvailability] = useState("");


    const onSubmit = (e) => {
        e.preventDefault();
       console.log(title);
       console.log(availability);

        callback({ title: title, availability:availability});

    };

    return (
        <div id="registration-form">
            <div className='fieldset'>
                <legend>Availability Status</legend>
                    <form  className='form' onSubmit={onSubmit}>
            
            <label for="title">Select Car:</label>
                <select name="title" id="title" onChange={(e) => setTitle(e.target.value)}>
                 <option value=""></option>
                    {
                        list.map((car)=>(

                        <option value={car.title}>{car.title}</option>
                                                
                        ))
                    }

                    </select>
                    <br/>
                    <br/>

            <label for="avilability">Avilability:</label>
                    <select name="avilability" id="avilability" onChange={(e) => setAvailability(e.target.value)}>


                        <option value=""></option>
                        <option value="Available">Available</option>
                        <option value="Not Available">Not Available</option>  
                    </select>
                    <br/>
                    <br/>

                    <input type="submit" value="Submit"/>
                    <br/>

                </form>
    
            </div>
        </div>
    );
};

export default ServiceCarAvailability;