import './About.css';
import aboutImg from '../../assets/Home_Img/about.img/team.jpeg';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';

function About() {
  const [count, setCount] = useState(0);
  const badgeRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            let start = 0;
            const end = 15;
            const duration = 1200; // ms
            const stepTime = Math.max(Math.floor(duration / end), 30);

            const timer = setInterval(() => {
              start += 1;
              setCount(start);
              if (start >= end) {
                clearInterval(timer);
              }
            }, stepTime);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (badgeRef.current) {
      observer.observe(badgeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section">
      <div className="about-container">

        {/* Left - Image */}
        <Reveal direction="left" className="about-image-wrap">
          <img src={aboutImg} alt="Websofy Team" className="about-image" />
          <div className="experience-badge" ref={badgeRef}>
            <span className="exp-number">{count}+</span>
            <span className="exp-text">Years Experience</span>
          </div>
        </Reveal>

        {/* Right - Content */}
        <Reveal direction="right" className="about-content">
          <h2 className="about-heading">
            About <span className="highlight">Websofy</span> Software Pvt. Ltd.
          </h2>

          <p className="about-description">
            <strong>Websofy Software Pvt Ltd</strong> is a leading{' '}
            <strong>IT company in Lucknow</strong> offering end-to-end
            services, from <strong>custom software development</strong> to
            web design and digital marketing. Our goal is to deliver{' '}
            <strong>secure, scalable, and innovative solutions</strong> that
            drive growth for startups and enterprises. With a{' '}
            <strong>highly skilled team</strong>, we specialize in{' '}
            <strong>web applications, mobile app development</strong>, and{' '}
            <strong>data-driven marketing campaigns</strong>.
          </p>

          <div className="about-checklist">
            <div className="check-item">
              <FaCheckCircle className="check-icon" />
              <span>Custom Software Development</span>
            </div>
            <div className="check-item">
              <FaCheckCircle className="check-icon" />
              <span>Website Design &amp; Development</span>
            </div>
            <div className="check-item">
              <FaCheckCircle className="check-icon" />
              <span>Mobile App Development</span>
            </div>
            <div className="check-item">
              <FaCheckCircle className="check-icon" />
              <span>Digital Marketing Solutions</span>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-item">
              <h3>7K+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>3K+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Team Members</p>
            </div>
            <div className="stat-item">
              <h3>99%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>

          <a href="/about" className="learn-more-btn">
            Learn More <FaArrowRight className="btn-arrow" />
          </a>
        </Reveal>

      </div>
    </section>
  );
}

export default About;