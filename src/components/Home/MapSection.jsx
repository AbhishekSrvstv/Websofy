import { useEffect, useState } from 'react';
import './MapSection.css';
import { FaHome } from 'react-icons/fa';

function MapSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <section className="map-section">
        <iframe
          className="map-frame"
          title="Websofy Software Private Limited Location"
          src="https://www.google.com/maps?q=Websofy+Software+Private+Limited,+Sharan+Vihar,+HN-48,+Sugamau+Rd,+Indira+Nagar,+Lucknow,+Uttar+Pradesh+226016&output=embed"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <button
        className={`back-to-top ${visible ? 'show' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <FaHome />
      </button>
    </>
  );
}

export default MapSection;