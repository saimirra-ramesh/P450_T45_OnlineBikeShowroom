// To get search results as a part of the Nav bar itself

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser, faMotorcycle } from "@fortawesome/free-solid-svg-icons";
// import Secondnav from "./Secondnav.js";
// import SearchBar from "./SearchBar.js";
// import ProductView from './ProductView';

// function Nav({ onSearch }) {

//   const [searchResults, setSearchResults] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [query, setQuery] = useState([]);
  
//   const handleSearch = async (query) => {
//     try {
//       const response = await fetch(`http://localhost:5555/products/search?query=${query}`);
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
      
//       setSearchResults(data);
//       setQuery(query);
//       console.log('Search data:', searchResults);
//       console.log('Query: ', query);
//     }
//     catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const handleViewProduct = (product) => {
//     setSelectedProduct(product);
//   };

//   let content;
//   if (searchResults && searchResults.length > 0) {
//     content = (
//       <div id="search-results">
//         <h2 style={{ paddingTop: "15px" }}>Search Results</h2>
//         {searchResults.map((result) => (
//           <div key={result._id}>

//             <button id="search-results" onClick={() => handleViewProduct(result)}>{result.name}</button>

//             {selectedProduct === result && <ProductView product={result} />}
//           </div>
//         ))}
//         <hr />
//       </div>
//     );
//   }
//   else if (query.length > 0) {
//     content = (
//       <div>
//         <div id="search-results">No search results available.</div>
//       </div>
//     );
//   }

//   return (
//     <nav className="navbar row" id="first-navbar">

//       <div className="row align-items-center">
//         <div className="col-3 text-center">
//           <Link className="navbar-brand" to="/">
//             <h1 className="pt-4">Bikeswale <FontAwesomeIcon icon={faMotorcycle} /> </h1>
//           </Link>
//         </div>
//         <div className="col-6 text-center">
//           <SearchBar onSearch={handleSearch} />
//         </div>
//         <div className="col-3 text-center">
//           <Link className="nav-link" to="/login" id="login">
//             <h5> Login <FontAwesomeIcon icon={faUser} /></h5>
//           </Link>
//         </div>
//       </div>

//       <Secondnav />

//       <div id="search-results">
//         {content}
//       </div>

//     </nav>

//   )
// }
// export default Nav;


// To get search results on a separate page

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import Secondnav from "./Secondnav.js";
import SearchBar from "./SearchBar.js";

function Nav() {

  const handleSearch = (query) => {
    console.log('Nav.js, Searching for:', query);
  };

  return (
    <nav className="navbar row" id="first-navbar">

      <div className="row align-items-center">
        <div className="col-3 text-center">
          <Link className="navbar-brand" to="/">
            <h1 className="pt-4">Bikeswale <FontAwesomeIcon icon={faMotorcycle} /> </h1>
          </Link>
        </div>
        <div className="col-6 text-center">
        <SearchBar onSearch={handleSearch} />
        </div>
        <div className="col-3 text-center">
          <Link className="nav-link" to="/login" id="login">
            <h5> Login <FontAwesomeIcon icon={faUser} /></h5>
          </Link>
        </div>
      </div>

      <Secondnav />


    </nav>

  )
}
export default Nav;

