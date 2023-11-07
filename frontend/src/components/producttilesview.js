//import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
function ProductTilesView() {
    return (/*
        <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Filter
          </button>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col md={4}">
          <div className="card h-100">
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSnA0-MDs8HVKSS9AAlXbCWNFlZK1QNOJ9BodgSZNDx1rh-v74I" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div className="col md={4}">
          <div className="card h-100">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgBBCloWL3qqcbqsMwwH7ea3cyXsVB4IpadKaaWNG_tyhtw-BN" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div className="col md={4}">
          <div className="card h-100">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgBBCloWL3qqcbqsMwwH7ea3cyXsVB4IpadKaaWNG_tyhtw-BN" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
      </>*/
      <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="https://www.google.com/">Royal Enfield Bike Catalogue</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Filter By Price
          </button>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="https://www.google.com/">Below 2 Lakhs</a></li>
            <li><a class="dropdown-item" href="https://www.google.com/">2 - 3 Lakhs</a></li>
            <li><a class="dropdown-item" href="https://www.google.com/">Above 3 Lakhs</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <br></br>
  <br></br>
</nav>
      <Container>
      <Row xs={1} md={2} lg={3} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src="https://d1mm9h6qsl0np.cloudfront.net/images/bike-image-sell-banner-HP-mobv1.webp" />
            <Card.Body>
              <Card.Title>Royal Enfield Classic 350</Card.Title>
              <Card.Text>Cost : 1.5 Lakhs</Card.Text>
              <Button variant="dark">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/201911/Classic_350_3_Classic_Black-x666.JPG?EYSp3dx2rxaz677ruF8D6mIAsj_20JLK?size=750:*" />
            <Card.Body>
              <Card.Title>Royal Enfield Bullet 350</Card.Title>
              <Card.Text>Cost : 2 Lakhs</Card.Text>
              <Button variant="dark">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://mc.webpcache.epapr.in/mcms.php?size=large&in=https://mcmscache.epapr.in/post_images/website_300/post_18205198/thumb.jpeg" />
            <Card.Body>
              <Card.Title>Royal Enfield Interceptor 650</Card.Title>
              <Card.Text>Cost : 2.5 Lakhs</Card.Text>
              <Button variant="dark">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://akm-img-a-in.tosshub.com/indiatoday/images/photogallery/202005/KS_-_Bullet_Silver_IT_1588576816358.png?VersionId=IGepkMztH8xEcViOeFk69It4.geCbWq3" />
            <Card.Body>
              <Card.Title>Royal Enfield Himalayan</Card.Title>
              <Card.Text>Cost : 3.5 Lakhs</Card.Text>
              <Button variant="dark">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://compare.pricesofindia.com/src/bikes/royal-enfield/bullet-350/th-Royal-Enfield-Bullet-350-Electra-Available-Colors-Silver.jpg" />
            <Card.Body>
              <Card.Title>Royal Enfield Continental GT</Card.Title>
              <Card.Text>Cost : 4 Lakhs</Card.Text>
              <Button variant="dark">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://imgd.aeplcdn.com/1056x594/n/cw/ec/101487/classic-350-2021-right-side-view-3.jpeg?isig=0&q=75" />
            <Card.Body>
              <Card.Title>Royal Enfield Meteor</Card.Title>
              <Card.Text>DCost : 1.7 Lakhs</Card.Text>
              <Button variant="dark">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
    );
  }
  
  export default ProductTilesView;
  