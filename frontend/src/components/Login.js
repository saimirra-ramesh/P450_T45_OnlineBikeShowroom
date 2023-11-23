import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from './AuthContext'; 
import './Signup.css';


function Login() {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    userName: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginData = {
      userName: formData.userName,
      password: formData.password,
    };

    fetch('http://localhost:5555/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log('Server response:', data);
        if (data.success) {
          // console.log('Login successful. Token:', data.token);
          setErrorMessage('');
          setSuccessMessage(data.message);
          login(data.token);
          navigate('/');
        } else {
          setSuccessMessage('');
          setErrorMessage(data.message || 'An error occurred during login.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setErrorMessage('An error occurred during login.');
      });
  };

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
        <form onSubmit={handleSubmit}>
          <div className="input_box">
            <input
              type="text"
              placeholder="  Username"
              required
              value={formData.userName}
              onChange={handleChange}
              name="userName"
            />
            <div className="icon">
              <FontAwesomeIcon icon={faUser} />
            </div>
          </div>

          <div className="input_box">
            <input
              type="password"
              placeholder="  Password"
              required
              value={formData.password}
              onChange={handleChange}
              name="password"
            />
            <div className="icon">
              <FontAwesomeIcon icon={faLock} />
            </div>
          </div>

          <div className="btnloginsignup">
            <input type="submit" value="Login" />
          </div>
          <br />
          <div className="error_message">{errorMessage}</div>
          <div className="option_div">
            <div className="check_box">
              <input type="checkbox" />
              <span style={{ marginLeft: "2vh", }}>Remember me</span>
            </div>
            <div className="forget_div">
              <Link  className="nav-link" to="/forgot-password" id='forgot-password'>Forgot Password?</Link>
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