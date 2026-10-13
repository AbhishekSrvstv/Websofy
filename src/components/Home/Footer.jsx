import './Footer.css';
import logo from "../../assets/Home_Img/images/websofy-logo.png";
import gemLogo from "../../assets/Home_Img/images/gem-logo.png";
import iso1 from "../../assets/Home_Img/images/iso-9001.png";
import iso2 from "../../assets/Home_Img/images/iso-27001.png";
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn, FaYoutube, FaArrowRight, FaLocationDot, FaWhatsapp, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa6';

const services = [
  'Software Development', 'Website Development', 'Mobile App Development',
  'Graphic Design', 'Bulk Email', 'Bulk Whatsapp',
  'Social Media Optimization', 'Search Engine Optimization', 'Meta Ads',
];

const quickLinks = [
  'Home', 'About Us', 'Portfolio', 'Our Solutions', 'Packages', 'Blogs', 'Careers', 'Contact Us',
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col footer-brand">
          <img src={logo} alt="Websofy" className="footer-logo" />
          <p>
            Websofy Software Pvt. Ltd. is a leading IT company in Lucknow,
            delivering powerful digital marketing and web development
            services that drive visibility, engagement, and business growth.
          </p>
          <img src={gemLogo} alt="Government e Marketplace" className="footer-gem" />
          <div className="footer-badges">
            <img src={iso1} alt="ISO 9001:2015 Certified" />
            <img src={iso2} alt="ISO 27001:2013 Certified" />
          </div>
        </div>

        <div className="footer-col">
          <h4>Our Services</h4>
          <ul>
            {services.map((item, i) => (
              <li key={i}><a href="/services"><FaArrowRight /> {item}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map((item, i) => (
              <li key={i}><a href="/"><FaArrowRight /> {item}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact Info</h4>
          <div className="footer-contact-item">
            <span className="footer-icon"><FaLocationDot /></span>
            <div>
              <strong>Location</strong>
              <p>Sharan Vihar, HN-48, Sugamau Rd, Indira Nagar, Lucknow, Uttar Pradesh 226016</p>
            </div>
          </div>
          <div className="footer-contact-item">
            <span className="footer-icon"><FaWhatsapp /></span>
            <div>
              <strong>Chat With Us</strong>
              <p>+91-9335785354</p>
            </div>
          </div>
          <div className="footer-contact-item">
            <span className="footer-icon"><FaPhone /></span>
            <div>
              <strong>Call Us</strong>
              <p>+91-7309990011</p>
            </div>
          </div>
          <div className="footer-contact-item">
            <span className="footer-icon"><FaEnvelope /></span>
            <div>
              <strong>Email Address</strong>
              <p>info@websofy.com</p>
            </div>
          </div>
          <div className="footer-contact-item">
            <span className="footer-icon"><FaClock /></span>
            <div>
              <strong>Working Hours</strong>
              <p>Mon - Sat : 10:00 AM - 06:30 PM</p>
            </div>
          </div>

          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 All Rights Reserved by <strong>Websofy Software Pvt. Ltd.</strong></p>
        <div className="footer-bottom-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <span>|</span>
          <a href="/sitemap">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;