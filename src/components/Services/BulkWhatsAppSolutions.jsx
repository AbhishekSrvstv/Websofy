import {
  FaWhatsapp,
  FaBullhorn,
  FaReceipt,
  FaFileAlt,
  FaClock,
  FaUserEdit,
  FaImages,
  FaFileUpload,
  FaAddressBook,
  FaHandPointer,
  FaCode,
  FaRobot,
  FaLink,
  FaComments,
  FaBell,
  FaCheckCircle,
  FaChartBar,
  FaEye,
  FaShieldAlt,
  FaCog,
} from "react-icons/fa";
import Reveal from "../Home/Reveal";
import "./MobileSolutions.css";

const GROUPS = [
  {
    title: "WhatsApp Campaigns",
    desc: "Powerful WhatsApp messaging solutions to engage customers and grow your business.",
    items: [
      { label: "Bulk WhatsApp", icon: FaWhatsapp },
      { label: "Promotional Messages", icon: FaBullhorn },
      { label: "Transactional Messages", icon: FaReceipt },
      { label: "WhatsApp Templates", icon: FaFileAlt },
      { label: "Scheduled Messages", icon: FaClock },
    ],
  },
  {
    title: "Business Messaging",
    desc: "Engage customers with personalized and interactive WhatsApp communication.",
    items: [
      { label: "Personalized Messages", icon: FaUserEdit },
      { label: "Media Messages", icon: FaImages },
      { label: "Document Sharing", icon: FaFileUpload },
      { label: "Contact Management", icon: FaAddressBook },
      { label: "Interactive Messages", icon: FaHandPointer },
    ],
  },
  {
    title: "Automation & API",
    desc: "Automate customer communication and connect WhatsApp with your business systems.",
    items: [
      { label: "WhatsApp API", icon: FaCode },
      { label: "Chat Automation", icon: FaRobot },
      { label: "CRM Integration", icon: FaLink },
      { label: "Chatbot", icon: FaComments },
      { label: "Notification API", icon: FaBell },
    ],
  },
  {
    title: "Analytics & Security",
    desc: "Track campaign performance while maintaining secure and reliable communication.",
    items: [
      { label: "Delivery Reports", icon: FaCheckCircle },
      { label: "Message Analytics", icon: FaChartBar },
      { label: "Read Tracking", icon: FaEye },
      { label: "Secure Messaging", icon: FaShieldAlt },
      { label: "Campaign Management", icon: FaCog },
    ],
  },
];

export default function BulkWhatsAppSolutions() {
  return (
    <section className="ms">
      <Reveal direction="up">
        <div className="ms__head">
          <span className="ms__tag">
            <i></i> WhatsApp Solutions <i></i>
          </span>

          <h2>
            Powerful <span>Messaging</span>
          </h2>

          <p>
            We deliver secure and scalable WhatsApp messaging solutions to help
            businesses engage customers, automate communication, and drive
            meaningful conversations.
          </p>
        </div>
      </Reveal>

      <div className="ms__list">
        {GROUPS.map(({ title, desc, items }, index) => (
          <Reveal key={title} direction="up" delay={index * 100}>
            <div className="ms__row">
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
          </Reveal>
        ))}
      </div>
    </section>
  );
}