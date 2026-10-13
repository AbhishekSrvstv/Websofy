import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

import serviceHero from "../../assets/Services-img/Services-hero.jpg";
import {
  PORTFOLIO_DATA,
  PORTFOLIO_FILTERS,
  getPortfolioLink,
} from "./PortfolioData";

import "../Services/ServicesPage.css";
import "../Services/ServiceDetail.css";
import "../Home/Portfolio.css";
import "./PortfolioPage.css";

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const counts = {
    All: PORTFOLIO_DATA.length,
    Private: PORTFOLIO_DATA.filter((p) => p.category === "Private").length,
    Government: PORTFOLIO_DATA.filter((p) => p.category === "Government")
      .length,
  };

  const visible =
    filter === "All"
      ? PORTFOLIO_DATA
      : PORTFOLIO_DATA.filter((p) => p.category === filter);

  return (
    <>
      <section className="svc-hero sd-hero">
        <img
          src={serviceHero}
          alt="Websofy Portfolio"
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

            <span>Our Portfolio</span>
          </div>

          <div className="svc-bars">
            <i />
            <i />
          </div>

          <h1 className="svc-hero__title">
            <span>Our </span>
            <b>Portfolio</b>
          </h1>

          <p className="svc-hero__text">
            Explore our successful projects with engaging visuals and detailed
            insights that showcase real business results.
          </p>
        </div>
      </section>

      <section className="pf pfp">
        <h2 className="pfp__title">Our Portfolio</h2>

        <div className="pf__filters">
          {PORTFOLIO_FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              className={`pf__filter ${filter === f ? "is-active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f} ({counts[f]})
            </button>
          ))}
        </div>

        <div className="pf__grid">
          {visible.map((p) => (
            <div className="pf__card is-visible" key={p.slug}>
              <div className="pf__img">
                <img src={p.img} alt={p.title} />
              </div>

              <div className="pf__body">
                <span className="pf__badge">{p.category}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>

                <Link to={getPortfolioLink(p)} className="pf__more">
                  Explore More <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}