import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const UserReview = ({ status, callback }) => {
   
    const [service_id, setService_id] = useState("");
    const [service_type, setService_type] = useState("");
    const [company, setCompany] = useState("");
    const [user_id, setUser_id] = useState("");
    const [rating, setRating] = useState("");
    const [msg, setMsg] = useState("");

    

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       
        callback({ service_id: service_id, service_type: service_type, company: company, user_id: user_id, rating: rating, msg: msg });
        history.push('/user');
    };
    return (
        <>
        <div>

            <form className='form' onSubmit={onSubmit} >

            <legend> Give Review </legend>
            <br />


                <label>
                    Service ID:
                    <input type="text" name="service_id" value={service_id} onChange={(e) => setService_id(e.target.value)} />
                </label>
                <br />


                <label>
                Service Type: 
                    <select value={service_type} onChange={(e) => setService_type(e.target.value)}>
                        <option value="hotel">Hotel</option>
                        <option value="car">Car</option>
                        <option value="flight">Flight</option>
                    </select>
                </label>
                <br />

                <label>
                Company Name :
                    <input type="text" name="company" value={company} onChange={(e) => setCompany(e.target.value)} />
                </label>
                <br />

                <label>
                User ID :
                    <input type="text" name="user_id" value={user_id} onChange={(e) => setUser_id(e.target.value)} />
                </label>
                <br />


                <label>
                Rating: 
                    <select value={rating} onChange={(e) => setRating(e.target.value)}>
                        <option value="*****">*****</option>
                        <option value="****">****</option>
                        <option value="***">***</option>
                        <option value="**">**</option>
                        <option value="*">*</option>
                    </select>
                </label>
                <br />
                
                <label>
                   Message:
                   <textarea value={msg} onChange={(e) => setMsg(e.target.value)} rows="5" cols="80"/>
                </label>


                <input type="submit" value="Give Review" />
                
            </form>
            </div>
        
        </>
    );
};

export default UserReview;