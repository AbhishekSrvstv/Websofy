import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

import Reveal from "../Home/Reveal";
import serviceHero from "../../assets/Services-img/Services-hero.jpg";
import { PACKAGES, PACKAGE_CATEGORIES } from "./PackagesData";

import "../Services/ServicesPage.css";
import "../Services/ServiceDetail.css";
import "./Solutions.css";

export default function PackagesPage() {
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const visible =
    filter === "All" ? PACKAGES : PACKAGES.filter((p) => p.category === filter);

  return (
    <>
      <section className="svc-hero sd-hero">
        <img src={serviceHero} alt="Our Packages" className="sd-hero__image" />
        <div className="sd-hero__overlay"></div>

        <div className="svc-hero__inner">
          <div className="svc-crumb">
            <Link to="/">
              <FaHome />
              <span>Home</span>
            </Link>
            <FaChevronRight className="svc-crumb__sep" />
            <span>Our Packages</span>
          </div>

          <div className="svc-bars">
            <i />
            <i />
          </div>

          <h1 className="svc-hero__title">
            <span>Our </span>
            <b>Packages</b>
          </h1>

          <p className="svc-hero__text">
            Explore our transparent pricing and flexible packages, designed to
            fit your business needs while helping you drive growth with
            cost-effective and scalable solutions.
          </p>
        </div>
      </section>

      <section className="pk">
        <Reveal direction="up">
          <h2 className="sol__title">Our Packages</h2>
        </Reveal>

        <Reveal direction="up" delay={100}>
          <div className="sol__bar">
            <select
              className="sol__select"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              {PACKAGE_CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </Reveal>

        <div className="pk__grid">
          {visible.map((p, i) => (
            <Reveal
              key={p.id}
              direction="up"
              delay={(i % 3) * 120}
              className="pk__reveal"
            >
              <div className={`pk__card ${p.popular ? "is-popular" : ""}`}>
                <div className="pk__top">
                  <span className="pk__cat">{p.category}</span>
                  {p.popular && <span className="pk__pop">Popular</span>}
                </div>

                <h3 className="pk__name">{p.name}</h3>

                <div className="pk__price">
                  {p.price}
                  <small>{p.period}</small>
                </div>

                <p className="pk__desc">{p.desc}</p>

                <ul className="pk__list">
                  {p.features.map((f, idx) => (
                    <li key={`${f}-${idx}`}>{f}</li>
                  ))}
                </ul>

                <Link to="/contact" className="pk__btn">
                  Get Started <FaArrowRight />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}