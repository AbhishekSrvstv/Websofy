import {
  FaSearch,
  FaGlobe,
  FaShareAlt,
  FaBell,
  FaExclamationTriangle,
  FaStar,
  FaComments,
  FaReply,
  FaHeart,
  FaChartLine,
  FaThumbsDown,
  FaShieldAlt,
  FaChartBar,
  FaFileAlt,
  FaUserCheck,
  FaCheckCircle,
  FaSmile,
  FaUsers,
} from "react-icons/fa";

import "./SocialMediaSolutions.css";

const GROUPS = [
  {
    title: "Reputation Monitoring",
    desc: "Monitor your brand presence across search engines, websites, social platforms, and online communities to identify reputation opportunities and risks.",
    chips: [
      { label: "Brand Monitoring", Icon: FaSearch },
      { label: "Search Monitoring", Icon: FaGlobe },
      { label: "Social Monitoring", Icon: FaShareAlt },
      { label: "Mention Tracking", Icon: FaBell },
      { label: "Reputation Alerts", Icon: FaExclamationTriangle },
    ],
  },
  {
    title: "Reviews & Feedback",
    desc: "Manage online reviews and customer feedback to strengthen brand credibility, improve customer trust, and encourage positive experiences.",
    chips: [
      { label: "Review Management", Icon: FaStar },
      { label: "Customer Feedback", Icon: FaComments },
      { label: "Review Responses", Icon: FaReply },
      { label: "Rating Management", Icon: FaStar },
      { label: "Customer Engagement", Icon: FaHeart },
    ],
  },
  {
    title: "Brand Sentiment & Response",
    desc: "Analyze audience sentiment and respond strategically to positive, neutral, and negative conversations surrounding your brand.",
    chips: [
      { label: "Sentiment Analysis", Icon: FaSmile },
      { label: "Negative Feedback", Icon: FaThumbsDown },
      { label: "Response Strategy", Icon: FaReply },
      { label: "Community Engagement", Icon: FaUsers },
      { label: "Brand Protection", Icon: FaShieldAlt },
    ],
  },
  {
    title: "Analytics & Reputation Growth",
    desc: "Track reputation performance and use actionable insights to improve brand perception, customer trust, visibility, and long-term online presence.",
    chips: [
      { label: "Reputation Analytics", Icon: FaChartLine },
      { label: "Review Analytics", Icon: FaChartBar },
      { label: "Brand Reports", Icon: FaFileAlt },
      { label: "Trust Monitoring", Icon: FaUserCheck },
      { label: "Performance Tracking", Icon: FaCheckCircle },
    ],
  },
];

export default function ReputationManagementSolutions() {
  return (
    <section className="smo">
      <div className="smo__inner">
        <span className="smo__label">
          <i />
          Brand Reputation
          <i />
        </span>

        <h2 className="smo__title">
          Build <b>Brand Trust</b>
        </h2>

        <p className="smo__text">
          We monitor, manage, and strengthen your online reputation through
          review management, brand monitoring, audience engagement, sentiment
          analysis, and data-driven reputation strategies.
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