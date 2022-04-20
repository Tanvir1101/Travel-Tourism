import { useState } from "react";
import { useHistory } from 'react-router-dom';

const ServiceAddFacility = ({callback }) => {
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    // const [image, setImage] = useState("");

    

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       
        callback({ title: title, description: description});
        history.push('/hotelDashboard/addhotelfacility');
    };
    return (
        <div id="registration-form">
        <div className='fieldset'>
            <legend>Add Facility</legend>
                <form className='form' onSubmit={onSubmit}>

                <label>
                    Facility Title :
                    <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
                <br />
                <br />
                <label>
                    Description:
                    <input  type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </label>
                <br />
                <br />
                {/* <label>
                    Image:
                    <input type="file" name="image" value={image} onChange={(e) => setImage(e.target.value)}
                    />
                </label> */}

                <input id='submit' type="submit" value="Add" />
            </form>
        </div>
    </div>
    );
};

export default ServiceAddFacility;