import {
  FaShareAlt,
  FaUsers,
  FaSearch,
  FaCalendarAlt,
  FaHashtag,
  FaImage,
  FaVideo,
  FaPenNib,
  FaRegCommentDots,
  FaCalendarCheck,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaUserCheck,
  FaChartLine,
  FaComments,
  FaChartBar,
  FaFileAlt,
} from "react-icons/fa";

import "./SocialMediaSolutions.css";

const GROUPS = [
  {
    title: "Social Media Strategy",
    desc: "Build effective social media strategies to increase visibility and audience engagement.",
    chips: [
      { label: "Social Media Strategy", Icon: FaShareAlt },
      { label: "Audience Research", Icon: FaUsers },
      { label: "Competitor Analysis", Icon: FaSearch },
      { label: "Content Planning", Icon: FaCalendarAlt },
      { label: "Hashtag Strategy", Icon: FaHashtag },
    ],
  },
  {
    title: "Content Creation",
    desc: "Create engaging and relevant content that strengthens your social media presence.",
    chips: [
      { label: "Social Graphics", Icon: FaImage },
      { label: "Reels & Videos", Icon: FaVideo },
      { label: "Copywriting", Icon: FaPenNib },
      { label: "Creative Captions", Icon: FaRegCommentDots },
      { label: "Content Calendar", Icon: FaCalendarCheck },
    ],
  },
  {
    title: "Platform Optimization",
    desc: "Optimize social profiles and content for better reach, visibility, and engagement.",
    chips: [
      { label: "Facebook Optimization", Icon: FaFacebookF },
      { label: "Instagram Optimization", Icon: FaInstagram },
      { label: "LinkedIn Optimization", Icon: FaLinkedinIn },
      { label: "YouTube Optimization", Icon: FaYoutube },
      { label: "Profile Optimization", Icon: FaUserCheck },
    ],
  },
  {
    title: "Analytics & Engagement",
    desc: "Measure social performance and build stronger relationships with your audience.",
    chips: [
      { label: "Social Analytics", Icon: FaChartLine },
      { label: "Engagement Tracking", Icon: FaComments },
      { label: "Reach Analysis", Icon: FaChartBar },
      { label: "Community Management", Icon: FaUsers },
      { label: "Performance Reports", Icon: FaFileAlt },
    ],
  },
];

export default function SocialMediaSolutions() {
  return (
    <section className="smo">
      <div className="smo__inner">
        <span className="smo__label">
          <i />
          Social Media Expertise
          <i />
        </span>

        <h2 className="smo__title">
          Social <b>You Grow</b>
        </h2>

        <p className="smo__text">
          Build a stronger social presence through strategic content, platform
          optimization, audience engagement, and performance-driven social media
          strategies.
        </p>

        <div className="smo__list">
          {GROUPS.map((group, index) => (
            <div className="smo__row" key={group.title}>
              <div className="smo__head">
                <span className="smo__num">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3>{group.title}</h3>
                  <p>{group.desc}</p>
                </div>
              </div>

              <div className="smo__chips">
                {group.chips.map(({ label, Icon }) => (
                  <span className="smo__chip" key={label}>
                    <span className="smo__icon">
                      <Icon />
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