import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Nav from './Nav.js';
import ProductView from './ProductView.js';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';

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
      console.log('SearchResultPage.js, Search data:', data);
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
        <Container>
          <Row xs={1} md={2} lg={4} className="g-4">
            {searchResults.map((result) => (
              <Col key={result._id} xs={12} md={6} lg={3}>
                <Card
                  style={{
                    height: '100%',
                    backgroundColor: 'black',
                    color: 'white',
                    border: '15px solid black',
                    marginBottom: '20px', 
                  }}
                  onClick={() => handleViewProduct(result)}
                >
                  <Card.Img
                    variant="top"
                    src={result.imageUrl}
                    style={{ objectFit: 'cover', height: '60%', minHeight: '150px' }}
                  />
                  <Card.Body>
                    <Card.Title>{result.name}</Card.Title>
                    <Card.Text>Cost: {result.price} Lakhs</Card.Text>
                    <p></p>
                    <Button variant="dark" style={{ backgroundColor: 'red', color: 'white' }} onClick={() => handleViewProduct(result)}>
                      View Product
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
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
