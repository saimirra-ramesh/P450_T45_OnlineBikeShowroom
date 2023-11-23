// import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMotorcycle, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Secondnav from "./Secondnav.js";
import SearchBar from "./SearchBar.js";
import { useAuth } from './AuthContext.js';

function Nav() {

  const { isLoggedIn, setIsLoggedIn, logout } = useAuth();

  const handleSearch = (query) => {
    console.log('Nav.js, Searching for:', query);
  };

  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
  };


  return (
    <nav className="navbar row" id="first-navbar">

      <div className="row align-items-center">

        <div className="col-lg-3 col-md-4 col-sm-12 text-center">
          <Link className="navbar-brand" to="/">
            <h1 className="pt-4">Bikeswale <FontAwesomeIcon icon={faMotorcycle} /> </h1>
          </Link>
        </div>

        <div className="col-lg-5 col-md-4 col-sm-12 text-center" id="nav-search-bar">
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="col-lg-2 col-md-2 col-sm-12 text-center">
          <Link className="nav-link" to="/cart" id="cart">
            <h5> Cart <FontAwesomeIcon icon={faShoppingCart} /></h5>
          </Link>
        </div>

        {isLoggedIn ? (
          <>

            <div className="col-lg-2 col-md-2 col-sm-12 text-center">
              <button className="nav-link" onClick={handleLogout} id="logout">
                <h5> Logout <FontAwesomeIcon icon={faUser} /></h5>
              </button>
            </div>
          </>
        ) : (
          <div className="col-lg-2 col-md-2 col-sm-12 text-center">
            <Link className="nav-link" to="/login" id="login">
              <h5> Login <FontAwesomeIcon icon={faUser} /></h5>
            </Link>
          </div>
        )}



      </div>

      <Secondnav />


    </nav>

  )
}
export default Nav;

