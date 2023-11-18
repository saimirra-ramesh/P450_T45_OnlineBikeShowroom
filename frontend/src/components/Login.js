import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faMotorcycle } from '@fortawesome/free-solid-svg-icons';
// import './Login.css';
import './Signup.css';

function Login() {
  return (

    <div>
      <div>
        <nav className="navbar row">
          <div className="align-items-center">
              <Link className="navbar-brand" to="/">
                <h1 className="pt-3">Bikeswale <FontAwesomeIcon icon={faMotorcycle} /> </h1>
              </Link>
          </div>
        </nav>
      </div>
      <div className="main_div">
        <h2>Bikeswale</h2>
        <form action="#">
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
          <div className="btnloginsignup">
            <input  type="submit" value="Login" />
          </div>
          <br />
          <div className="option_div">
            <div className="check_box">
              <input type="checkbox" />
              <span style={{ marginLeft: "2vh", }}>Remember me</span>
            </div>
            <div className="forget_div">
              <a href="#">Forgot Password?</a>
            </div>
          </div>
          <br />
          <div className="sign_up">
            Don't have an account?
            <Link className="nav-link" to="/signup" id="signup">
              Sign up here!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
