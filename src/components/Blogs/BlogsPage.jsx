import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaChevronRight, FaRegCalendarAlt, FaUser } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

import Reveal from "../Home/Reveal";
import { BLOGS, BLOG_CATEGORIES, BLOG_HERO, getBlogLink } from "./BlogsData";

import "../Services/ServicesPage.css";
import "../Services/ServiceDetail.css";
import "../Solutions/Solutions.css";
import "./Blogs.css";

export default function BlogsPage() {
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const visible =
    filter === "All" ? BLOGS : BLOGS.filter((b) => b.category === filter);

  return (
    <>
      <section className="svc-hero sd-hero">
        <img src={BLOG_HERO} alt="Our Blogs" className="sd-hero__image" />
        <div className="sd-hero__overlay"></div>

        <div className="svc-hero__inner">
          <div className="svc-crumb">
            <Link to="/">
              <FaHome />
              <span>Home</span>
            </Link>
            <FaChevronRight className="svc-crumb__sep" />
            <span>Our Blogs</span>
          </div>

          <div className="svc-bars">
            <i />
            <i />
          </div>

          <h1 className="svc-hero__title">
            <span>Our </span>
            <b>Blogs</b>
          </h1>

          <p className="svc-hero__text">
            Discover expert insights, actionable strategies, and industry
            trends to accelerate your digital journey.
          </p>
        </div>
      </section>

      <section className="bl">
        <Reveal direction="up">
          <h2 className="sol__title">Our Blogs</h2>
        </Reveal>

        <Reveal direction="up" delay={100}>
          <div className="sol__bar">
            <select
              className="sol__select"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              {BLOG_CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </Reveal>

        <div className="bl__grid">
          {visible.map((b, i) => (
            <Reveal
              key={b.slug}
              direction="up"
              delay={(i % 3) * 120}
              className="bl__reveal"
            >
              <article className="bl__card">
                <div className="bl__img">
                  <img src={b.img} alt={b.title} />
                  <span className="bl__tag">{b.category}</span>
                </div>

                <div className="bl__body">
                  <span className="bl__date">
                    <FaRegCalendarAlt /> {b.date}
                  </span>

                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>

                  <div className="bl__foot">
                    <span className="bl__author">
                      <i>
                        <FaUser />
                      </i>
                      {b.author}
                    </span>

                    <Link to={getBlogLink(b)} className="bl__more">
                      Read More <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}