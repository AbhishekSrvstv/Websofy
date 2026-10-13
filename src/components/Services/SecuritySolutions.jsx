import {
  FaShieldAlt,
  FaLock,
  FaNetworkWired,
  FaEye,
  FaServer,
  FaSearch,
  FaBug,
  FaCode,
  FaPlug,
  FaGlobe,
  FaKey,
  FaUserLock,
  FaDatabase,
  FaUserShield,
  FaUserSecret,
  FaClipboardCheck,
  FaExclamationTriangle,
  FaBan,
} from "react-icons/fa";
import "./MobileSolutions.css";

const GROUPS = [
  {
    title: "Network Security",
    desc: "Protecting networks, systems, and communication from security threats.",
    items: [
      { label: "Firewall", icon: FaShieldAlt },
      { label: "VPN", icon: FaLock },
      { label: "Network Monitoring", icon: FaNetworkWired },
      { label: "Intrusion Detection", icon: FaEye },
      { label: "DDoS Protection", icon: FaServer },
    ],
  },
  {
    title: "Application Security",
    desc: "Securing applications against vulnerabilities and cyber attacks.",
    items: [
      { label: "Vulnerability Scanning", icon: FaSearch },
      { label: "Penetration Testing", icon: FaBug },
      { label: "Code Security", icon: FaCode },
      { label: "API Security", icon: FaPlug },
      { label: "Web Security", icon: FaGlobe },
    ],
  },
  {
    title: "Data Security",
    desc: "Keeping sensitive business and customer data protected and secure.",
    items: [
      { label: "Data Encryption", icon: FaKey },
      { label: "Access Control", icon: FaUserLock },
      { label: "Backup Security", icon: FaDatabase },
      { label: "Password Security", icon: FaUserShield },
      { label: "Data Privacy", icon: FaUserSecret },
    ],
  },
  {
    title: "Security Monitoring",
    desc: "Detecting, analyzing, and responding to security threats in real time.",
    items: [
      { label: "Threat Monitoring", icon: FaEye },
      { label: "Security Auditing", icon: FaClipboardCheck },
      { label: "Incident Response", icon: FaExclamationTriangle },
      { label: "Malware Protection", icon: FaBan },
      { label: "Security Assessment", icon: FaShieldAlt },
    ],
  },
];

export default function SecuritySolutions() {
  return (
    <section className="ms">
      <div className="ms__head">
        <span className="ms__tag">
          <i></i> Security Technologies <i></i>
        </span>

        <h2>
          Technologies <span>We Use</span>
        </h2>

        <p>
          We use modern security technologies and proven protection practices to
          safeguard systems, applications, networks, and sensitive data from
          evolving cyber threats.
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