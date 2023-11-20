// import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMotorcycle, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Secondnav from "./Secondnav.js";
import SearchBar from "./SearchBar.js";
import { useAuth } from './AuthContext.js';

function Nav() {

  const { isLoggedIn, setIsLoggedIn } = useAuth();
  // console.log("Logged in?: ", isLoggedIn);

  const handleSearch = (query) => {
    console.log('Nav.js, Searching for:', query);
  };

  const handleLogout = () => {

    // Perform logout logic here
    setIsLoggedIn(false);
  };


  return (
    <nav className="navbar row" id="first-navbar">

      <div className="row align-items-center">

        <div className="col-3 text-center">
          <Link className="navbar-brand" to="/">
            <h1 className="pt-4">Bikeswale <FontAwesomeIcon icon={faMotorcycle} /> </h1>
          </Link>
        </div>

        <div className="col-5 text-center">
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="col-4 text-center">
          {isLoggedIn ? (
            <>
              <Link className="nav-link" to="/cart">
                <h5> Cart <FontAwesomeIcon icon={faShoppingCart} /></h5>
              </Link>
              <button className="nav-link" onClick={handleLogout}>
                <h5> Logout <FontAwesomeIcon icon={faUser} /></h5>
              </button>
            </>
          ) : (
            <Link className="nav-link" to="/login" id="login">
              <h5> Login <FontAwesomeIcon icon={faUser} /></h5>
            </Link>
          )}
        </div>

      </div>

      <Secondnav />


    </nav>

  )
}
export default Nav;

