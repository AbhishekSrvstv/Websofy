import {
  FaWhatsapp,
  FaBullhorn,
  FaUsers,
  FaCommentDots,
  FaClock,
  FaComment,
  FaImage,
  FaVideo,
  FaFileAlt,
  FaHandshake,
  FaCode,
  FaRobot,
  FaPlug,
  FaGlobe,
  FaBell,
  FaChartLine,
  FaChartBar,
  FaCheckCircle,
  FaAddressBook,
  FaShieldAlt,
} from "react-icons/fa";

import "./SocialMediaSolutions.css";

const GROUPS = [
  {
    title: "WhatsApp Campaigns",
    desc: "Create targeted WhatsApp marketing campaigns to reach customers with relevant offers, updates, promotions, and business messages.",
    chips: [
      { label: "WhatsApp Marketing", Icon: FaWhatsapp },
      { label: "Bulk Messaging", Icon: FaBullhorn },
      { label: "Audience Segmentation", Icon: FaUsers },
      { label: "Promotional Messages", Icon: FaCommentDots },
      { label: "Message Scheduling", Icon: FaClock },
    ],
  },
  {
    title: "Content & Engagement",
    desc: "Deliver engaging multimedia messages that help businesses communicate effectively and build stronger customer relationships.",
    chips: [
      { label: "Text Messaging", Icon: FaComment },
      { label: "Image Messaging", Icon: FaImage },
      { label: "Video Messaging", Icon: FaVideo },
      { label: "Document Sharing", Icon: FaFileAlt },
      { label: "Customer Engagement", Icon: FaHandshake },
    ],
  },
  {
    title: "Automation & Integration",
    desc: "Automate customer communication and connect WhatsApp with business systems for faster, more efficient messaging workflows.",
    chips: [
      { label: "WhatsApp Business API", Icon: FaCode },
      { label: "Chat Automation", Icon: FaRobot },
      { label: "API Integration", Icon: FaPlug },
      { label: "Website Integration", Icon: FaGlobe },
      { label: "Automated Notifications", Icon: FaBell },
    ],
  },
  {
    title: "Analytics & Security",
    desc: "Monitor campaign performance and maintain secure customer communication through tracking, reporting, and controlled messaging.",
    chips: [
      { label: "Message Analytics", Icon: FaChartLine },
      { label: "Campaign Reports", Icon: FaChartBar },
      { label: "Delivery Tracking", Icon: FaCheckCircle },
      { label: "Contact Management", Icon: FaAddressBook },
      { label: "Message Security", Icon: FaShieldAlt },
    ],
  },
];

export default function WhatsAppMarketingSolutions() {
  return (
    <section className="smo">
      <div className="smo__inner">
        <span className="smo__label">
          <i />
          WhatsApp Marketing
          <i />
        </span>

        <h2 className="smo__title">
          Powerful <b>Customer Reach</b>
        </h2>

        <p className="smo__text">
          We use WhatsApp marketing, targeted campaigns, automation, and
          customer engagement strategies to help businesses connect with
          audiences, promote services, and build meaningful customer
          relationships.
        </p>

        <div className="smo__list">
          {GROUPS.map((group, index) => (
            <div className="smo__row" key={group.title}>
              <div className="smo__head">
                <span className="smo__num">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{group.title}</h3>
                <p>{group.desc}</p>
              </div>

              <div className="smo__chips">
                {group.chips.map(({ label, Icon }) => (
                  <span className="smo__chip" key={label}>
                    <span className="smo__icon">
                      <Icon aria-hidden="true" />
                    </span>
                    {label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}