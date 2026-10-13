import heroImg from "../../assets/Services-img/Services-hero.jpg";

const found = import.meta.glob(
  "../../assets/Solutions_img/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);

const pick = (name) => {
  const target = name.toLowerCase();
  const key = Object.keys(found).find(
    (path) =>
      path.split("/").pop().replace(/\.[^.]+$/, "").toLowerCase() === target
  );
  return key ? found[key] : heroImg;
};

export const getSolutionLink = () => "/solutions/our-solutions";

export const SOLUTIONS = [
  {
    slug: "audio-visual-solutions",
    img: pick("AudioVisual"),
    category: "Communication & Collaboration",
    title: "Audio Visual Solutions",
    desc: "Websofy provides scalable cloud solutions that reduce infrastructure costs, simplify IT management, improve flexibility, and help businesses securely access applications and data.",
  },
  {
    slug: "cloud-solution",
    img: pick("CloudSolution"),
    category: "IT Infrastructure",
    title: "Cloud Solution",
    desc: "Websofy provides scalable cloud solutions that reduce infrastructure costs, simplify IT management, improve flexibility, and help businesses securely access applications and data.",
  },
  {
    slug: "collaborative-solutions",
    img: pick("CollaborativeSolutions"),
    category: "Communication & Collaboration",
    title: "Collaborative Solutions",
    desc: "Websofy offers collaborative solutions in Lucknow that connect teams, partners, and organizations, improving communication, innovation, and sustainable business growth",
  },
  {
    slug: "network-security",
    img: pick("NetworkSecurity"),
    category: "Cyber Security",
    title: "Network Security",
    desc: "Websofy provides trusted network security solutions, including application security and firewall services, to protect business networks, systems, applications, and data.",
  },
  {
    slug: "enterprise-network-solutions",
    img: pick("EnterpriseNetworkSolutions"),
    category: "IT Infrastructure",
    title: "Enterprise Network Solutions",
    desc: "Websofy is a leading enterprise network solutions provider in Lucknow, delivering secure, scalable, and high-performance network solutions to optimize business connectivity.",
  },
  {
    slug: "structured-cabling",
    img: pick("StructuredCabling"),
    category: "IT Infrastructure",
    title: "Structured Cabling",
    desc: "Websofy provides structured cabling solutions for reliable IT infrastructure, seamless connectivity, efficient data management, and scalable network systems for modern businesses.",
  },
  {
    slug: "security-surveillance",
    img: pick("Security&Surveillance"),
    category: "Security & Surveillance",
    title: "Security & Surveillance",
    desc: "Websofy offers professional CCTV installation and access control systems to enhance premises security, prevent unauthorized access, and provide reliable surveillance solutions.",
  },
];

export const SOLUTION_CATEGORIES = [
  "All",
  ...Array.from(new Set(SOLUTIONS.map((s) => s.category))),
];