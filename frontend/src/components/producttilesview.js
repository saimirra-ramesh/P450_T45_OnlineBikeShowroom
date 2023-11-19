import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Nav from './Nav.js';
import { Link } from 'react-router-dom';

function ProductTilesView() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5555/products');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div>
        <Nav />
        <Container>
          <Row xs={1} md={2} lg={3} className="g-4">
            {products.map((product) => (
              <Col key={product._id}>
                <Card>
                  <Link to={`/products/${product._id}`} style={{ textDecoration: 'none' }}>
                    <Card.Img variant="top" src={product.imageUrl} />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>Cost: {product.price} Lakhs</Card.Text>
                      <Button variant="dark">View Product</Button>
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ProductTilesView;
