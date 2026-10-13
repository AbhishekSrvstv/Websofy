import {
  FaLightbulb,
  FaUsers,
  FaSearch,
  FaCalendarAlt,
  FaBullseye,
  FaPen,
  FaPenFancy,
  FaImage,
  FaVideo,
  FaEdit,
  FaShareAlt,
  FaEnvelope,
  FaGlobe,
  FaBullhorn,
  FaComments,
  FaChartLine,
  FaChartBar,
  FaEye,
  FaFileAlt,
  FaChartPie,
} from "react-icons/fa";

import "./SocialMediaSolutions.css";

const GROUPS = [
  {
    title: "Content Strategy",
    desc: "Develop effective content strategies based on audience needs, search intent, business goals, and market opportunities.",
    chips: [
      { label: "Content Strategy", Icon: FaLightbulb },
      { label: "Audience Research", Icon: FaUsers },
      { label: "Keyword Research", Icon: FaSearch },
      { label: "Content Planning", Icon: FaCalendarAlt },
      { label: "Content Goals", Icon: FaBullseye },
    ],
  },
  {
    title: "Content Creation",
    desc: "Create valuable and engaging content that educates audiences, builds trust, strengthens brands, and supports business growth.",
    chips: [
      { label: "Blog Writing", Icon: FaPen },
      { label: "Copywriting", Icon: FaPenFancy },
      { label: "Visual Content", Icon: FaImage },
      { label: "Video Content", Icon: FaVideo },
      { label: "Content Editing", Icon: FaEdit },
    ],
  },
  {
    title: "Content Distribution",
    desc: "Distribute content across relevant digital channels to increase reach, engagement, visibility, and audience connections.",
    chips: [
      { label: "Social Media", Icon: FaShareAlt },
      { label: "Email Marketing", Icon: FaEnvelope },
      { label: "Website Content", Icon: FaGlobe },
      { label: "Content Promotion", Icon: FaBullhorn },
      { label: "Audience Engagement", Icon: FaComments },
    ],
  },
  {
    title: "Content Analytics",
    desc: "Measure content performance and use data-driven insights to improve engagement, traffic, conversions, and overall content ROI.",
    chips: [
      { label: "Content Analytics", Icon: FaChartLine },
      { label: "Traffic Analysis", Icon: FaChartBar },
      { label: "Engagement Tracking", Icon: FaEye },
      { label: "Content Performance", Icon: FaFileAlt },
      { label: "Conversion Analysis", Icon: FaChartPie },
    ],
  },
];

export default function ContentMarketingSolutions() {
  return (
    <section className="smo">
      <div className="smo__inner">
        <span className="smo__label">
          <i />
          Content Marketing
          <i />
        </span>

        <h2 className="smo__title">
          Strategic <b>Content Growth</b>
        </h2>

        <p className="smo__text">
          We create and distribute valuable, engaging, and SEO-focused content
          that builds brand authority, attracts the right audience, increases
          engagement, and drives meaningful business growth.
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