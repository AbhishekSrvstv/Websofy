import {
  FaSearch,
  FaBullseye,
  FaUsers,
  FaLightbulb,
  FaProjectDiagram,
  FaFileAlt,
  FaTags,
  FaHeading,
  FaImage,
  FaLink,
  FaClipboardCheck,
  FaCode,
  FaSitemap,
  FaRobot,
  FaTachometerAlt,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
  FaGoogle,
  FaChartLine,
  FaChartBar,
} from "react-icons/fa";

import "./SocialMediaSolutions.css";

const GROUPS = [
  {
    title: "SEO Strategy & Research",
    desc: "Build data-driven SEO strategies based on search intent, keywords, competitors, and market opportunities.",
    chips: [
      { label: "Keyword Research", Icon: FaSearch },
      { label: "Search Intent", Icon: FaBullseye },
      { label: "Competitor Analysis", Icon: FaUsers },
      { label: "Content Strategy", Icon: FaLightbulb },
      { label: "Keyword Mapping", Icon: FaProjectDiagram },
    ],
  },
  {
    title: "On-Page SEO",
    desc: "Optimize website content and page elements to improve relevance, visibility, and search rankings.",
    chips: [
      { label: "Content Optimization", Icon: FaFileAlt },
      { label: "Meta Optimization", Icon: FaTags },
      { label: "Heading Optimization", Icon: FaHeading },
      { label: "Image SEO", Icon: FaImage },
      { label: "Internal Linking", Icon: FaLink },
    ],
  },
  {
    title: "Technical SEO",
    desc: "Improve website structure, crawlability, performance, and technical health for better search engine visibility.",
    chips: [
      { label: "Technical Audits", Icon: FaClipboardCheck },
      { label: "Schema Markup", Icon: FaCode },
      { label: "XML Sitemap", Icon: FaSitemap },
      { label: "Robots.txt", Icon: FaRobot },
      { label: "Page Speed", Icon: FaTachometerAlt },
    ],
  },
  {
    title: "Off-Page SEO & Analytics",
    desc: "Strengthen website authority and track SEO performance through quality links, search analytics, and continuous optimization.",
    chips: [
      { label: "Link Building", Icon: FaExternalLinkAlt },
      { label: "Local SEO", Icon: FaMapMarkerAlt },
      { label: "Google Search", Icon: FaGoogle },
      { label: "SEO Analytics", Icon: FaChartLine },
      { label: "Ranking Reports", Icon: FaChartBar },
    ],
  },
];

export default function SearchEngineOptimizationSolutions() {
  return (
    <section className="smo">
      <div className="smo__inner">
        <span className="smo__label">
          <i />
          SEO Expertise
          <i />
        </span>

        <h2 className="smo__title">
          Search Strategies <b>We Use</b>
        </h2>

        <p className="smo__text">
          We use proven SEO strategies, modern optimization techniques, and
          data-driven insights to improve search visibility, rankings, traffic,
          and long-term organic growth.
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