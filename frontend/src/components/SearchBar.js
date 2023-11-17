// To get search results as a part of the Nav bar itself

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// const SearchBar = ({ onSearch }) => {
//   const [query, setQuery] = useState('');

//   const handleInputChange = (e) => {
//     setQuery(e.target.value);
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     onSearch(query);
//     console.log(query);
//   };

//   return (

//     <form className="input-group" onSubmit={handleSearch}>
//       <input type="text" className="form-control" placeholder="Search" value={query} onChange={handleInputChange} />
      
//       {/* <Link className="nav-link" to="/login" id="login"> */}
//        <button className="btn" type="submit" id="search">
//         <FontAwesomeIcon icon={faMagnifyingGlass} />
//       </button>     
//       {/* </Link> */}
//     </form>

//   )
// };

// export default SearchBar;


// To get search results on a separate page

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
    console.log("SearchBar.js, Query: ", query);
    navigate(`/search-results?query=${query}`);
  };

  return (

    <form className="input-group" onSubmit={handleSearch}>
      <input type="text" className="form-control" placeholder="Search" value={query} onChange={handleInputChange} />
       <button className="btn" type="submit" id="search">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>     
    </form>

  )
};

export default SearchBar;
