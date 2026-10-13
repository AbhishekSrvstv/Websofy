import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaChevronRight,
  FaSearch,
  FaUserTie,
  FaRegClock,
  FaMapMarkerAlt,
  FaRegEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

import Reveal from "../Home/Reveal";
import {
  JOBS,
  CAREERS_HERO,
  OPPORTUNITY_TYPES,
  JOB_TYPES,
  LOCATIONS,
  getJobLink,
  getEmailLink,
  getWhatsAppLink,
} from "./CareersData";

import "../Services/ServicesPage.css";
import "../Services/ServiceDetail.css";
import "./Careers.css";

const PAGE_SIZE = 3;

export default function CareersPage() {
  const [search, setSearch] = useState("");
  const [opportunity, setOpportunity] = useState("All");
  const [jobType, setJobType] = useState("All");
  const [location, setLocation] = useState("All");
  const [count, setCount] = useState(PAGE_SIZE);

  const sentinelRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();

    return JOBS.filter(
      (j) =>
        (!q || j.title.toLowerCase().includes(q)) &&
        (opportunity === "All" || j.opportunity === opportunity) &&
        (jobType === "All" || j.type === jobType) &&
        (location === "All" || j.location === location)
    );
  }, [search, opportunity, jobType, location]);

  useEffect(() => {
    setCount(PAGE_SIZE);
  }, [search, opportunity, jobType, location]);

  const visible = filtered.slice(0, count);
  const hasMore = count < filtered.length;

  useEffect(() => {
    if (!hasMore) return;

    const node = sentinelRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setCount((c) => c + PAGE_SIZE);
      },
      { rootMargin: "0px 0px 120px 0px" }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [hasMore, count]);

  return (
    <>
      <section className="svc-hero sd-hero">
        <img src={CAREERS_HERO} alt="Careers" className="sd-hero__image" />
        <div className="sd-hero__overlay"></div>

        <div className="svc-hero__inner">
          <div className="svc-crumb">
            <Link to="/">
              <FaHome />
              <span>Home</span>
            </Link>
            <FaChevronRight className="svc-crumb__sep" />
            <span>Careers</span>
          </div>

          <div className="svc-bars">
            <i />
            <i />
          </div>

          <h1 className="svc-hero__title">
            <span>Join Our </span>
            <b>Team</b>
          </h1>

          <p className="svc-hero__text">
            Discover exciting opportunities to grow, innovate, and build your
            future with our passionate team.
          </p>
        </div>
      </section>

      <section className="cr">
        <Reveal direction="up" delay={200}>
          <h2 className="cr__title">Careers at Websofy</h2>
        </Reveal>

        <div className="cr__layout">
          <Reveal direction="left" delay={400} className="cr__side">
            <aside className="cr__filter">
              <p className="cr__count">
                Showing {filtered.length} {filtered.length === 1 ? "job" : "jobs"}
              </p>

              <div className="cr__field">
                <label htmlFor="cr-search">
                  <FaSearch /> Search Job
                </label>
                <input
                  id="cr-search"
                  type="text"
                  placeholder="Search jobs by title..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <div className="cr__field">
                <label htmlFor="cr-opportunity">
                  <FaUserTie /> Opportunity Type
                </label>
                <select
                  id="cr-opportunity"
                  value={opportunity}
                  onChange={(e) => setOpportunity(e.target.value)}
                >
                  {OPPORTUNITY_TYPES.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>

              <div className="cr__field">
                <label htmlFor="cr-type">
                  <FaRegClock /> Job Type
                </label>
                <select
                  id="cr-type"
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                >
                  {JOB_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div className="cr__field">
                <label htmlFor="cr-location">
                  <FaMapMarkerAlt /> Location
                </label>
                <select
                  id="cr-location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  {LOCATIONS.map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
                </select>
              </div>
            </aside>
          </Reveal>

          <div className="cr__main">
            <div className="cr__list">
              {visible.map((job, i) => (
                <Reveal
                  key={job.slug}
                  direction="up"
                  delay={400 + (i % PAGE_SIZE) * 150}
                >
                  <article className="cr__card">
                    <div className="cr__head">
                      <h3>{job.title}</h3>

                      <div className="cr__meta">
                        <span>
                          <FaUserTie /> {job.opportunity}
                        </span>
                        <span>
                          <FaMapMarkerAlt /> {job.location}
                        </span>
                        <span>
                          <FaRegClock /> {job.type}
                        </span>
                      </div>
                    </div>

                    <p className="cr__desc">{job.desc}</p>

                    <div className="cr__foot">
                      <div className="cr__contact">
                        <a href={getEmailLink(job)}>
                          <FaRegEnvelope /> Email
                        </a>
                        <span className="cr__sep"></span>
                        <a
                          href={getWhatsAppLink(job)}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaWhatsapp /> WhatsApp
                        </a>
                      </div>

                      <Link to={getJobLink(job)} className="cr__view">
                        View Job <FaArrowRight />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="cr__empty">No jobs found for these filters.</p>
            )}

            {hasMore && (
              <p className="cr__more" ref={sentinelRef}>
                Scroll to load more...
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}