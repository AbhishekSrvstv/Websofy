import {
  FaSearch,
  FaGoogle,
  FaKey,
  FaFileAlt,
  FaCogs,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaShareAlt,
  FaBullhorn,
  FaPenFancy,
  FaEnvelope,
  FaEdit,
  FaBlog,
  FaWhatsapp,
  FaChartLine,
  FaTags,
  FaFacebook,
  FaBullseye,
  FaChartBar,
} from "react-icons/fa";
import "./MobileSolutions.css";

const GROUPS = [
  {
    title: "SEO & SEM",
    desc: "Learn strategies to improve search visibility, rankings, and website traffic.",
    items: [
      { label: "SEO", icon: FaSearch },
      { label: "Google Ads", icon: FaGoogle },
      { label: "Keyword Research", icon: FaKey },
      { label: "On-Page SEO", icon: FaFileAlt },
      { label: "Technical SEO", icon: FaCogs },
    ],
  },
  {
    title: "Social Media Marketing",
    desc: "Build engaging social media campaigns and grow audiences across digital platforms.",
    items: [
      { label: "Facebook Marketing", icon: FaFacebookF },
      { label: "Instagram Marketing", icon: FaInstagram },
      { label: "LinkedIn Marketing", icon: FaLinkedinIn },
      { label: "Social Media Strategy", icon: FaShareAlt },
      { label: "Social Media Ads", icon: FaBullhorn },
    ],
  },
  {
    title: "Content & Email Marketing",
    desc: "Create valuable content and effective email campaigns that connect with customers.",
    items: [
      { label: "Content Marketing", icon: FaPenFancy },
      { label: "Email Marketing", icon: FaEnvelope },
      { label: "Copywriting", icon: FaEdit },
      { label: "Blog Marketing", icon: FaBlog },
      { label: "WhatsApp Marketing", icon: FaWhatsapp },
    ],
  },
  {
    title: "Analytics & Advertising",
    desc: "Measure campaign performance and optimize digital marketing results.",
    items: [
      { label: "Google Analytics", icon: FaChartLine },
      { label: "Google Tag Manager", icon: FaTags },
      { label: "Meta Ads", icon: FaFacebook },
      { label: "Conversion Tracking", icon: FaBullseye },
      { label: "Campaign Analytics", icon: FaChartBar },
    ],
  },
];

export default function DigitalMarketingTrainingSolutions() {
  return (
    <section className="ms">
      <div className="ms__head">
        <span className="ms__tag">
          <i></i> Digital Marketing Skills <i></i>
        </span>

        <h2>
          Marketing <span>You Master</span>
        </h2>

        <p>
          Master modern digital marketing strategies through practical learning
          in SEO, social media, advertising, content marketing, and analytics.
        </p>
      </div>

      <div className="ms__list">
        {GROUPS.map(({ title, desc, items }, index) => (
          <div className="ms__row" key={title}>
            <div className="ms__info">
              <span className="ms__num">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{title}</h3>
              <p>{desc}</p>
            </div>

            <div className="ms__chips">
              {items.map(({ label, icon: Icon }) => (
                <span className="ms__chip" key={label}>
                  <span className="ms__chip-icon">
                    <Icon />
                  </span>
                  {label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}