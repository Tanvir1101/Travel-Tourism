import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import './Employee.css';


const EmployeeEditPlace = ({ callback }) => {
    
    const { id: eid } = useParams();
    const [place, setPlace] = useState("");
    const [district, setDistrict] = useState("");
    


    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();

       console.log({ id: eid,  place: place, district: district });
        
        callback({ id: eid,  place: place, district: district });
        history.push('/employee/place');
    };
    return (
        <div>

        <form className='form' onSubmit={onSubmit}>
        <fieldset>
        <legend>Edit Place</legend>
            <label>
                Place:
                <input type="text" name="place" value={place} onChange={(e) => setPlace(e.target.value)} />
            </label>
            <br />
            <label>
                District:
                <input  type="text" name="district" value={district} onChange={(e) => setDistrict(e.target.value)} />
            </label>
            <br />

            </fieldset>


            <input id="submit" type="submit" value="Submit" />
        </form>
    </div>
    );
};

export default EmployeeEditPlace;