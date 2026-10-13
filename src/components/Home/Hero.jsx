import { useEffect, useRef } from 'react';
import { Carousel } from 'bootstrap';
import './Hero.css';
import development from '../../assets/Home_Img/hero/development.jpeg';
import digital from '../../assets/Home_Img/hero/digital.jpeg';
import provideit from '../../assets/Home_Img/hero/provideit.jpeg';
import budget from '../../assets/Home_Img/hero/budget.jpeg';

function Hero() {
  const carouselRef = useRef(null);

  useEffect(() => {
  let carouselInstance;

  if (carouselRef.current) {
    carouselInstance = new Carousel(carouselRef.current, {
      interval: 5000,
      ride: 'carousel',
      pause: false,
    });
  }

  return () => {
    if (carouselInstance) {
      carouselInstance.dispose();
    }
  };
}, []);

  return (
    <div
      id="heroCarousel"
      ref={carouselRef}
      className="carousel slide hero-section"
    >
      <div className="carousel-inner">

        <div className="carousel-item active">
          <div className="hero-slide-bg" style={{ backgroundImage: `url(${budget})` }}>
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <h1>THE <span className="highlight">BEST</span> WEB DEVELOPMENT COMPANY</h1>
              <p>Delivering exceptional website development with innovative design, flawless functionality, and results-driven performance tailored to elevate your brand online.</p>
              <div className="hero-buttons">
                <button className="btn-primary">Start Your Project</button>
                <button className="btn-secondary">Our Portfolio</button>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="hero-slide-bg" style={{ backgroundImage: `url(${development})` }}>
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <h1>CREATIVE <span className="highlight">DIGITAL</span> MARKETING COMPANY</h1>
              <p>Boost your online presence with SEO, social media, and result-driven digital marketing strategies built for growth.</p>
              <div className="hero-buttons">
                <button className="btn-primary">Grow My Business</button>
                <button className="btn-secondary">Marketing Plans</button>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="hero-slide-bg" style={{ backgroundImage: `url(${digital})` }}>
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <h1>BUILD YOUR <span className="highlight">DREAM</span> MOBILE APP</h1>
              <p>From concept to launch, we design and develop mobile apps that are fast, reliable, and user-friendly.</p>
              <div className="hero-buttons">
                <button className="btn-primary">Get IT  Consultation</button>
                <button className="btn-secondary">Our Portfolio</button>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="hero-slide-bg" style={{ backgroundImage: `url(${provideit})` }}>
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <h1>BUDGET-<span className="highlight">FRIENDLY</span> IT SOLUTIONS</h1>
              <p>Get high-quality, scalable IT solutions that fit your budget without compromising on performance or reliability.</p>
              <div className="hero-buttons">
                <button className="btn-primary">Request a Quote</button>
                <button className="btn-secondary">Our Solution</button>
              </div>
            </div>
          </div>
        </div>

      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Hero;