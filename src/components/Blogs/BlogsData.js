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

export const BLOG_HERO = pick("BlogHero");

export const getBlogLink = () => "/blogs";

export const BLOGS = [
  {
    slug: "taxi-booking-application-development-company-in-kanpur",
    img: pick("TaxiBooking"),
    category: "App Development",
    date: "September 13, 2026",
    title: "Taxi Booking Application Development Company in Kanpur",
    desc: "Websofy is a leading taxi Booking App Development Company in Kanpur offering custom cab apps with GPS tracking, secure payments, AI dispatch, and real-time rides.",
    author: "Websofy",
  },
  {
    slug: "digital-marketing-company-in-lucknow",
    img: pick("DigitalMarketing"),
    category: "Digital Marketing",
    date: "September 12, 2026",
    title: "Digital Marketing Company in Lucknow",
    desc: "Websofy is a leading Digital Marketing Company in Lucknow offering result-driven strategies, creative campaigns, and data-driven solutions to boost visibility, leads, and sales.",
    author: "Websofy",
  },
  {
    slug: "restaurant-management-software-company-in-kanpur",
    img: pick("RestaurantManagement"),
    category: "Software Development",
    date: "September 11, 2026",
    title: "Restaurant Management Software Company In Kanpur",
    desc: "Websofy offers advanced Restaurant Management Software in Kanpur with POS, billing, inventory, CRM, GST compliance, kitchen automation, and multi-branch management.",
    author: "Websofy",
  },
  {
    slug: "school-management-software-company-in-kanpur",
    img: pick("SchoolManagement (2)"),
    category: "Software Development",
    date: "September 10, 2026",
    title: "School Management Software Company In Kanpur",
    desc: "Websofy offers secure and scalable School Management Software in Kanpur to simplify admissions, attendance, fees, exams, communication, and school administration.",
    author: "Websofy",
  },
  {
    slug: "what-are-chatgpt-ads",
    img: pick("WhatareChatGPT"),
    category: "ChatGPT Ads",
    date: "September 8, 2026",
    title: "What Are ChatGPT Ads? A Complete Beginner's Guide",
    desc: "Learn what ChatGPT ads are, how AI-powered advertising works, and how businesses can reach users exploring products, comparing options, and making purchase decisions.",
    author: "Websofy",
  },
  {
    slug: "tour-and-travel-website-designing-in-lucknow",
    img: pick("Tour&Travel"),
    category: "Tour & Travel",
    date: "September 7, 2026",
    title: "Tour and Travel Website Designing in Lucknow",
    desc: "Travel Website Designing in Lucknow helps travel agencies attract customers with professional, responsive websites featuring tour packages, bookings, and travel services.",
    author: "Websofy",
  },
];

export const BLOG_CATEGORIES = [
  "All",
  ...Array.from(new Set(BLOGS.map((b) => b.category))),
];