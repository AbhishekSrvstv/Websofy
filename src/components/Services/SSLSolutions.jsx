import {
  FaShieldAlt,
  FaBuilding,
  FaCertificate,
  FaGlobe,
  FaLayerGroup,
  FaLock,
  FaKey,
  FaChrome,
  FaUserLock,
  FaDatabase,
  FaUnlockAlt,
  FaHashtag,
  FaLink,
  FaDownload,
  FaCog,
  FaSyncAlt,
  FaEye,
  FaTools,
} from "react-icons/fa";
import "./MobileSolutions.css";

const GROUPS = [
  {
    title: "SSL Certificates",
    desc: "Secure websites and online applications with trusted SSL certificates.",
    items: [
      { label: "DV SSL", icon: FaShieldAlt },
      { label: "OV SSL", icon: FaBuilding },
      { label: "EV SSL", icon: FaCertificate },
      { label: "Wildcard SSL", icon: FaGlobe },
      { label: "Multi-Domain SSL", icon: FaLayerGroup },
    ],
  },
  {
    title: "Website Security",
    desc: "Protect websites and users from online threats and unauthorized access.",
    items: [
      { label: "HTTPS", icon: FaLock },
      { label: "TLS Encryption", icon: FaKey },
      { label: "Browser Security", icon: FaChrome },
      { label: "Secure Login", icon: FaUserLock },
      { label: "Data Protection", icon: FaDatabase },
    ],
  },
  {
    title: "Encryption",
    desc: "Protect sensitive information through secure encryption technologies.",
    items: [
      { label: "TLS", icon: FaLock },
      { label: "AES Encryption", icon: FaKey },
      { label: "RSA Encryption", icon: FaUnlockAlt },
      { label: "Secure Hashing", icon: FaHashtag },
      { label: "Certificate Chains", icon: FaLink },
    ],
  },
  {
    title: "Certificate Management",
    desc: "Reliable certificate installation, configuration, monitoring, and renewal.",
    items: [
      { label: "SSL Installation", icon: FaDownload },
      { label: "SSL Configuration", icon: FaCog },
      { label: "Certificate Renewal", icon: FaSyncAlt },
      { label: "SSL Monitoring", icon: FaEye },
      { label: "SSL Troubleshooting", icon: FaTools },
    ],
  },
];

export default function SSLSolutions() {
  return (
    <section className="ms">
      <div className="ms__head">
        <span className="ms__tag">
          <i></i> SSL Technology <i></i>
        </span>

        <h2>
          Security <span>We Provide</span>
        </h2>

        <p>
          We use trusted SSL technologies and secure encryption standards to
          protect websites, sensitive data, and online communications.
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