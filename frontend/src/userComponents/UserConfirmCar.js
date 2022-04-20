import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import './UserForm.css';

const UserConfirmFlight = ({ status, callback }) => {
    const {id: car_id} = useParams();
    const [user_id, setUser_id] = useState("");
    //const [car_id, setCar_id] = useState("");
    const [fromloc, setFromloc] = useState("");
    const [toloc, setToloc] = useState("");
    const [fromdate, setFromdate] = useState("");
    const [todate, setTodate] = useState("");

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       
        callback({ user_id: user_id, car_id: car_id, fromloc: fromloc, toloc: toloc, fromdate: fromdate, todate: todate });
        history.push('/user');
    };
    return (
        <>
        <div>
            
        <form className='form' onSubmit={onSubmit} >
            
            <legend> Book Your Ride  </legend>
            <br />

                <label>
                User ID:
                    <input type="text" name="user_id" value={user_id} onChange={(e) => setUser_id(e.target.value)} />
                </label>
                <br />

                <label>
                Car ID:
                    <input type="text" name="car_id" value={car_id} readOnly />
                </label>
                <br />

                <label>
                From:
                    <input type="text" name="fromloc" value={fromloc} onChange={(e) => setFromloc(e.target.value)} />
                </label>
                <br />

                <label>
                To:
                    <input type="text" name="toloc" value={toloc} onChange={(e) => setToloc(e.target.value)} />
                </label>
                <br />

                <label>
                Check-In:
                    <input type="date" name="fromdate" value={fromdate} onChange={(e) => setFromdate(e.target.value)} />
                </label>
                <br />

                <label>
                Check-Out:
                    <input type="date" name="fromdate" value={todate} onChange={(e) => setTodate(e.target.value)} />
                </label>
                <br />
               
                <input type="submit" value="Confirm" id="button-blue" />
                
             </form>
            
        </div>
        </>
    );
};

export default UserConfirmFlight;