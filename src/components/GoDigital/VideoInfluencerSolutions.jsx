import {
  FaSearch,
  FaUsers,
  FaBullseye,
  FaBullhorn,
  FaHandshake,
  FaVideo,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaFileAlt,
  FaShareAlt,
  FaFacebookF,
  FaComments,
  FaChartLine,
  FaEye,
  FaHeart,
  FaChartBar,
  FaCalendarAlt,
} from "react-icons/fa";

import "./SocialMediaSolutions.css";

const GROUPS = [
  {
    title: "Influencer Strategy",
    desc: "Build effective influencer campaigns by identifying the right creators, audiences, platforms, and campaign objectives.",
    chips: [
      { label: "Influencer Research", Icon: FaSearch },
      { label: "Audience Analysis", Icon: FaUsers },
      { label: "Influencer Selection", Icon: FaBullseye },
      { label: "Campaign Strategy", Icon: FaBullhorn },
      { label: "Brand Partnerships", Icon: FaHandshake },
    ],
  },
  {
    title: "Video Content Creation",
    desc: "Develop engaging influencer-led video content designed to showcase products, communicate brand stories, and connect with target audiences.",
    chips: [
      { label: "Short-Form Videos", Icon: FaVideo },
      { label: "Instagram Reels", Icon: FaInstagram },
      { label: "YouTube Videos", Icon: FaYoutube },
      { label: "TikTok Videos", Icon: FaTiktok },
      { label: "Video Storytelling", Icon: FaFileAlt },
    ],
  },
  {
    title: "Campaign Promotion",
    desc: "Promote influencer content across social platforms to increase brand awareness, audience engagement, reach, and product visibility.",
    chips: [
      { label: "Social Promotion", Icon: FaShareAlt },
      { label: "Facebook Campaigns", Icon: FaFacebookF },
      { label: "Instagram Campaigns", Icon: FaInstagram },
      { label: "YouTube Promotion", Icon: FaYoutube },
      { label: "Audience Engagement", Icon: FaComments },
    ],
  },
  {
    title: "Analytics & Performance",
    desc: "Track influencer campaign performance using reach, views, engagement, audience interactions, and conversion-focused metrics.",
    chips: [
      { label: "Video Analytics", Icon: FaChartLine },
      { label: "Reach Tracking", Icon: FaEye },
      { label: "Engagement Analytics", Icon: FaHeart },
      { label: "Campaign Reports", Icon: FaChartBar },
      { label: "Campaign Scheduling", Icon: FaCalendarAlt },
    ],
  },
];

export default function VideoInfluencerSolutions() {
  return (
    <section className="smo">
      <div className="smo__inner">
        <span className="smo__label">
          <i />
          Influencer Marketing
          <i />
        </span>

        <h2 className="smo__title">
          Video <b>Influence</b>
        </h2>

        <p className="smo__text">
          We connect brands with relevant influencers and create engaging video
          campaigns that increase reach, build audience trust, strengthen brand
          visibility, and drive meaningful engagement.
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