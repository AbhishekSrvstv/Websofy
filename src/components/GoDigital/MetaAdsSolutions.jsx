import {
  FaFacebookF,
  FaInstagram,
  FaUsers,
  FaBullseye,
  FaFileAlt,
  FaRedo,
  FaFilter,
  FaImage,
  FaImages,
  FaVideo,
  FaBullhorn,
  FaMousePointer,
  FaCrosshairs,
  FaChartLine,
  FaChartBar,
  FaMoneyBillWave,
} from "react-icons/fa";

import "./SocialMediaSolutions.css";

const GROUPS = [
  {
    title: "Meta Ads Strategy",
    desc: "Build effective Facebook and Instagram advertising strategies based on audience insights, campaign goals, and business objectives.",
    chips: [
      { label: "Facebook Ads", Icon: FaFacebookF },
      { label: "Instagram Ads", Icon: FaInstagram },
      { label: "Audience Research", Icon: FaUsers },
      { label: "Campaign Strategy", Icon: FaBullseye },
      { label: "Competitor Research", Icon: FaFileAlt },
    ],
  },
  {
    title: "Audience & Campaign Targeting",
    desc: "Reach the right customers using detailed audience targeting, custom audiences, lookalike audiences, and remarketing strategies.",
    chips: [
      { label: "Audience Targeting", Icon: FaUsers },
      { label: "Custom Audiences", Icon: FaBullseye },
      { label: "Lookalike Audiences", Icon: FaUsers },
      { label: "Retargeting", Icon: FaRedo },
      { label: "Interest Targeting", Icon: FaFilter },
    ],
  },
  {
    title: "Creative & Ad Campaigns",
    desc: "Create engaging ad campaigns using compelling visuals, videos, copy, and creative formats designed to increase audience engagement.",
    chips: [
      { label: "Ad Creatives", Icon: FaImage },
      { label: "Video Ads", Icon: FaVideo },
      { label: "Ad Copywriting", Icon: FaBullhorn },
      { label: "Carousel Ads", Icon: FaImages },
      { label: "Lead Ads", Icon: FaFileAlt },
    ],
  },
  {
    title: "Tracking & Optimization",
    desc: "Track campaign results and continuously optimize audiences, creatives, budgets, and conversions for stronger advertising performance.",
    chips: [
      { label: "Conversion Tracking", Icon: FaMousePointer },
      { label: "Meta Pixel", Icon: FaCrosshairs },
      { label: "Campaign Analytics", Icon: FaChartLine },
      { label: "Ad Performance", Icon: FaChartBar },
      { label: "Budget Optimization", Icon: FaMoneyBillWave },
    ],
  },
];

export default function MetaAdsSolutions() {
  return (
    <section className="smo">
      <div className="smo__inner">
        <span className="smo__label">
          <i />
          Meta Advertising
          <i />
        </span>

        <h2 className="smo__title">
          Social <b>Growth</b>
        </h2>

        <p className="smo__text">
          We use targeted Facebook and Instagram advertising, creative
          campaigns, audience optimization, retargeting, and conversion
          tracking to generate leads and drive measurable business growth.
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