import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PaymentGateway = () => {
    const [paymentOption, setPaymentOption] = useState(null);
  
    const handlePaymentOption = (option) => {
      setPaymentOption(option);
      setSelectedOption(option);
    };
  
    const [selectedOption, setSelectedOption] = useState(null);

    return (
      <div className="container mt-5" style={{ maxWidth: '800px' }}>
        <div className="card text-center" /*style={{ boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.15)' }}*/>
          <div className="card-body" style={{ backgroundColor:  'rgb(27, 27, 27)' , color: 'white'}}>
            <h5 className="card-title">How would you like to pay?</h5>
            <br/>
            {/* Payment Options */}
            <div className="row mt-3">
              <div className="col">
                <img
                  src="data:image/png;base64,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"
                  width="200"
                  height="50"
                  alt="PayTM"
                  className={`payment-option ${paymentOption === 'paytm' ? 'selected' : ''}`}
                  onClick={() => handlePaymentOption('paytm')}
                />
              </div>
              <div className="col">
              
                <img
                  src="data:image/png;base64,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"
                  width="200"
                  height="50"
                  alt="Credit Card"
                  className={`payment-option ${paymentOption === 'creditCard' ? 'selected' : ''}`}
                  onClick={() => handlePaymentOption('creditCard')}
                />
              </div>
            </div>
  <br/>
            {/* Personal Information */}
            <div className="mt-3">
              <b>Fill up your personal information</b>
              <br/>
            <br/>
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
  
              <div className="mt-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  required
                />
              </div>
  
              <div className="mt-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Card Number"
                  required
                />
              </div>
  
              <div className="row mt-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Expiration"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="CVC"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ZIP"
                    required
                  />
                </div>
              </div>
  <br/>
              {/* Pay Now Button */}
              <div className="mt-3">
                <button type="submit" class="btn btn-danger"/*className={{color: '#e12918'}}*/>
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default PaymentGateway;
