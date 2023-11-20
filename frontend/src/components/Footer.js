import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarker } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className="text-light py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>About Us</h5>
                        <p>We are Team 450, <br />
                            the designers and developers of <br />
                            Bikeswale - The ultimate bikes destination!</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link className="nav-link" to="/home">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/bikes">
                                    Bikes
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/scooters">
                                    Scooters
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/accessories">
                                    Accessories
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <p>
                            <a href="https://maps.app.goo.gl/YQzeTtscPUgxQ4cG6" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faMapMarker} /> VIT - Chennai, Tamil Nadu, India</a><br />
                            <a href={`tel:${"+91 123-456-7890"}`}><FontAwesomeIcon icon={faPhone} /> +91 123-456-7890</a><br />
                            <a href={`mailto:${"info@bikeswale.com"}`}><FontAwesomeIcon icon={faEnvelope} /> info@bikeswale.com </a><br />
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
