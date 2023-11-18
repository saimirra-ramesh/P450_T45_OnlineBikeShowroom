import Nav from './Nav.js';

function Home() {
    return (
        <div className="HomePage">
            <Nav/>
            <div id="carouselIndicators" className="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/images/interceptor_650_home.jpg" className="d-block w-100" alt="bike0" />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/assured-buyback.jpg" className="d-block w-100" alt="bike1" />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/meteor-350-banner.jpg" className="d-block w-100" alt="bike2" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
export default Home;