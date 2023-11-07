import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'; 
import './Login.css';

function Login() {
  return (
    <div className="main_div">
      <h2>Bikeswale</h2>
      <form action="#">
        <div className="input_box">
          <input type="text" placeholder="  Username" required />
          <div className="icon">
            <FontAwesomeIcon icon={faUser} /> {/* Font Awesome icon for user */}
          </div>
        </div>
        <div className="input_box">
          <input type="password" placeholder="  Password" required />
          <div className="icon">
            <FontAwesomeIcon icon={faLock} /> {/* Font Awesome icon for lock */}
          </div>
        </div>
        <div className="input_box button">
          <input type="submit" value="Login" />
        </div>
        <br />
        <div className="option_div">
          <div className="check_box">
            <input type="checkbox" />
            <span>Remember me</span>
          </div>
          <div className="forget_div">
            <a href="#">Forgot Password?</a>
          </div>
        </div>
        <br />
        <div className="sign_up">
          Don't have an account? <a href="./Signup.js">Sign up here!</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
