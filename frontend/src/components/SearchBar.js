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
    navigate(`/search-results?query=${query}`);
  };

  return (

    <form className="input-group" onSubmit={handleSearch} id="nav-search-bar">
      <input type="text" className="form-control" placeholder="Search" value={query} onChange={handleInputChange} />
       <button className="btn" type="submit" id="search">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>     
    </form>

  )
};

export default SearchBar;
