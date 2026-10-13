import {
  FaEnvelope,
  FaUsers,
  FaBullhorn,
  FaRoute,
  FaUserEdit,
  FaPenFancy,
  FaFileAlt,
  FaImage,
  FaMousePointer,
  FaMobileAlt,
  FaRobot,
  FaTint,
  FaBolt,
  FaUserPlus,
  FaUserCheck,
  FaEnvelopeOpenText,
  FaChartLine,
  FaChartBar,
  FaFlask,
  FaMousePointer as FaClick,
} from "react-icons/fa";

import "./SocialMediaSolutions.css";

const GROUPS = [
  {
    title: "Email Marketing Strategy",
    desc: "Build targeted email marketing strategies based on audience segments, business goals, customer journeys, and campaign objectives.",
    chips: [
      { label: "Email Campaigns", Icon: FaEnvelope },
      { label: "Audience Segmentation", Icon: FaUsers },
      { label: "Campaign Planning", Icon: FaBullhorn },
      { label: "Customer Journeys", Icon: FaRoute },
      { label: "Email Personalization", Icon: FaUserEdit },
    ],
  },
  {
    title: "Email Content & Design",
    desc: "Create compelling email content and visually engaging campaigns that capture attention and encourage customers to take action.",
    chips: [
      { label: "Email Copywriting", Icon: FaPenFancy },
      { label: "Email Templates", Icon: FaFileAlt },
      { label: "Visual Content", Icon: FaImage },
      { label: "Call-to-Action", Icon: FaMousePointer },
      { label: "Responsive Emails", Icon: FaMobileAlt },
    ],
  },
  {
    title: "Automation & Engagement",
    desc: "Automate personalized email communication to nurture leads, engage customers, and deliver timely messages throughout the customer journey.",
    chips: [
      { label: "Email Automation", Icon: FaRobot },
      { label: "Drip Campaigns", Icon: FaTint },
      { label: "Triggered Emails", Icon: FaBolt },
      { label: "Lead Nurturing", Icon: FaUserPlus },
      { label: "Customer Retention", Icon: FaUserCheck },
    ],
  },
  {
    title: "Analytics & Optimization",
    desc: "Measure email campaign performance and continuously optimize content, targeting, delivery, and conversions using actionable data.",
    chips: [
      { label: "Open Rate Tracking", Icon: FaEnvelopeOpenText },
      { label: "Click Rate Analysis", Icon: FaClick },
      { label: "Campaign Analytics", Icon: FaChartLine },
      { label: "Email Reports", Icon: FaChartBar },
      { label: "A/B Testing", Icon: FaFlask },
    ],
  },
];

export default function EmailMarketingSolutions() {
  return (
    <section className="smo">
      <div className="smo__inner">
        <span className="smo__label">
          <i />
          Email Marketing
          <i />
        </span>

        <h2 className="smo__title">
          Smart Email <b>Growth</b>
        </h2>

        <p className="smo__text">
          We create targeted email campaigns, personalized content, automated
          customer journeys, and data-driven strategies that increase
          engagement, nurture leads, and drive meaningful business growth.
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