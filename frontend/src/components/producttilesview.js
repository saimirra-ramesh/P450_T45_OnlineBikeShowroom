import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Nav from './Nav.js';
import { Link, useParams } from 'react-router-dom';

function ProductTilesView() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:5555/products/collection/${category}`);
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
      <div style={{ marginBottom: '50px'}}>
        <Nav />
        <Container >
          <Row xs={1} md={2} lg={4} className="g-4" style = {{marginTop: '40px' }}>
            {products.map((product) => (
              <Col key={product._id}>
                <Card style={{ height: '100%', backgroundColor: 'black', color: 'white', border: '15px solid black'}}>
                  <Link to={`/products/${product._id}`} style={{ textDecoration: 'none',  height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Card.Img variant="top" src={product.imageUrl} style={{ objectFit: 'inherit', height: '60%', minHeight: '220px' }}/>
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>Cost: {product.price} Lakhs</Card.Text>
                      <Button variant = 'dark' size='md' style={{ backgroundColor: 'red', color: 'white' }}>View Product</Button>
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div >
      <div style={{ marginTop: '20px'}}></div>
    </>
  );
}

export default ProductTilesView;
