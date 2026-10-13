import hospitalImg from "../../assets/Home_Img/PortfolioCard/HospitalManagement.jpg";
import schoolImg from "../../assets/Home_Img/PortfolioCard/SchoolManagement.jpg";
import photographyImg from "../../assets/Home_Img/PortfolioCard/PhotographyStudio.jpg";
import vipDutyImg from "../../assets/Home_Img/PortfolioCard/VipDuty.jpg";
import caseInvestigationImg from "../../assets/Home_Img/PortfolioCard/CaseInvestigation.jpg";
import electionDutyImg from "../../assets/Home_Img/PortfolioCard/ElectionDuty.jpg";

// Folder ki saari images automatically utha leta hai.
const found = import.meta.glob(
  "../../assets/Home_Img/PortfolioCard/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);

// File ka naam capital/small se match kare ya na kare, image mil jaati hai.
// Image na mile to fallback image dikhti hai (error nahi aata).
const pick = (file, fallback) => {
  const target = file.toLowerCase();
  const key = Object.keys(found).find(
    (path) => path.split("/").pop().toLowerCase() === target
  );
  return key ? found[key] : fallback;
};

const writImg = pick("WRITManagement.jpg", vipDutyImg);
const trafficImg = pick("TrafficRoaster.jpg", vipDutyImg);
const sammanImg = pick("SammanManagement.jpg", vipDutyImg);

export const PORTFOLIO_FILTERS = ["All", "Private", "Government"];

// Explore More ka link: har card apne detail page par jaata hai
export const getPortfolioLink = (project) => `/portfolio/${project.slug}`;

export const PORTFOLIO_DATA = [
  {
    slug: "hospital-management-software",
    img: hospitalImg,
    category: "Private",
    title: "Hospital Management Software",
    desc: "Hospital Management Software streamlines healthcare operations with electronic health records, financial management, compliance, reporting, and efficient patient care.",
  },
  {
    slug: "school-management-software",
    img: schoolImg,
    category: "Private",
    title: "School Management Software",
    desc: "EDU-ERP is a comprehensive School Management Software that centralizes student records, faculty data, academic results, and daily operations to improve efficiency.",
  },
  {
    slug: "photography-studio-management-software",
    img: photographyImg,
    category: "Private",
    title: "Photography Studio Management Software",
    desc: "Photography Studio Management Software streamlines studio operations with shoot scheduling, task management, sales tracking, and centralized business management.",
  },
  {
    slug: "vip-duty-management-software",
    img: vipDutyImg,
    category: "Government",
    title: "VIP Duty Management Software",
    desc: "VIP Duty Management Software streamlines police VIP security operations with duty scheduling, automated replacements, SMS alerts, duty card printing, and real-time reporting.",
  },
  {
    slug: "case-investigation-management",
    img: caseInvestigationImg,
    category: "Government",
    title: "Case Investigation Management Documentation!",
    desc: "Case Investigation Management Software streamlines police investigations by managing evidence, witnesses, case records, legal documents, and investigation workflows efficiently.",
  },
  {
    slug: "election-duty-management-software",
    img: electionDutyImg,
    category: "Government",
    title: "Election Duty Management Software",
    desc: "Election Duty Management Software streamlines election personnel management, booth duty, law and order assignments, report generation, booklet printing, and duty monitoring.",
  },
  {
    slug: "writ-management-application",
    img: writImg,
    category: "Government",
    title: "Writ Management Application",
    desc: "Writ Management Application is a smart legal case management system that streamlines criminal case tracking, incident management, analysis, and law enforcement operations.",
  },
  {
    slug: "traffic-roaster-duty-plan",
    img: trafficImg,
    category: "Government",
    title: "Traffic Roaster Duty Plan",
    desc: "Smart traffic duty scheduling software helps cities optimize officer deployment, reduce congestion, minimize scheduling errors, and manage changing road conditions efficiently.",
  },
  {
    slug: "samman-management-software",
    img: sammanImg,
    category: "Government",
    title: "Samman Management Software",
    desc: "Samman Management Software is a smart police management system for efficient case tracking, crime reporting, officer management, and secure criminal record maintenance.",
  },
];