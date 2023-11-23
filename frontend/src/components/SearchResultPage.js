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
    navigate(`/products/${product._id}`);
  };

  let content;
  if (searchResults && searchResults.length > 0) {
    content = (
      <Container className="d-flex justify-content-center align-items-center">
        <div style={{ marginBottom: '50px', marginTop: '20px'}}>
          <h2 className='pt-4' style={{paddingBottom: '20px' }}>Search Results</h2>
          <Row xs={1} md={2} lg={2} className="g-4">
            {searchResults.map((result) => (
              <Col key={result._id}>
                <Card style={{ height: '100%', backgroundColor: 'black', color: 'white', border: '15px solid black' }}>
                  <div onClick={() => handleViewProduct(result)} style={{ cursor: 'pointer' }}>
                    <Card.Img variant="top" src={result.imageUrl} style={{ objectFit: 'cover', height: '60%', minHeight: '220px', maxHeight: '300px'}} />
                    <Card.Body>
                      <Card.Title>{result.name}</Card.Title>
                      <Card.Text>Cost: {result.price} Lakhs</Card.Text>
                      <Button variant="dark" style={{ backgroundColor: 'red', color: 'white' }}>
                        View Product
                      </Button>
                    </Card.Body>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
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
