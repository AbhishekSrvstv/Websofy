import { Link } from "react-router-dom";
import { FaHome, FaChevronRight, FaArrowRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { SERVICES } from "./ServicesDropdown";
import useServiceReveal from "./useServiceReveal";
import "./ServicesPage.css";

import OurServices from "../../assets/Services-img/Our_Services.jpg";

const DESCRIPTIONS = {
  "Software Development":
    "Custom software built around your business, from CRMs and ERPs to automation tools that save time.",

  "Website Development":
    "Fast, responsive and SEO-friendly websites that look sharp on every screen and turn visitors into customers.",

  "Mobile App Development":
    "Android and iOS apps with smooth design and reliable performance, built to grow with your users.",

  "Graphic Design":
    "Logos, branding, social media creatives and print designs that make your business stand out.",

  "Cyber Security Services":
    "Vulnerability checks, threat protection and secure setups to keep your data and customers safe.",

  "SSL Certificate":
    "Encrypt your website with a trusted SSL certificate, build customer trust and improve search ranking.",

  "Domain Hosting":
    "Reliable domain registration and hosting with high uptime, quick support and easy management.",

  "Bulk SMS":
    "Reach thousands of customers instantly with promotional and transactional SMS campaigns.",

  "Bulk Email":
    "Email campaigns that land in the inbox, with clean templates and delivery you can track.",

  "Bulk WhatsApp":
    "Send offers, updates and reminders to your audience on WhatsApp in one go.",

  Training:
    "Hands-on, industry-focused training so students and professionals learn skills they can use at work.",
};

const WHY = [
  "Experienced team that delivers on time",
  "Custom solutions, not one-size-fits-all",
  "Transparent pricing with no hidden costs",
  "Support that continues after launch",
];

export default function ServicesPage() {
  useServiceReveal();

  return (
    <>
      {/* =========================
          HERO
      ========================== */}
      <section className="svc-hero">

        {/* Hero Background Image */}
        <div className="svc-hero__bg">
          <img
            src={OurServices}
            alt="Our Services - Websofy"
          />
        </div>

        {/* Dark Overlay */}
        <div className="svc-hero__overlay"></div>

        {/* Hero Content */}
        <div className="svc-hero__inner">

          {/* Breadcrumb */}
          <div className="svc-crumb">
            <Link to="/">
              <FaHome />
              Home
            </Link>

            <FaChevronRight className="svc-crumb__sep" />

            <span>Services</span>
          </div>

          {/* Decorative Bars */}
          <div className="svc-bars">
            <i />
            <i />
          </div>

          {/* Title */}
          <h1 className="svc-hero__title">
            Our <span>Services</span>
          </h1>

          {/* Description */}
          <p className="svc-hero__text">
            Everything your business needs to grow online, from software and
            websites to marketing and security, under one roof.
          </p>

        </div>
      </section>

      {/* =========================
          INTRO
      ========================== */}
      <section className="svc-intro">
        <span className="svc-badge">
          <i /> What we do
        </span>

        <h2>
          Complete digital solutions for your business
        </h2>

        <p>
          Websofy helps businesses in Lucknow and beyond build, launch and grow
          their digital presence. Pick a service below to see how we can help.
        </p>
      </section>

      {/* =========================
          SERVICES GRID
      ========================== */}
      <section className="svc-grid-wrap">
        <div className="svc-grid">
          {SERVICES.map(({ label, href, icon: Icon }) => (
            <Link
              to={href}
              className="svc-card"
              key={label}
            >
              {/* Service Icon */}
              <span className="svc-card__icon">
                <Icon />
              </span>

              {/* Service Title */}
              <h3>{label}</h3>

              {/* Service Description */}
              <p>
                {DESCRIPTIONS[label]}
              </p>

              {/* Learn More */}
              <span className="svc-card__more">
                Learn more
                <FaArrowRight />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* =========================
          WHY WEBOSFY
      ========================== */}
      <section className="svc-why">
        <div className="svc-why__inner">

          {/* Left Content */}
          <div>
            <span className="svc-badge">
              <i /> Why Websofy
            </span>

            <h2>
              Why businesses choose us
            </h2>

            <p>
              We combine technical skill with a practical understanding of your
              business, so every project is built to bring results.
            </p>
          </div>

          {/* Right List */}
          <ul className="svc-why__list">
            {WHY.map((w) => (
              <li key={w}>
                <span>
                  <FaCheck />
                </span>

                {w}
              </li>
            ))}
          </ul>

        </div>
      </section>

      {/* =========================
          CTA
      ========================== */}
      <section className="svc-cta">
        <div className="svc-cta__card">

          {/* CTA Text */}
          <div className="svc-cta__text">

            <span className="svc-cta__badge">
              <i /> Let's work together
            </span>

            <h2>
              Have an Idea? Let's Turn It Into Reality
            </h2>

            <p>
              Tell us what you need and our team will get back to you with the
              right solution.
            </p>

          </div>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="svc-cta__btn"
          >
            Talk to Our Team
            <FaArrowRight />
          </Link>

        </div>
      </section>
    </>
  );
}