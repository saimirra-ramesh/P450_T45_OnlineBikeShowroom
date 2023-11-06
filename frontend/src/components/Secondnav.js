import { Link } from "react-router-dom";
import {useState} from "react";
import "./Secondnav.css";

function SecondNav() {
    return (
        <nav className="navbar bg-secondary row">
            

                <div className="col-2 text-center">
                    <div className="dropdown">
                        <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Bikes
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Link className="dropdown-item" to="/item1">
                                New Bikes
                            </Link>
                            <Link className="dropdown-item" to="/item2">
                                Upcoming Bikes
                            </Link>
                            <Link className="dropdown-item" to="/item2">
                                Showrooms
                            </Link>
                            <Link className="dropdown-item" to="/item2">
                                Service Centers
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-2 text-center">
                    <div className="dropdown">
                        <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Super Bikes
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Link className="dropdown-item" to="/item1">
                                New Super Bikes
                            </Link>
                            <Link className="dropdown-item" to="/item2">
                                Upcoming Super Bikes
                            </Link>
                            <Link className="dropdown-item" to="/item2">
                                Showrooms
                            </Link>
                            <Link className="dropdown-item" to="/item2">
                                Service Centers
                            </Link>
                        </div>
                    </div>
                </div>


                <div className="col-2 text-center">
                    <div className="dropdown">
                        <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Scooters
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Link className="dropdown-item" to="/item1">
                                New Scooters
                            </Link>
                            <Link className="dropdown-item" to="/item2">
                                Upcoming Scooters
                            </Link>
                            <Link className="dropdown-item" to="/item2">
                                Electric Scooters
                            </Link>
                            <Link className="dropdown-item" to="/item2">
                                Showrooms
                            </Link>
                            <Link className="dropdown-item" to="/item2">
                                Service Centers
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-2 text-center">
                    <div className="dropdown">
                        <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Used Bikes
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Link className="dropdown-item" to="/item1">
                                Sell Used Bikes
                            </Link>
                            <Link className="dropdown-item" to="/item2">
                                Buy Used Bikes
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-2 text-center">
                    <div>
                        <button
                            className="btn btn-secondary"
                            type="button"
                            id="MenuButton"
                        >
                            Sell Bike
                        </button>
                    </div>
                </div>


                <div className="col-2 text-center">
                    <div>
                        <button
                            className="btn btn-secondary"
                            type="button"
                            id="MenuButton"
                        >
                            Compare
                        </button>
                    </div>
                </div>


        
        
        </nav >
    );
}

export default SecondNav;
