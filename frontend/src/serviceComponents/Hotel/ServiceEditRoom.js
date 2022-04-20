import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import '../Service.css';


const ServiceEditRoom = ({ callback }) => {
    
    const { id: eid } = useParams();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [availability, setAvailability] = useState("");

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();

       console.log({ id: eid,  name: name, description: description, price: price,availability: availability });
        
        callback({ id: eid, name: name, description: description,price: price, availability:availability });
        history.push('/hotelDashboard/managehotelroom');
    };
    return (
            <div id="registration-form">
                <div className='fieldset'>
                    <legend>Edit Room</legend>
                        <form className='form' onSubmit={onSubmit}>
            

                            <label>
                                Room Name :
                                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                            </label>
                            <br />
                            <br />

                            <label>
                                Room Description:
                                <input  type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                            </label>
                            <br />
                            <br />

                            <label>
                                Room Price:
                                <input  type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                            </label>
                            <br />
                            <br />

                            <label for="avilability">Avilability:</label>
                                 <select name="avilability" id="avilability" onChange={(e) => setAvailability(e.target.value)}>

                                        <option value=""></option>
                                        <option value="Available">Available</option>
                                        <option value="Not Available">Not Available</option>  
                    
                            </select>
                            <br/>
                            <br/>

                            <input id='submit' type="submit" value="Update" />
            </form>
        </div>
    </div>
    );
};

export default ServiceEditRoom;