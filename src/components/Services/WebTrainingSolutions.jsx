import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaPhp,
  FaLaravel,
  FaPython,
  FaPlug,
  FaDatabase,
  FaLeaf,
  FaFileCode,
  FaProjectDiagram,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaDocker,
  FaServer,
} from "react-icons/fa";
import "./MobileSolutions.css";

const GROUPS = [
  {
    title: "Frontend Development",
    desc: "Learn to build modern, responsive and interactive web interfaces.",
    items: [
      { label: "HTML", icon: FaHtml5 },
      { label: "CSS", icon: FaCss3Alt },
      { label: "JavaScript", icon: FaJs },
      { label: "React", icon: FaReact },
      { label: "Bootstrap", icon: FaBootstrap },
    ],
  },
  {
    title: "Backend Development",
    desc: "Build powerful server-side applications and backend functionality.",
    items: [
      { label: "Node.js", icon: FaNodeJs },
      { label: "PHP", icon: FaPhp },
      { label: "Laravel", icon: FaLaravel },
      { label: "Python", icon: FaPython },
      { label: "REST API", icon: FaPlug },
    ],
  },
  {
    title: "Database & APIs",
    desc: "Understand data management and how applications communicate with APIs.",
    items: [
      { label: "MySQL", icon: FaDatabase },
      { label: "MongoDB", icon: FaLeaf },
      { label: "REST API", icon: FaPlug },
      { label: "JSON", icon: FaFileCode },
      { label: "Database Design", icon: FaProjectDiagram },
    ],
  },
  {
    title: "Tools & Deployment",
    desc: "Master essential development tools and deploy projects confidently.",
    items: [
      { label: "Git", icon: FaGitAlt },
      { label: "GitHub", icon: FaGithub },
      { label: "VS Code", icon: FaCode },
      { label: "Docker", icon: FaDocker },
      { label: "Hosting", icon: FaServer },
    ],
  },
];

export default function WebTrainingSolutions() {
  return (
    <section className="ms">
      <div className="ms__head">
        <span className="ms__tag">
          <i></i> Learning Technologies <i></i>
        </span>

        <h2>
          Technologies <span>You Learn</span>
        </h2>

        <p>
          Learn modern web technologies and practical development skills to
          build responsive, scalable, and professional web applications.
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