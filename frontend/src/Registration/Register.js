import {Link} from 'react-router-dom';
import './css/reg-style.css';


const Register = ()=>{
   
    return(
        <div className="main"> 
        <div className="container">
            <div className="signup-content">
                <div className="signup-img">
                    <img src={process.env.PUBLIC_URL + "/images/mainregform.jpg"}/>
                </div>
                    <div className="signup-form">
                        <form className="register-form" id="register-form">
                         <h1><center>Welcome To Registration Form </center></h1>
                         <br />
                            <div className="signup-form">
                                 <div className="form-group">
                                    <div className="form-select">
                                        <label for="service"><h4> Choose Option :</h4></label>
                                        <br />
                                            <div className="regtype">
                                                <Link to="/user/registration" className='edit-button'>User Registration</Link>
                                            </div>
                                            <br />
                                            <div className="regtype">
                                                <Link to="/hotelreg" className='edit-button'>Hotel Service</Link>
                                            </div>
                                            <br />
                                            <div className="regtype">
                                                <Link to="/transportreg" className='edit-button'>Transport Service</Link>
                                            </div>
                                            <br />
                                    </div>
                                </div>          
                            </div>
                        </form>   
                    </div>
            </div>
        </div>
    </div>
        
    );
};

export default Register;