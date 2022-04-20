import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const UserConfirmHotel = ({callback }) => {
    
    const [user_id, setUser_id] = useState("");
    const {id: room_id} = useParams();
    //const [room_id, setRoom_id] = useState("");
    const [fromdate, setFromdate] = useState("");
    const [todate, setTodate] = useState("");


    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       
        callback({ user_id: user_id, room_id: room_id, fromdate: fromdate, todate: todate });
        history.push('/user');
    };
    return (
        <>

        <div>

            <form className='form' onSubmit={onSubmit} >

            <legend> Book Your Hotel  </legend>
            <br />

                <label>
                    User ID:
                        <input type="text" name="user_id" value={user_id} onChange={(e) => setUser_id(e.target.value)} />
                </label>
                <br />


                <label>
                    Room ID:
                        <input type="text" name="room_id" value={room_id} readOnly />
                </label>
                <br />

                <label>
                    Check-In
                        <input type="date" name="fromdate" value={fromdate} onChange={(e) => setFromdate(e.target.value)} />
                </label>
                <br />

                <label>
                    Check-Out
                        <input type="date" name="todate" value={todate} onChange={(e) => setTodate(e.target.value)} />
                </label>
                <br />

                <input type="submit" value="Confirm" />
  
            </form>
            </div>
        </>
    );
};

export default UserConfirmHotel;