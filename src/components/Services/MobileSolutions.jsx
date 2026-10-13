import {
  FaAndroid,
  FaApple,
  FaReact,
  FaMobileAlt,
  FaCode,
  FaNodeJs,
  FaPhp,
  FaLaravel,
  FaPlug,
  FaDatabase,
  FaBell,
  FaCloud,
  FaShieldAlt,
  FaCheckCircle,
  FaBug,
  FaRocket,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import "./MobileSolutions.css";

const GROUPS = [
  {
    title: "Mobile App Development",
    desc: "Build modern, responsive, and high performance mobile applications for Android, iOS, and cross-platform environments.",
    items: [
      { label: "Android Apps", icon: FaAndroid },
      { label: "iOS Apps", icon: FaApple },
      { label: "React Native", icon: FaReact },
      { label: "Mobile UI Development", icon: FaMobileAlt },
      { label: "Custom App Development", icon: FaCode },
    ],
  },
  {
    title: "Backend & API Integration",
    desc: "Connect mobile applications with secure backend systems, APIs, databases, and third-party services for reliable app functionality.",
    items: [
      { label: "Node.js", icon: FaNodeJs },
      { label: "PHP", icon: FaPhp },
      { label: "Laravel", icon: FaLaravel },
      { label: "REST APIs", icon: FaPlug },
      { label: "Database Integration", icon: FaDatabase },
    ],
  },
  {
    title: "App Features & Services",
    desc: "Implement powerful mobile features and integrations that improve functionality, engagement, communication, and user experience.",
    items: [
      { label: "Push Notifications", icon: FaBell },
      { label: "Cloud Integration", icon: FaCloud },
      { label: "Payment Integration", icon: FaCode },
      { label: "Authentication", icon: FaShieldAlt },
      { label: "Third-Party APIs", icon: FaPlug },
    ],
  },
  {
    title: "Testing & Deployment",
    desc: "Test applications across devices and environments while ensuring stability, security, performance, and smooth app deployment.",
    items: [
      { label: "App Testing", icon: FaCheckCircle },
      { label: "Bug Testing", icon: FaBug },
      { label: "Performance Testing", icon: FaRocket },
      { label: "Git", icon: FaGitAlt },
      { label: "GitHub", icon: FaGithub },
    ],
  },
];

export default function MobileSolutions() {
  return (
    <section className="ms">
      <div className="ms__head">
        <span className="ms__tag">
          <i></i> App Innovation <i></i>
        </span>

        <h2>
          Smart <span>Mobile Solutions</span>
        </h2>

        <p>
          We build secure, scalable, and high-performance mobile applications
          with modern technologies, seamless API integration, engaging
          experiences, and reliable performance across devices.
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