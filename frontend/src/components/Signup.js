import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faLock, faMapMarker, faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import './Signup.css';

function Signup() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    userName: '',
    password: '',
    confirmPassword: '',
    address: '',
    tokens: []
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
    if (formData.phoneNumber.length !== 10) {
      setErrorMessage('Phone number must be a 10-digit number.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    const signupData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      userName: formData.userName,
      password: formData.password,
      address: formData.address,
    };

    console.log('Signup Data:', signupData);
    
    // Send a POST request to your backend
   // Send a POST request to your backend
   fetch('http://localhost:5555/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(signupData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Server Response:', data);

      if (data.success) {
        // Clear the form fields upon successful signup
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          userName: '',
          password: '',
          confirmPassword: '',
          address: '',
          tokens: []
        });
        
        setErrorMessage('');
        setSuccessMessage(data.message);

        setTimeout(() => {
          navigate('/');
        }, 0); 
      } 
      
      else {
        // Display error message from the server
        setSuccessMessage('');
        setErrorMessage(data.error);
      }
    })

    .catch((error) => {
      console.error('Error:', error);
      // Display a generic error message
      setSuccessMessage('');
      setErrorMessage('An error occurred during signup.');
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
            <input type="text" placeholder="  First Name" required
              value={formData.firstName}
              onChange={handleChange}
              name="firstName" />
            <div className="icon">
              <FontAwesomeIcon icon={faUser} />
            </div>
          </div>

          <div className="input_box">
            <input type="text" placeholder="  Last Name" required
              value={formData.lastName}
              onChange={handleChange}
              name="lastName" />
            <div className="icon">
              <FontAwesomeIcon icon={faUser} />
            </div>
          </div>

          <div className="input_box">
            <input type="email" placeholder="  Email" required
              value={formData.email}
              onChange={handleChange}
              name="email" />
            <div className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
          </div>

          <div className="input_box">
            <input type="tel" placeholder="  Phone Number" required
              value={formData.phoneNumber}
              onChange={handleChange}
              name="phoneNumber" />
            <div className="icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>
          </div>

          <div className="input_box">
            <input type="text" placeholder="  Username" required
              value={formData.userName}
              onChange={handleChange}
              name="userName" />  
            <div className="icon">
              <FontAwesomeIcon icon={faUser} />
            </div>
          </div>

          <div className="input_box">
            <input type="password" placeholder="  Password" required
              value={formData.password}
              onChange={handleChange}
              name="password" />
            <div className="icon">
              <FontAwesomeIcon icon={faLock} />
            </div>
          </div>

          <div className="input_box">
            <input type="password" placeholder="  Re-enter Password" required 
            value={formData.confirmPassword}
            onChange={handleChange}
            name="confirmPassword"/>
            <div className="icon">
              <FontAwesomeIcon icon={faLock} />
            </div>
          </div>

          <div className="input_box">
            <input type="text" placeholder="  Address" required
              value={formData.address}
              onChange={handleChange}
              name="address" />
            <div className="icon">
              <FontAwesomeIcon icon={faMapMarker} />
            </div>
          </div>

          <div className="btnloginsignup">
            <input type="submit" value="Sign Up" />
          </div>
          <br />
          <div className="error_message">{errorMessage}</div>
          <div className="sign_up">
            <Link className="nav-link" to="/login" id="login">
              Login Page!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;

