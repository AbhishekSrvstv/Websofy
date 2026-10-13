import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import serviceHero from "../../assets/Services-img/Services-hero.jpg";
import useServiceReveal from "./useServiceReveal";

import {
  FaHome,
  FaChevronRight,
  FaArrowRight,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronDown,
} from "react-icons/fa";

import { FaCheck } from "react-icons/fa6";

import { SERVICE_DATA } from "./ServiceData";
import EnquiryForm from "./EnquiryForm";
import Technologies from "../Home/Technologies";
import Portfolio from "../Home/Portfolio";
import Faq from "./Faq";
import WebSolutions from "./WebSolutions";
import MobileSolutions from "./MobileSolutions";
import SecuritySolutions from "./SecuritySolutions";
import HostingSolutions from "./HostingSolutions";
import EmailSolutions from "./EmailSolutions";
import WebTrainingSolutions from "./WebTrainingSolutions";
import DigitalMarketingTrainingSolutions from "./DigitalMarketingTrainingSolutions";
import SmartWebSolutions from "./SmartWebSolutions";
import GraphicSolutions from "./GraphicSolutions";
import SSLSolutions from "./SSLSolutions";
import BulkSMSSolutions from "./BulkSMSSolutions";
import BulkWhatsAppSolutions from "./BulkWhatsAppSolutions";

import "./ServicesPage.css";
import "./ServiceDetail.css";

const PHONE = "+91-9335785354";
const EMAIL = "info@websofy.com";

export default function ServiceDetail() {
  const { pathname } = useLocation();

  const [showMore, setShowMore] = useState(false);

  useServiceReveal(pathname);

  const data = SERVICE_DATA.find((service) => service.path === pathname);

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
        <h2>Service not found</h2>

        <Link to="/services">Back to Services</Link>
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

  const TechSection = data.useWhatsAppSolutions
    ? BulkWhatsAppSolutions
    : data.useBulkSMSSolutions
      ? BulkSMSSolutions
      : data.useSSLSolutions
        ? SSLSolutions
        : data.useGraphicSolutions
          ? GraphicSolutions
          : data.useWebSolutions
            ? WebSolutions
            : data.useMobileSolutions
              ? MobileSolutions
              : data.useSecuritySolutions
                ? SecuritySolutions
                : data.useHostingSolutions
                  ? HostingSolutions
                  : data.useEmailSolutions
                    ? EmailSolutions
                    : data.useWebTrainingSolutions
                      ? WebTrainingSolutions
                      : data.useDigitalMarketingTrainingSolutions
                        ? DigitalMarketingTrainingSolutions
                        : Technologies;

  return (
    <>
      <section className="svc-hero sd-hero">
        <img
          src={serviceHero}
          alt="Websofy Services"
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

            <Link to={data.categoryHref || "/services"}>
              {data.category || "Services"}
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

      {data.useSmartWebSolutions && <SmartWebSolutions />}

      {data.usePortfolio && <Portfolio />}

      {data.faqs && <Faq faqs={data.faqs} />}

      <section className="svc-cta">
        <div className="svc-cta__card">
          <div className="svc-cta__text">
            <span className="svc-cta__badge">
              <i />
              Let's work together
            </span>

            <h2>Have an Idea? Let's Turn It Into Reality</h2>

            <p>
              Tell us what you need and our team will get back to you with the
              right solution.
            </p>
          </div>

          <Link to="/contact" className="svc-cta__btn">
            Talk to Our Team
            <FaArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}