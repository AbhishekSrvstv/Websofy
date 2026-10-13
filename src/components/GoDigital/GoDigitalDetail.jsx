import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import serviceHero from "../../assets/Services-img/Services-hero.jpg";
import useServiceReveal from "../Services/useServiceReveal";

import {
  FaHome,
  FaChevronRight,
  FaArrowRight,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronDown,
} from "react-icons/fa";

import { FaCheck } from "react-icons/fa6";

import { GO_DIGITAL_DATA } from "./GoDigitalData";
import EnquiryForm from "../Services/EnquiryForm";
import Faq from "../Services/Faq";
import Technologies from "../Home/Technologies";
import Portfolio from "../Home/Portfolio";
import SocialMediaSolutions from "./SocialMediaSolutions";
import PerformanceMarketingSolutions from "./PerformanceMarketingSolutions";
import MetaAdsSolutions from "./MetaAdsSolutions";
import VideoInfluencerSolutions from "./VideoInfluencerSolutions";
import EmailMarketingSolutions from "./EmailMarketingSolutions";
import SearchEngineOptimizationSolutions from "./SearchEngineOptimizationSolutions";
import PpcAdvertisingSolutions from "./PpcAdvertisingSolutions";
import ContentMarketingSolutions from "./ContentMarketingSolutions";
import WhatsAppMarketingSolutions from "./WhatsAppMarketingSolutions";
import ReputationManagementSolutions from "./ReputationManagementSolutions";

import "../Services/ServicesPage.css";
import "../Services/ServiceDetail.css";

const PHONE = "+91-9335785354";
const EMAIL = "info@websofy.com";

// [data me flag, component]. Naya page add karne par bas yahan ek line jodo.
const SOLUTIONS = [
  ["useSocialMediaSolutions", SocialMediaSolutions],
  ["usePerformanceMarketingSolutions", PerformanceMarketingSolutions],
  ["useMetaAdsSolutions", MetaAdsSolutions],
  ["useVideoInfluencerSolutions", VideoInfluencerSolutions],
  ["useEmailMarketingSolutions", EmailMarketingSolutions],
  ["useSeoSolutions", SearchEngineOptimizationSolutions],
  ["usePpcSolutions", PpcAdvertisingSolutions],
  ["useContentMarketingSolutions", ContentMarketingSolutions],
  ["useWhatsAppSolutions", WhatsAppMarketingSolutions],
  ["useReputationSolutions", ReputationManagementSolutions],
];

export default function GoDigitalDetail() {
  const { pathname } = useLocation();

  const [showMore, setShowMore] = useState(false);

  useServiceReveal(pathname);

  const data = GO_DIGITAL_DATA.find((item) => item.path === pathname);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setShowMore(false);
  }, [pathname]);

  if (!data) {
    return (
      <section className="sd-notfound">
        <h2>Page not found</h2>

        <Link to="/">Back to Home</Link>
      </section>
    );
  }

  const words = data.title.split(" ");
  const last = words.pop();
  const first = words.join(" ");

  const heading = data.heading || `${data.title} Company in Lucknow`;

  const intro = data.intro || data.overview?.[0] || "";

  const more = data.intro
    ? data.overview || []
    : (data.overview || []).slice(1);

  const checks =
    data.checks || (data.offers || []).slice(0, 4).map((offer) => offer.title);

  const formHeading =
    data.formHeading || `Let's Discuss Your ${data.title} Project`;

  const needs = data.needs || (data.offers || []).map((offer) => offer.title);

  const buttonText =
    data.formButton ||
    (data.formWord
      ? `Get a Free ${data.formWord} Consultation`
      : "Get a Free Consultation");

  const TechSection =
    SOLUTIONS.find(([flag]) => data[flag])?.[1] || Technologies;

  return (
    <>
      <section className="svc-hero sd-hero">
        <img
          src={serviceHero}
          alt="Websofy Go Digital"
          className="sd-hero__image"
        />

        <div className="sd-hero__overlay"></div>

        <div className="svc-hero__inner">
          <div className="svc-crumb">
            <Link to="/">
              <FaHome />
              <span>Home</span>
            </Link>

            <FaChevronRight className="svc-crumb__sep" />

            <Link to={data.categoryHref || "/"}>
              {data.category || "Go Digital"}
            </Link>

            <FaChevronRight className="svc-crumb__sep" />

            <span>{data.title}</span>
          </div>

          <div className="svc-bars">
            <i />
            <i />
          </div>

          <h1 className="svc-hero__title">
            {first && <span>{first} </span>}
            <b>{last}</b>
          </h1>

          <p className="svc-hero__text">{data.subtitle}</p>
        </div>
      </section>

      <section className="sd-enquiry">
        <div className="sd-enquiry__card">
          <div className="sd-left">
            <span className="sd-pill">
              <i />
              {data.title}
            </span>

            <h2>{heading}</h2>

            <p className="sd-left__intro">{intro}</p>

            {checks.length > 0 && (
              <ul className="sd-checks">
                {checks.map((check) => (
                  <li key={check}>
                    <span>
                      <FaCheck />
                    </span>

                    {check}
                  </li>
                ))}
              </ul>
            )}

            {showMore &&
              more.map((paragraph, index) => (
                <p className="sd-left__more" key={`${paragraph}-${index}`}>
                  {paragraph}
                </p>
              ))}

            <div className="sd-contact">
              <a
                href={`tel:${PHONE.replace(/-/g, "")}`}
                className="sd-contact__item"
              >
                <span>
                  <FaPhoneAlt />
                </span>

                <div>
                  <small>Talk to our experts</small>

                  <b>{PHONE}</b>
                </div>
              </a>

              <a href={`mailto:${EMAIL}`} className="sd-contact__item">
                <span>
                  <FaEnvelope />
                </span>

                <div>
                  <small>Email us</small>

                  <b>{EMAIL}</b>
                </div>
              </a>
            </div>

            {more.length > 0 && (
              <button
                type="button"
                className={`sd-readmore ${showMore ? "is-open" : ""}`}
                onClick={() => setShowMore((value) => !value)}
              >
                {showMore ? "Read Less" : "Read More"}

                <span>
                  <FaChevronDown />
                </span>
              </button>
            )}
          </div>

          <EnquiryForm
            heading={formHeading}
            needs={needs}
            service={data.title}
            buttonText={buttonText}
          />
        </div>
      </section>

      <TechSection />

      {data.showPortfolio && <Portfolio />}

      {data.faqs && <Faq faqs={data.faqs} />}

      {!data.hideCta && (
        <section className="svc-cta">
          <div className="svc-cta__card">
            <div className="svc-cta__text">
              <span className="svc-cta__badge">
                <i />
                Let's work together
              </span>

              <h2>Have an Idea? Let's Turn It Into Reality</h2>

              <p>
                Tell us what you need and our team will get back to you with
                the right solution.
              </p>
            </div>

            <Link to="/contact" className="svc-cta__btn">
              Talk to Our Team
              <FaArrowRight />
            </Link>
          </div>
        </section>
      )}
    </>
  );
}