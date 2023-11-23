// import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMotorcycle, faShoppingCart, faLock } from "@fortawesome/free-solid-svg-icons";
import Secondnav from "./Secondnav.js";
import SearchBar from "./SearchBar.js";
import { useAuth } from './AuthContext.js';
import { Dropdown } from 'react-bootstrap';
import { FaEllipsisV } from 'react-icons/fa';

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

        

        {isLoggedIn ? (
 <div id='login' className="col-lg-2 col-md-2 col-sm-12 text-center d-flex align-items-end justify-content-center">
 <h5 style={{ marginRight: '10px', marginBottom: '0' }}>Hello, there!</h5>
 <Dropdown id='login' style={{ backgroundColor: 'rgb(39,39,39)', marginLeft: '10px' }}>
   <Dropdown.Toggle variant="success" id="dropdown-basic" as={FaEllipsisV} />
   <Dropdown.Menu>
     <Dropdown.Item href="#/admin">Admin</Dropdown.Item>
     <Dropdown.Item href="#/cart">Cart</Dropdown.Item>
     <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
   </Dropdown.Menu>
 </Dropdown>
</div>


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

