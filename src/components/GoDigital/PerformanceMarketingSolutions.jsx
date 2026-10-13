import {
  FaGoogle,
  FaFacebookF,
  FaInstagram,
  FaBullhorn,
  FaBullseye,
  FaUsers,
  FaSearch,
  FaRandom,
  FaMoneyBillWave,
  FaMousePointer,
  FaFileAlt,
  FaRedo,
  FaCrosshairs,
  FaFilter,
  FaChartLine,
  FaChartBar,
  FaPercentage,
  FaCogs,
} from "react-icons/fa";

import "./SocialMediaSolutions.css";

const GROUPS = [
  {
    title: "Paid Advertising",
    desc: "Create targeted paid campaigns across search, social media, and digital advertising platforms.",
    chips: [
      { label: "Google Ads", Icon: FaGoogle },
      { label: "Facebook Ads", Icon: FaFacebookF },
      { label: "Instagram Ads", Icon: FaInstagram },
      { label: "PPC Campaigns", Icon: FaBullhorn },
      { label: "Display Advertising", Icon: FaBullseye },
    ],
  },
  {
    title: "Campaign Optimization",
    desc: "Optimize campaigns, audiences, creatives, and bidding strategies to improve conversions and advertising performance.",
    chips: [
      { label: "Audience Targeting", Icon: FaUsers },
      { label: "Keyword Targeting", Icon: FaSearch },
      { label: "Ad Optimization", Icon: FaBullhorn },
      { label: "A/B Testing", Icon: FaRandom },
      { label: "Bid Optimization", Icon: FaMoneyBillWave },
    ],
  },
  {
    title: "Conversion & Tracking",
    desc: "Track user actions and conversions to understand campaign effectiveness and improve return on advertising spend.",
    chips: [
      { label: "Conversion Tracking", Icon: FaMousePointer },
      { label: "Landing Pages", Icon: FaFileAlt },
      { label: "Remarketing", Icon: FaRedo },
      { label: "Tracking Pixels", Icon: FaCrosshairs },
      { label: "Marketing Funnels", Icon: FaFilter },
    ],
  },
  {
    title: "Analytics & Performance",
    desc: "Measure campaign performance and use actionable data to improve traffic, conversions, ROI, and overall marketing results.",
    chips: [
      { label: "Campaign Analytics", Icon: FaChartLine },
      { label: "Performance Reports", Icon: FaChartBar },
      { label: "ROI Analysis", Icon: FaPercentage },
      { label: "CTR Optimization", Icon: FaMousePointer },
      { label: "Marketing Automation", Icon: FaCogs },
    ],
  },
];

export default function PerformanceMarketingSolutions() {
  return (
    <section className="smo">
      <div className="smo__inner">
        <span className="smo__label">
          <i />
          Performance Marketing
          <i />
        </span>

        <h2 className="smo__title">
          Data-Driven <b>Growth</b>
        </h2>

        <p className="smo__text">
          We use targeted advertising, conversion tracking, campaign
          optimization, and data-driven insights to maximize reach, generate
          quality leads, and improve marketing ROI.
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