import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaMobileAlt,
  FaNodeJs,
  FaPhp,
  FaLaravel,
  FaPython,
  FaCode,
  FaDatabase,
  FaPlug,
  FaServer,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaCloud,
  FaRocket,
} from "react-icons/fa";
import "./MobileSolutions.css";

const GROUPS = [
  {
    title: "Frontend Development",
    desc: "Build responsive, modern, and user-friendly interfaces that provide smooth experiences across devices and screen sizes.",
    items: [
      { label: "HTML5", icon: FaHtml5 },
      { label: "CSS3", icon: FaCss3Alt },
      { label: "JavaScript", icon: FaJs },
      { label: "React.js", icon: FaReact },
      { label: "Responsive Design", icon: FaMobileAlt },
    ],
  },
  {
    title: "Backend Development",
    desc: "Develop secure, scalable, and reliable backend systems that power websites, business applications, and digital platforms.",
    items: [
      { label: "Node.js", icon: FaNodeJs },
      { label: "PHP", icon: FaPhp },
      { label: "Laravel", icon: FaLaravel },
      { label: "Python", icon: FaPython },
      { label: "Custom Development", icon: FaCode },
    ],
  },
  {
    title: "Database & APIs",
    desc: "Build reliable data systems and API integrations that connect websites with applications, services, and business platforms.",
    items: [
      { label: "Database Development", icon: FaDatabase },
      { label: "REST APIs", icon: FaPlug },
      { label: "Server Management", icon: FaServer },
      { label: "Database Integration", icon: FaDatabase },
      { label: "Third-Party APIs", icon: FaPlug },
    ],
  },
  {
    title: "Deployment & Performance",
    desc: "Deploy websites securely and optimize their speed, reliability, scalability, and overall technical performance.",
    items: [
      { label: "Git", icon: FaGitAlt },
      { label: "GitHub", icon: FaGithub },
      { label: "Docker", icon: FaDocker },
      { label: "Cloud Hosting", icon: FaCloud },
      { label: "Performance Optimization", icon: FaRocket },
    ],
  },
];

export default function WebSolutions() {
  return (
    <section className="ms">
      <div className="ms__head">
        <span className="ms__tag">
          <i></i> Web Development <i></i>
        </span>

        <h2>
          Modern <span>Web Solutions</span>
        </h2>

        <p>
          We use modern web technologies and proven development practices to
          build fast, secure, responsive, and scalable websites that deliver
          exceptional digital experiences.
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