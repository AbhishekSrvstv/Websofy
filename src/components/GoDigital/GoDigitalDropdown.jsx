import { Link, useLocation } from "react-router-dom";
import {
  FaHashtag,
  FaSearch,
  FaChartLine,
  FaBullseye,
  FaFacebookF,
  FaPenNib,
  FaVideo,
  FaWhatsapp,
  FaEnvelopeOpenText,
  FaStar,
} from "react-icons/fa";
import "../Services/ServicesDropdown.css";

export const GO_DIGITAL = [
  { label: "Social Media Optimization", href: "/social-media-optimization-in-lucknow", icon: FaHashtag },
  { label: "Search Engine Optimization", href: "/seo-company-in-lucknow", icon: FaSearch },
  { label: "Performance Marketing", href: "/performance-marketing-service-in-lucknow", icon: FaChartLine },
  { label: "PPC Advertising", href: "/ppc-advertising-in-lucknow", icon: FaBullseye },
  { label: "Meta Ads", href: "/meta-ads-management-in-lucknow", icon: FaFacebookF },
  { label: "Content Marketing", href: "/content-marketing-in-lucknow", icon: FaPenNib },
  { label: "Video Influencer Marketing", href: "/video-influencer-marketing-in-lucknow", icon: FaVideo },
  { label: "WhatsApp Marketing", href: "/whatsapp-marketing-in-lucknow", icon: FaWhatsapp },
  { label: "Email Marketing", href: "/email-marketing-in-lucknow", icon: FaEnvelopeOpenText },
  { label: "Online Reputation Management", href: "/online-reputation-management-in-lucknow", icon: FaStar },
];

export default function GoDigitalDropdown({ open, onNavigate }) {
  const { pathname } = useLocation();

  return (
    <div className={`sdrop ${open ? "sdrop--open" : ""}`} role="menu">
      <ul className="sdrop__grid">
        {GO_DIGITAL.map(({ label, href, icon: Icon }) => {
          const active = pathname === href;
          return (
            <li key={label} className="sdrop__item">
              <Link
                to={href}
                className={`sdrop__link ${active ? "is-active" : ""}`}
                onClick={onNavigate}
              >
                <Icon className="sdrop__icon" />
                <span>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}