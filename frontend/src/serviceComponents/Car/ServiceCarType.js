import { useState } from "react";
import '../Service.css';

const ServiceCarType = ({ list, callback }) => {
    
    const [title, setTitle] = useState("");
    const [fare, setFare] = useState("");
    const [type, setType] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

       console.log(title);
       console.log(fare);
       console.log(type);

        callback({ title: title, fare:fare,type:type });

    };

        return (
            <div id="registration-form">
                <div className='fieldset'>
                    <legend>Type Status</legend>
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

                <label for="type">Type:</label>
                    <select name="type" id="type" onChange={(e) => setType(e.target.value)}>
                            <option value=""></option>
                            <option value="Luxury">Luxury</option>
                            <option value="Standard">Standard</option>  
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

export default ServiceCarType;