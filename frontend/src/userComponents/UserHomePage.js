import {Link} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './UserHome.css';
import { useState } from "react";
import { useHistory } from 'react-router-dom';

const UserHomePage = ({callback})=>{

    const [src_hotel, setSrc_hotel] = useState("");

    

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       
        callback({ id: src_hotel});
        history.push(`/user/show_hotels/${src_hotel}`);
    };

    return(
                <>

                    <div class="wrap">
                    <div class="search">

                    <form onSubmit={onSubmit} >

                        <input type="text" class="searchTerm" value={src_hotel} onChange={(e) => setSrc_hotel(e.target.value)} />

                        <button type="submit" class="searchButton">
                            <i class="fa fa-search"></i>
                        </button>

                    </form>

                    </div>
                    </div>


                    <div class="biscuits">
                            <a href="/user/flight_list" class="button"><i class="fa fa-plane"></i> Find Flight</a>
                            <a href="/user/Car_list" class="button"><i class="fa fa-car"></i> Find Car</a>
                    </div>

                     
                </>
            );
        }

export default UserHomePage;