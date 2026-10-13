import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import "./Portfolio.css";
import { PORTFOLIO_DATA, getPortfolioLink } from "../Portfolio/PortfolioData";

// Home par sirf pehle 6 projects
const PROJECTS = PORTFOLIO_DATA.slice(0, 6);

const FILTERS = ["All", "Private", "Government"];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const counts = {
    All: PROJECTS.length,
    Private: PROJECTS.filter((p) => p.category === "Private").length,
    Government: PROJECTS.filter((p) => p.category === "Government").length,
  };

  return (
    <section className="pf">
      <div className="pf__head" data-reveal="up">
        <span className="pf__tag">
          <i></i> Our Portfolio <i></i>
        </span>
        <h2>
          Driving Success in <span>Every Sector</span>
        </h2>
        <p>
          Discover how our innovative technology solutions help businesses
          streamline operations, enhance customer experiences, and achieve
          sustainable growth.
        </p>

        <div className="pf__filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`pf__filter ${filter === f ? "is-active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f} ({counts[f]})
            </button>
          ))}
        </div>
      </div>

      <div className="pf__grid">
        {PROJECTS.map((p, i) => {
          const hidden = filter !== "All" && p.category !== filter;
          return (
            <div
              className="pf__card"
              key={p.slug}
              data-reveal="up"
              data-delay={(i % 3) * 120}
              style={hidden ? { display: "none" } : undefined}
            >
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
          );
        })}
      </div>

      <div className="pf__viewall" data-reveal="up">
        <Link to="/portfolio" className="pf__viewall-btn">
          View All Portfolio <FaArrowRight />
        </Link>
      </div>
    </section>
  );
}