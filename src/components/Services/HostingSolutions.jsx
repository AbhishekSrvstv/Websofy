import {
  FaGlobe,
  FaExchangeAlt,
  FaSitemap,
  FaSyncAlt,
  FaUserLock,
  FaServer,
  FaCloud,
  FaDatabase,
  FaWordpress,
  FaLinux,
  FaCogs,
  FaFeatherAlt,
  FaCube,
  FaLock,
  FaInbox,
  FaChartLine,
} from "react-icons/fa";
import "./MobileSolutions.css";

const GROUPS = [
  {
    title: "Domain Services",
    desc: "Reliable domain solutions to establish and manage your online identity.",
    items: [
      { label: "Domain Registration", icon: FaGlobe },
      { label: "Domain Transfer", icon: FaExchangeAlt },
      { label: "DNS Management", icon: FaSitemap },
      { label: "Domain Renewal", icon: FaSyncAlt },
      { label: "WHOIS Privacy", icon: FaUserLock },
    ],
  },
  {
    title: "Web Hosting",
    desc: "Fast and dependable hosting solutions for websites and web applications.",
    items: [
      { label: "Shared Hosting", icon: FaServer },
      { label: "Cloud Hosting", icon: FaCloud },
      { label: "VPS Hosting", icon: FaServer },
      { label: "Dedicated Hosting", icon: FaDatabase },
      { label: "WordPress Hosting", icon: FaWordpress },
    ],
  },
  {
    title: "Server Infrastructure",
    desc: "Scalable server infrastructure designed for reliable website performance.",
    items: [
      { label: "Linux Server", icon: FaLinux },
      { label: "cPanel", icon: FaCogs },
      { label: "Apache", icon: FaFeatherAlt },
      { label: "Nginx", icon: FaCube },
      { label: "Cloudflare", icon: FaCloud },
    ],
  },
  {
    title: "Management & Security",
    desc: "Secure and efficient hosting management for stable online operations.",
    items: [
      { label: "SSL Security", icon: FaLock },
      { label: "Backup Management", icon: FaDatabase },
      { label: "Email Hosting", icon: FaInbox },
      { label: "Server Monitoring", icon: FaChartLine },
      { label: "Website Migration", icon: FaExchangeAlt },
    ],
  },
];

export default function HostingSolutions() {
  return (
    <section className="ms">
      <div className="ms__head">
        <span className="ms__tag">
          <i></i> Hosting Technology <i></i>
        </span>

        <h2>
          Domain & <span>Hosting</span>
        </h2>

        <p>
          We provide reliable domain and hosting solutions with secure
          infrastructure, fast performance, and dependable management for your
          online presence.
        </p>
      </div>

      <div className="ms__list">
        {GROUPS.map(({ title, desc, items }, index) => (
          <div className="ms__row" key={title}>
            <div className="ms__info">
              <span className="ms__num">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{title}</h3>
              <p>{desc}</p>
            </div>

            <div className="ms__chips">
              {items.map(({ label, icon: Icon }) => (
                <span className="ms__chip" key={label}>
                  <span className="ms__chip-icon">
                    <Icon />
                  </span>
                  {label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}