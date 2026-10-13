import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

import Reveal from "../Home/Reveal";
import serviceHero from "../../assets/Services-img/Services-hero.jpg";
import {
  SOLUTIONS,
  SOLUTION_CATEGORIES,
  getSolutionLink,
} from "./SolutionsData";

import "../Services/ServicesPage.css";
import "../Services/ServiceDetail.css";
import "../Home/Portfolio.css";
import "./Solutions.css";

export default function SolutionsPage() {
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const visible =
    filter === "All" ? SOLUTIONS : SOLUTIONS.filter((s) => s.category === filter);

  return (
    <>
      <section className="svc-hero sd-hero">
        <img src={serviceHero} alt="Our Solutions" className="sd-hero__image" />
        <div className="sd-hero__overlay"></div>

        <div className="svc-hero__inner">
          <div className="svc-crumb">
            <Link to="/">
              <FaHome />
              <span>Home</span>
            </Link>
            <FaChevronRight className="svc-crumb__sep" />
            <span>Solutions</span>
            <FaChevronRight className="svc-crumb__sep" />
            <span>Our Solutions</span>
          </div>

          <div className="svc-bars">
            <i />
            <i />
          </div>

          <h1 className="svc-hero__title">
            <span>Our </span>
            <b>Solutions</b>
          </h1>

          <p className="svc-hero__text">
            Our scalable and secure solutions help businesses streamline
            operations and achieve digital growth.
          </p>
        </div>
      </section>

      <section className="pf sol">
        <Reveal direction="up">
          <h2 className="sol__title">Our Solutions</h2>
        </Reveal>

        <Reveal direction="up" delay={100}>
          <div className="sol__bar">
            <select
              className="sol__select"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              {SOLUTION_CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </Reveal>

        <div className="pf__grid">
          {visible.map((s, i) => (
            <Reveal
              key={s.slug}
              direction="up"
              delay={(i % 3) * 120}
              className="pf__reveal"
            >
              <div className="pf__card is-visible">
                <div className="pf__img">
                  <img src={s.img} alt={s.title} />
                </div>

                <div className="pf__body">
                  <span className="pf__badge">{s.category}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>

                  <Link to={getSolutionLink(s)} className="pf__more">
                    Explore More <FaArrowRight />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}