import React from 'react';
import './Signup.css';

function Signup() {
  return (
    <div className="main_div">
      <h2>Bikeswale</h2>
      <form action="#">
        <div className="input_box">
          <input type="text" placeholder="  First Name" required />
          <div className="icon">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <div className="input_box">
          <input type="text" placeholder="  Last Name" required />
          <div className="icon">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <div className="input_box">
          <input type="email" placeholder="  Email" required />
          <div className="icon">
            <i className="fas fa-envelope"></i>
          </div>
        </div>
        <div className="input_box">
          <input type="tel" placeholder="   sPhone Number" required />
          <div className="icon">
            <i className="fas fa-phone"></i>
          </div>
        </div>
        <div className="input_box">
          <input type="text" placeholder="  Username" required />
          <div className="icon">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <div className="input_box">
          <input type="password" placeholder="  Password" required />
          <div className="icon">
            <i className="fas fa-lock"></i>
          </div>
        </div>
        <div className="input_box">
          <input type="password" placeholder="  Re-enter Password" required />
          <div className="icon">
            <i className="fas fa-lock"></i>
          </div>
        </div>
        <div className="input_box">
          <input type="text" placeholder="  Address" required />
          <div className="icon">
            <i className="fas fa-map-marker"></i>
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
