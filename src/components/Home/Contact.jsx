import { useState } from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaClock, FaVolumeUp, FaSyncAlt } from 'react-icons/fa';
import { FaPaperPlane } from 'react-icons/fa6';
import Reveal from './Reveal';

function generateCaptcha() {
  const chars = 'abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function Contact() {
  const [message, setMessage] = useState('');
  const [captcha, setCaptcha] = useState(generateCaptcha());

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
  };

  return (
    <section className="contact-section">
      <Reveal direction="up" className="contact-header">
        <span className="contact-tag">— Get in Touch —</span>
        <h2>
          Let's Build <span className="highlight">Together</span>
        </h2>
        <p>Share your idea with us and let's create the right digital solution for your business.</p>
      </Reveal>

      <div className="contact-container">

        {/* LEFT CARD */}
        <Reveal direction="left" className="contact-info-card">
          <span className="badge">CONTACT US</span>
          <h3>
            Talk to <span className="highlight">Our Experts</span>
          </h3>
          <p className="info-desc">
            Get professional guidance on <strong>web development</strong>,{' '}
            <strong>software solutions</strong>, and{' '}
            <strong>digital transformation</strong>.
          </p>

          <div className="info-item">
            <span className="info-icon"><FaMapMarkerAlt /></span>
            <div>
              <span className="info-label">Location</span>
              <p>Sharan Vihar, HN-48, Sugamau Rd, Indira Nagar, Lucknow, Uttar Pradesh 226016</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon"><FaWhatsapp /></span>
            <div>
              <span className="info-label">Chat With Us</span>
              <p>+91-9335785354</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon"><FaPhoneAlt /></span>
            <div>
              <span className="info-label">Call Us</span>
              <p>+91-7309990011</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon"><FaEnvelope /></span>
            <div>
              <span className="info-label">Email Address</span>
              <p>info@websofy.com</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon"><FaClock /></span>
            <div>
              <span className="info-label">Working Hours</span>
              <p>Mon - Sat : 10:00 AM - 06:30 PM</p>
            </div>
          </div>
        </Reveal>

        {/* RIGHT CARD - FORM */}
        <Reveal direction="right" className="contact-form-card">
          <span className="badge">LET'S BUILD TOGETHER</span>
          <h3>
            Let's Build <span className="highlight">Something Great</span>
          </h3>
          <p className="form-subtext">Tell us about your project and our team will get back to you shortly.</p>

          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="Enter phone number" />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" placeholder="Enter subject" />
              </div>
            </div>

            <div className="form-group full-width">
              <div className="message-label-row">
                <label>Message</label>
                <span className="char-count">{message.length}/250</span>
              </div>
              <textarea
                placeholder="Write your message here..."
                maxLength={250}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <div className="captcha-row">
              <div className="captcha-box">{captcha}</div>
              <button type="button" className="captcha-btn" aria-label="Listen captcha">
                <FaVolumeUp />
              </button>
              <button type="button" className="captcha-btn" onClick={refreshCaptcha} aria-label="Refresh captcha">
                <FaSyncAlt />
              </button>
              <input type="text" placeholder="Enter CAPTCHA" className="captcha-input" />
            </div>

            <button type="submit" className="submit-btn">
              Send Message <FaPaperPlane />
            </button>
          </form>
        </Reveal>

      </div>
    </section>
  );
}

export default Contact;