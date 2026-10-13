import {
  FaGoogle,
  FaSearch,
  FaBullseye,
  FaUsers,
  FaCalendarAlt,
  FaBullhorn,
  FaPenFancy,
  FaFilter,
  FaSyncAlt,
  FaMousePointer,
  FaFileAlt,
  FaBolt,
  FaHandPointer,
  FaUserCheck,
  FaGavel,
  FaWallet,
  FaPercent,
  FaChartLine,
  FaChartBar,
} from "react-icons/fa";

import "./SocialMediaSolutions.css";

const GROUPS = [
  {
    title: "PPC Strategy & Research",
    desc: "Develop targeted PPC strategies using keyword research, audience insights, competitor analysis, and search intent.",
    chips: [
      { label: "Google Ads", Icon: FaGoogle },
      { label: "Keyword Research", Icon: FaSearch },
      { label: "Search Intent", Icon: FaBullseye },
      { label: "Competitor Analysis", Icon: FaUsers },
      { label: "Campaign Planning", Icon: FaCalendarAlt },
    ],
  },
  {
    title: "Ad Campaign Management",
    desc: "Create and manage targeted search campaigns with compelling ads, precise audiences, and optimized campaign structures.",
    chips: [
      { label: "Search Campaigns", Icon: FaSearch },
      { label: "Ad Copywriting", Icon: FaPenFancy },
      { label: "Audience Targeting", Icon: FaUsers },
      { label: "Negative Keywords", Icon: FaFilter },
      { label: "Remarketing", Icon: FaSyncAlt },
    ],
  },
  {
    title: "Conversion & Tracking",
    desc: "Track valuable user actions and conversions to measure campaign effectiveness and improve advertising results.",
    chips: [
      { label: "Conversion Tracking", Icon: FaMousePointer },
      { label: "Landing Pages", Icon: FaFileAlt },
      { label: "Tracking Events", Icon: FaBolt },
      { label: "Click Tracking", Icon: FaHandPointer },
      { label: "Lead Tracking", Icon: FaUserCheck },
    ],
  },
  {
    title: "Optimization & Analytics",
    desc: "Continuously optimize bids, budgets, keywords, and ads using performance data to improve conversions and advertising ROI.",
    chips: [
      { label: "Bid Optimization", Icon: FaGavel },
      { label: "Budget Optimization", Icon: FaWallet },
      { label: "CTR Analysis", Icon: FaPercent },
      { label: "Campaign Analytics", Icon: FaChartLine },
      { label: "PPC Reporting", Icon: FaChartBar },
    ],
  },
];

export default function PpcAdvertisingSolutions() {
  return (
    <section className="smo">
      <div className="smo__inner">
        <span className="smo__label">
          <i />
          PPC Advertising
          <i />
        </span>

        <h2 className="smo__title">
          Targeted <b>Paid Growth</b>
        </h2>

        <p className="smo__text">
          We use targeted PPC strategies, smart campaign optimization,
          conversion tracking, and performance analytics to generate qualified
          traffic, leads, and measurable advertising results.
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