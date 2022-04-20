import { useState } from "react";
import { useHistory } from 'react-router-dom';
import './Employee.css';

const EmployeeAddPlace = ({ status, callback }) => {
    const [place, setPlace] = useState("");
    const [district, setDistrict] = useState("");

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       
        callback({ place : place, district: district});
        history.push('/employee');
    };
    return (
        <div>
            
            <form className='form' onSubmit={onSubmit}>
            <fieldset>
            <legend>Add New Place</legend>
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


                <input id="submit" type="submit" value="Submit for Approval" />
            </form>
        </div>
    );
};

export default EmployeeAddPlace;