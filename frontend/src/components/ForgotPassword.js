import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Signup.css';
import Nav from './Nav.js';
import axios from 'axios';


function ForgotPassword() {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const forgotPasswordData = {
      userName: formData.userName,
      email: formData.email,
    };

    axios.post('http://localhost:5555/auth/forgot-password', forgotPasswordData)
    .then((response) => {
      const data = response.data;
      setIsLoading(false);
      if (data.success) {
        setErrorMessage('');
        setSuccessMessage('Password reset email has been sent. Please check your email for further instructions.');
        // Add logic here to send an email with a reset password link
      } else {
        setSuccessMessage('');
        setErrorMessage(data.message || 'An error occurred during password recovery.');
      }
    })
    .catch((error) => {
      setIsLoading(false);
      console.error('Error:', error);
      setErrorMessage('An error occurred during password recovery.');
    });
  };

  return (
    <div> 
    <Nav />
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
            type="email"
            placeholder="  Email"
            required
            value={formData.email}
            onChange={handleChange}
            name="email"
          />
          <div className="icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
        </div>

        <div className="btnloginsignup">
        <input type="submit" value={isLoading ? "Recovering..." : "Recover Password"} disabled={isLoading} />
        </div>
        <br />
        <div className="error_message">{errorMessage}</div>
        <div className="success_message">{successMessage}</div>
        <br />
        <div className="sign_up">
          Remember your password?
          <Link className="nav-link" to="/login" id="signup">
            Login here!
          </Link>
        </div>
      </form>
    </div>
    </div>
  );
}
export default ForgotPassword;
