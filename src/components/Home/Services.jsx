import './Services.css';
import {
  FaCode,
  FaGlobe,
  FaMobileAlt,
  FaPaintBrush,
  FaEnvelopeOpenText,
  FaWhatsapp,
  FaShareAlt,
  FaSearch,
  FaFacebook,
} from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa6';

const services = [
  {
    number: '01',
    icon: <FaCode />,
    title: 'Software Development',
    desc: 'Build powerful and scalable software solutions designed around your business needs. Our custom applications streamline operations, improve productivity, and support long-term growth.',
  },
  {
    number: '02',
    icon: <FaGlobe />,
    title: 'Website Development',
    desc: 'Create fast, responsive, and user-friendly websites that strengthen your online presence. We build modern websites optimized for performance, usability, SEO, and business growth.',
  },
  {
    number: '03',
    icon: <FaMobileAlt />,
    title: 'Mobile App Development',
    desc: 'Develop engaging Android and iOS mobile applications with smooth performance and intuitive experiences. Our apps help businesses connect with customers and expand their digital reach.',
  },
  {
    number: '04',
    icon: <FaPaintBrush />,
    title: 'Graphic Design',
    desc: 'Make your brand stand out with creative and professional graphic designs. We create visually appealing designs for branding, marketing, social media, websites, and business promotions.',
  },
  {
    number: '05',
    icon: <FaEnvelopeOpenText />,
    title: 'Bulk Email',
    desc: 'Connect with your audience through effective bulk email campaigns. Promote products, share updates, nurture leads, and build stronger customer relationships with targeted emails.',
  },
  {
    number: '06',
    icon: <FaWhatsapp />,
    title: 'Bulk Whatsapp',
    desc: 'Engage customers directly with bulk WhatsApp messaging solutions. Send promotional campaigns, updates, offers, and important notifications to reach your audience effectively.',
  },
  {
    number: '07',
    icon: <FaShareAlt />,
    title: 'Social Media Optimization',
    desc: 'Strengthen your social presence with engaging content, optimized profiles, and strategic campaigns that increase reach, engagement, brand awareness, and customer connections.',
  },
  {
    number: '08',
    icon: <FaSearch />,
    title: 'Search Engine Optimization',
    desc: 'Improve your search visibility with effective SEO strategies that increase organic traffic, enhance rankings, attract relevant customers, and drive sustainable business growth.',
  },
  {
    number: '09',
    icon: <FaFacebook />,
    title: 'Meta Ads',
    desc: 'Reach your ideal audience with targeted Meta Ads campaigns designed to increase brand visibility, generate quality leads, drive conversions, and maximize your advertising results.',
  },
];

function Services() {
  return (
    <section className="services-section">
      <div className="services-header">
        <span className="services-tag">— Our Services —</span>
        <h2>
          Smart Solutions <span className="highlight">That Grow</span>
        </h2>
        <p>Innovative digital services built to simplify, scale, and grow your business.</p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-line-top"></div>
            <div className="service-line-bottom"></div>

            <div className="service-top">
              <div className="service-icon">{service.icon}</div>
              <span className="service-number">{service.number}</span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <a href="/services" className="explore-link">
              Explore Service <FaArrowRight />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;