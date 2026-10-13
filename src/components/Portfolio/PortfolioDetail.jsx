import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaPlus, FaMinus, FaArrowRight } from "react-icons/fa6";

import { PORTFOLIO_DATA, getPortfolioLink } from "./PortfolioData";
import { PORTFOLIO_DETAILS } from "./PortfolioDetailData";

import "./PortfolioDetail.css";

const renderText = (text) =>
  text
    .split(/(\*\*[^*]+\*\*)/g)
    .map((part, i) =>
      part.startsWith("**") ? (
        <strong key={i}>{part.slice(2, -2)}</strong>
      ) : (
        part
      )
    );

function Block({ block }) {
  if (block.t === "h2") return <h2>{block.text}</h2>;
  if (block.t === "h3") return <h3>{block.text}</h3>;
  if (block.t === "ul")
    return (
      <ul>
        {block.items.map((item) => (
          <li key={item}>{renderText(item)}</li>
        ))}
      </ul>
    );
  return <p>{renderText(block.text)}</p>;
}

function FaqItem({ index, q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`pdt-faq__item ${open ? "is-open" : ""}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="pdt-faq__q"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span>
          {String(index + 1).padStart(2, "0")}. {q}
        </span>
        <i>{open ? <FaMinus /> : <FaPlus />}</i>
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "grid-template-rows 0.3s ease",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <p className="pdt-faq__a">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioDetail() {
  const { slug } = useParams();
  const [openIndex, setOpenIndex] = useState(null);

  const project = PORTFOLIO_DATA.find((p) => p.slug === slug);
  const detail = PORTFOLIO_DETAILS[slug];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpenIndex(null);
  }, [slug]);

  if (!project || !detail) {
    return (
      <section className="sd-notfound">
        <h2>Project not found</h2>
        <Link to="/portfolio">Back to Portfolio</Link>
      </section>
    );
  }

  const recent = PORTFOLIO_DATA.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <section className="pdt">
      <div className="pdt__inner">
        <div className="pdt__main">
          <h1 className="pdt__title">{project.title}</h1>

          <div className="pdt__hero">
            <img src={project.img} alt={project.title} />
          </div>

          <article className="pdt__card pdt__article">
            {detail.content.map((block, i) => (
              <Block block={block} key={i} />
            ))}
          </article>

          <div className="pdt__card pdt-faq">
            <h2 className="pdt-faq__title">
              <span>Frequently Asked</span> Questions
            </h2>

            {detail.faqs.map((faq, i) => (
              <FaqItem
                key={faq.q}
                index={i}
                q={faq.q}
                a={faq.a}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>

        <aside className="pdt__side">
          <h3 className="pdt__side-title">Recent Posts</h3>

          <div className="pdt__posts">
            {recent.map((p) => (
              <Link
                to={getPortfolioLink(p)}
                className="pdt__post"
                key={p.slug}
              >
                <img src={p.img} alt={p.title} />
                <span>{p.title}</span>
              </Link>
            ))}
          </div>

          <Link to="/portfolio" className="pdt__all">
            View All Portfolio <FaArrowRight />
          </Link>
        </aside>
      </div>
    </section>
  );
}