import { useState } from "react";
import { useHistory } from 'react-router-dom';
import './Admin.css';


const AdminPackageStatus = ({list, callback})=>{

    const [place, setPlace] = useState("");
    const [status, setStatus] = useState("");

    const [placeErr, setPlaceErr] = useState("");
    const [statusErr, setStatusErr] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        if(place != "" && status != "" ) 
        {
            setPlaceErr("")
            setStatusErr("")
       
            callback({place: place, status: status});
            

        }
        
        else{
            
            if(place == "")
                setPlaceErr("Please Select a place");
            else
                setPlaceErr("")

            if(status == "")
                setStatusErr("Please Select a status");
            else
                setStatusErr("")
        }

    };
    
    return(
        <>

            <div id="registration-form">
                <div className='fieldset'>
                    <legend>Package Status</legend>
                    <form className='form' onSubmit={onSubmit}>

                        <label for="title">Select Status:</label>

                            <select name="place" id="place" onChange={(e) => setPlace(e.target.value)}>
                                <option value=""></option>


                            {
                                list.map((packageS)=>(

                                    
                                    <option value={packageS.place}>{packageS.place}</option>
                                
                                ))
                            }

                            </select>
                            <p style={{color: "red"}}>{placeErr}</p>


                            <br/>
                            <br/>

                            <label for="status">Status:</label>
                            <select name="status" id="status" onChange={(e) => setStatus(e.target.value)}>
                                
                                <option value=""></option>
                                <option value="Upcoming">Upcoming</option>
                                <option value="Completed">Completed</option>
                                
                            </select>
                            <p style={{color: "red"}}>{statusErr}</p>


                            <br/>
                            <br/>

                        <input type="submit" value="Submit"/>
                        <br/>

                    </form> 
                </div>
            </div>

        </>
    );
}

export default AdminPackageStatus;