import './TopBar.css';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';

const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/Websofyofficial/',
    icon: FaFacebookF,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/websofysoftwareofficial/',
    icon: FaInstagram,
  },
  {
    label: 'X',
    href: 'https://x.com/websofypvtltd',
    icon: FaXTwitter,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/websofyofficial',
    icon: FaLinkedinIn,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@Websofypvtltd',
    icon: FaYoutube,
  },
];

function TopBar() {
  return (
    <div className="bg-dark text-white topbar">
      <div className="topbar-left">
        <div className="marquee-wrapper">
          <div className="marquee-content">
            <span className="marquee-item">
              <span className="icon-circle"><FaWhatsapp /></span>
              +91-9335785354
              <span className="icon-circle"><FaPhoneAlt /></span>
              +91-7309990011
              <span className="icon-circle"><FaEnvelope /></span>
              info@websofy.com
              <span className="icon-circle"><FaClock /></span>
              Mon - Sat : 10:00 AM - 06:30 PM
              <span className="icon-circle"><FaMapMarkerAlt /></span>
              Sharan Vihar, HN-48, Sugamau Rd, Indira Nagar, Lucknow, Uttar Pradesh 226016
            </span>
            <span className="marquee-item">
              <span className="icon-circle"><FaWhatsapp /></span>
              +91-9335785354
              <span className="icon-circle"><FaPhoneAlt /></span>
              +91-7309990011
              <span className="icon-circle"><FaEnvelope /></span>
              info@websofy.com
              <span className="icon-circle"><FaClock /></span>
              Mon - Sat : 10:00 AM - 06:30 PM
              <span className="icon-circle"><FaMapMarkerAlt /></span>
              Sharan Vihar, HN-48, Sugamau Rd, Indira Nagar, Lucknow, Uttar Pradesh 226016
            </span>
          </div>
        </div>
      </div>

      <div className="topbar-right">
        {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            className="icon-circle-dark"
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            title={label}
          >
            <Icon />
          </a>
        ))}
      </div>
    </div>
  );
}

export default TopBar;