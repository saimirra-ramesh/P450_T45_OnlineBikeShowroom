import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faLock, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import './Signup.css';

function Signup() {
  return (
    <div className="main_div">
      <h2>Bikeswale</h2>
      <form action="#">
        <div className="input_box">
          <input type="text" placeholder="  First Name" required />
          <div className="icon">
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
        <div className="input_box">
          <input type="text" placeholder="  Last Name" required />
          <div className="icon">
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
        <div className="input_box">
          <input type="email" placeholder="  Email" required />
          <div className="icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
        </div>
        <div className="input_box">
          <input type="tel" placeholder="   Phone Number" required />
          <div className="icon">
            <FontAwesomeIcon icon={faPhone} />
          </div>
        </div>
        <div className="input_box">
          <input type="text" placeholder="  Username" required />
          <div className="icon">
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
        <div className="input_box">
          <input type="password" placeholder="  Password" required />
          <div className="icon">
            <FontAwesomeIcon icon={faLock} />
          </div>
        </div>
        <div className="input_box">
          <input type="password" placeholder="  Re-enter Password" required />
          <div className="icon">
            <FontAwesomeIcon icon={faLock} />
          </div>
        </div>
        <div className="input_box">
          <input type="text" placeholder="  Address" required />
          <div className="icon">
            <FontAwesomeIcon icon={faMapMarker} />
          </div>
        </div>
        <div className="input_box button">
          <input type="submit" value="Sign Up" />
        </div>
        <br />
        <div className="sign_up">
          Head to the <a href="./Login.js">Login Page!</a>
        </div>
      </form>
    </div>
  );
}

export default Signup;
