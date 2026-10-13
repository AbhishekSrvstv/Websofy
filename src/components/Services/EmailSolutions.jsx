import {
  FaEnvelopeOpenText,
  FaBullhorn,
  FaReceipt,
  FaNewspaper,
  FaClock,
  FaFileAlt,
  FaUserEdit,
  FaUsers,
  FaCogs,
  FaPlug,
  FaCheckCircle,
  FaEnvelopeOpen,
  FaMousePointer,
  FaChartBar,
  FaExclamationTriangle,
  FaShieldAlt,
  FaLock,
  FaKey,
  FaUserShield,
  FaBan,
} from "react-icons/fa";
import "./MobileSolutions.css";

const GROUPS = [
  {
    title: "Email Campaigns",
    desc: "Powerful email solutions to reach customers and grow your business effectively.",
    items: [
      { label: "Bulk Email", icon: FaEnvelopeOpenText },
      { label: "Promotional Email", icon: FaBullhorn },
      { label: "Transactional Email", icon: FaReceipt },
      { label: "Newsletter", icon: FaNewspaper },
      { label: "Scheduled Email", icon: FaClock },
    ],
  },
  {
    title: "Email Features",
    desc: "Flexible features designed to create, personalize, and manage effective email campaigns.",
    items: [
      { label: "Email Templates", icon: FaFileAlt },
      { label: "Personalized Email", icon: FaUserEdit },
      { label: "Contact Segmentation", icon: FaUsers },
      { label: "Email Automation", icon: FaCogs },
      { label: "API Integration", icon: FaPlug },
    ],
  },
  {
    title: "Delivery & Analytics",
    desc: "Monitor email delivery and campaign performance with detailed insights.",
    items: [
      { label: "Delivery Reports", icon: FaCheckCircle },
      { label: "Open Tracking", icon: FaEnvelopeOpen },
      { label: "Click Tracking", icon: FaMousePointer },
      { label: "Campaign Reports", icon: FaChartBar },
      { label: "Bounce Tracking", icon: FaExclamationTriangle },
    ],
  },
  {
    title: "Security & Management",
    desc: "Reliable email infrastructure designed for secure and successful communication.",
    items: [
      { label: "Email Authentication", icon: FaShieldAlt },
      { label: "SPF", icon: FaLock },
      { label: "DKIM", icon: FaKey },
      { label: "DMARC", icon: FaUserShield },
      { label: "Spam Protection", icon: FaBan },
    ],
  },
];

export default function EmailSolutions() {
  return (
    <section className="ms">
      <div className="ms__head">
        <span className="ms__tag">
          <i></i> Email Technology <i></i>
        </span>

        <h2>
          Powerful <span>Email Marketing</span>
        </h2>

        <p>
          We deliver secure, reliable, and scalable bulk email solutions to help
          businesses connect with customers, automate communication, and run
          effective email campaigns.
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