import { useState } from "react";
import { useHistory } from 'react-router-dom';

const ServiceAddRoom = ({ callback }) => {
    
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    // const [image, setImage] = useState("");


    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       
        callback({ name: name, price: price,description:description});
        history.push('/hotelDashboard/addhotelroom');
    };
    return (
        <div id="registration-form">
         <div className='fieldset'>
            <legend>Add Room</legend>
                <form className='form' onSubmit={onSubmit}>

                <label>
                    Room Name :
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <br />
                <br />

                <label>
                    Room Price:
                    <input  type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                </label>
                <br />
                <br />

                <label>
                    Room Description:
                    <input  type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </label>
                <br />
                <br />

                {/* <label>
                   Room Image:
                    <input type="file" name="image" value={image} onChange={(e) => setImage(e.target.value)}
                    />
                </label> */}
                
                <input id='submit' type="submit" value="Add" />
            </form>
        </div>
    </div>   
    );
};

export default ServiceAddRoom;