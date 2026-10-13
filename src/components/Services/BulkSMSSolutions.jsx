import {
  FaCommentDots,
  FaBullhorn,
  FaReceipt,
  FaShieldAlt,
  FaClock,
  FaFileAlt,
  FaUsers,
  FaUserEdit,
  FaExchangeAlt,
  FaLanguage,
  FaCheckCircle,
  FaSatelliteDish,
  FaChartBar,
  FaExclamationTriangle,
  FaReply,
  FaLock,
  FaIdBadge,
  FaFilter,
  FaCog,
} from "react-icons/fa";
import "./MobileSolutions.css";

const GROUPS = [
  {
    title: "SMS Campaigns",
    desc: "Powerful messaging solutions to reach customers quickly and effectively.",
    items: [
      { label: "Bulk Messaging", icon: FaCommentDots },
      { label: "Promotional SMS", icon: FaBullhorn },
      { label: "Transactional SMS", icon: FaReceipt },
      { label: "OTP SMS", icon: FaShieldAlt },
      { label: "Scheduled SMS", icon: FaClock },
    ],
  },
  {
    title: "Messaging Features",
    desc: "Flexible messaging features designed for efficient customer communication.",
    items: [
      { label: "SMS Templates", icon: FaFileAlt },
      { label: "Contact Groups", icon: FaUsers },
      { label: "Personalized SMS", icon: FaUserEdit },
      { label: "API Integration", icon: FaExchangeAlt },
      { label: "Unicode SMS", icon: FaLanguage },
    ],
  },
  {
    title: "Delivery & Analytics",
    desc: "Track message delivery and campaign performance with detailed insights.",
    items: [
      { label: "Delivery Reports", icon: FaCheckCircle },
      { label: "Real-Time Tracking", icon: FaSatelliteDish },
      { label: "Campaign Reports", icon: FaChartBar },
      { label: "Failed SMS Reports", icon: FaExclamationTriangle },
      { label: "Response Tracking", icon: FaReply },
    ],
  },
  {
    title: "Security & Management",
    desc: "Secure and reliable messaging infrastructure for business communication.",
    items: [
      { label: "Secure API", icon: FaLock },
      { label: "Sender ID", icon: FaIdBadge },
      { label: "DND Filtering", icon: FaFilter },
      { label: "Spam Protection", icon: FaShieldAlt },
      { label: "Campaign Management", icon: FaCog },
    ],
  },
];

export default function BulkSMSSolutions() {
  return (
    <section className="ms">
      <div className="ms__head">
        <span className="ms__tag">
          <i></i> Messaging Technology <i></i>
        </span>

        <h2>
          Powerful <span>Messaging</span>
        </h2>

        <p>
          We deliver fast, reliable, and secure bulk SMS solutions to help
          businesses connect with customers, send alerts, and run effective
          marketing campaigns.
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