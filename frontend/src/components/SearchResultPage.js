import { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Nav from './Nav.js';
import ProductView from './ProductView.js';

function SearchResultPage({ onSearch }) {
  const [searchResults, setSearchResults] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [query, setQuery] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = useCallback(async (query) => {
    try {
      const response = await fetch(`http://localhost:5555/products/search?query=${query}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      setSearchResults(data);
      setQuery(query);
      console.log('SearchResultPage.js, Search data:', data); // Using the 'data' variable directly
      console.log('SearchResultPage.js, Query Received: ', query);
    } catch (error) {
      console.error("SearchResultPage.js, Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get('query');
    if (searchQuery) {
      handleSearch(searchQuery);
    }
  }, [location.search, handleSearch]);

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
    // Navigate to the selected product using the product ID in the URL
    navigate(`/products/${product._id}`);
  };

  let content;
  if (searchResults && searchResults.length > 0) {
    content = (
      <div id="search-results">
        <h2 style={{ paddingTop: "15px" }}>Search Results</h2>
        {searchResults.map((result) => (
          <div key={result._id}>
            <button id="search-results" onClick={() => handleViewProduct(result)}>
              {result.name}
            </button>
            {selectedProduct === result && <ProductView product={result} />}
          </div>
        ))}
        <hr />
      </div>
    );
  } else if (query.length > 0) {
    content = (
      <div>
        <div id="search-results">No search results available.</div>
      </div>
    );
  }

  return (
    <div>
      <Nav />
      <div>{content}</div>
    </div>
  );
}

export default SearchResultPage;
