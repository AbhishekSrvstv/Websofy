import heroFallback from "../../assets/Services-img/Services-hero.jpg";

const found = import.meta.glob(
  "../../assets/Blog_img/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);

const pick = (name, fallback = heroFallback) => {
  const target = name.toLowerCase();
  const key = Object.keys(found).find(
    (path) =>
      path.split("/").pop().replace(/\.[^.]+$/, "").toLowerCase() === target
  );
  return key ? found[key] : fallback;
};

export const CAREERS_HERO = pick("CareersHero");

const CAREER_EMAIL = "hr@websofy.com";
const CAREER_WHATSAPP = "919335785354";

export const getJobLink = () => "/careers";

export const getEmailLink = (job) =>
  `mailto:${CAREER_EMAIL}?subject=${encodeURIComponent(
    `Application for ${job.title}`
  )}`;

export const getWhatsAppLink = (job) =>
  `https://wa.me/${CAREER_WHATSAPP}?text=${encodeURIComponent(
    `Hello, I want to apply for the ${job.title} position.`
  )}`;

export const JOBS = [
  {
    slug: "seo-executive-fresher",
    title: "SEO Executive Fresher",
    opportunity: "Job Opening",
    location: "Lucknow",
    type: "Full Time",
    desc: "We are looking for a passionate SEO Executive (Fresher) who is eager to learn and grow in the field of digital marketing.",
  },
  {
    slug: "full-stack-developer",
    title: "Full Stack Developer",
    opportunity: "Job Opening",
    location: "Mumbai",
    type: "Full Time",
    desc: "We are looking for a proactive and enthusiastic Full Stack Developer to join our HR team. This internship is designed for students and recent graduates.",
  },
  {
    slug: "human-resources-hr-intern",
    title: "Human Resources (HR) Intern",
    opportunity: "Internship",
    location: "Delhi",
    type: "Contract",
    desc: "We are looking for a proactive and enthusiastic Human Resources (HR) Intern to join our HR team. This internship is designed for students and recent graduates.",
  },
  {
    slug: "graphic-designer",
    title: "Graphic Designer",
    opportunity: "Job Opening",
    location: "Lucknow",
    type: "Full Time",
    desc: "We are looking for a creative Graphic Designer to create engaging social media creatives, branding material, and marketing designs for our clients.",
  },
];

const unique = (key) => ["All", ...Array.from(new Set(JOBS.map((j) => j[key])))];

export const OPPORTUNITY_TYPES = unique("opportunity");
export const JOB_TYPES = unique("type");
export const LOCATIONS = unique("location");