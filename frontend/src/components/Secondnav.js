import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function SecondNav() {

    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 105) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarClasses = isFixed ? 'navbar-fixed' : 'navbar';

    return (
        <nav className={`row ${navbarClasses}`} id="second-navbar">

            <div className="col-2 text-center">
                <div className="dropdown">
                    <button
                        className="btn dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        Bikes
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link className="dropdown-item" to="/products/collection/bikes"onClick={() => {
                            setTimeout(() => {
                                window.location.reload();
                            }, 500);
                        }}>
                            View Bikes
                        </Link>
                        <Link className="dropdown-item" to="/products/collection/bikeaccessories"onClick={() => {
                            setTimeout(() => {
                                window.location.reload();
                            }, 500);
                        }}>
                            Accessories
                        </Link>
                    </div>
                </div>
            </div>

            <div className="col-2 text-center">
                <div className="dropdown">
                    <button
                        className="btn dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        Super Bikes
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link className="dropdown-item" to="/products/collection/superbikes" 
                            onClick={() => {
                            setTimeout(() => {
                                window.location.reload();
                            }, 500);
                        }}>
                            View Super Bikes
                        </Link>
                        <Link className="dropdown-item" to="/products/collection/bikeaccessories"onClick={() => {
                            setTimeout(() => {
                                window.location.reload();
                            }, 500);
                        }}>
                            Accessories
                        </Link>
                    </div>
                </div>
            </div>


            <div className="col-2 text-center">
                <div className="dropdown">
                    <button
                        className="btn dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        Scooters
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link className="dropdown-item" to="/products/collection/scooters"onClick={() => {
                            setTimeout(() => {
                                window.location.reload();
                            }, 500);
                        }}>
                            View Scooters
                        </Link>
                        <Link className="dropdown-item" to="/products/collection/bikeaccessories"onClick={() => {
                            setTimeout(() => {
                                window.location.reload();
                            }, 500);
                        }}>
                            Accessories
                        </Link>
                    </div>
                </div>
            </div>

            {/* <div className="col-2 text-center">
                    <div className="dropdown">
                        <button
                            className="btn dropdown-toggle"
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
                            className="btn"
                            type="button"
                            id="MenuButton"
                        >
                            Sell Bikes
                        </button>
                    </div>
                </div> */}


            <div className="col-2 text-center">
                <div>
                    <button
                        className="btn"
                        type="button"
                        id="MenuButton"
                        onClick={() => { window.location.href = '#/compare'; }}
                    >
                        Compare
                    </button>
                </div>
            </div>

        </nav >
    );
}

export default SecondNav;
