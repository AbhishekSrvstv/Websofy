import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import Reveal from "../Home/Reveal";
import "./Faq.css";

const canHover = () =>
  typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;

export default function Faq({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (faqs.length === 0) return null;

  // desktop: hover / keyboard focus se khulta hai
  const open = (index) => {
    if (canHover()) setOpenIndex(index);
  };

  // desktop: mouse hatane / focus jaane par band
  const close = () => {
    if (canHover()) setOpenIndex(-1);
  };

  // mobile/touch: hover nahi hota, isliye tap se toggle
  const toggleOnTap = (index) => {
    if (!canHover()) {
      setOpenIndex((current) => (current === index ? -1 : index));
    }
  };

  return (
    <section className="faq">
      <Reveal direction="up">
        <div className="faq__head">
          <span className="faq__tag">
            <i></i> FAQs <i></i>
          </span>

          <h2>
            Frequently Asked <span>Questions</span>
          </h2>

          <p>Find quick answers to common questions about our services and solutions.</p>
        </div>
      </Reveal>

      <div className="faq__list">
        {faqs.map(({ q, a }, index) => {
          const isOpen = openIndex === index;
          const number = String(index + 1).padStart(2, "0");

          return (
            <Reveal key={q} direction="up" delay={index * 80}>
              <div
                className={`faq__item ${isOpen ? "is-open" : ""}`}
                onMouseEnter={() => open(index)}
                onMouseLeave={close}
              >
                <button
                  type="button"
                  className="faq__question"
                  aria-expanded={isOpen}
                  onFocus={() => open(index)}
                  onBlur={close}
                  onClick={() => toggleOnTap(index)}
                >
                  <span>
                    {number}. {q}
                  </span>

                  <span className="faq__icon">
                    {isOpen ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>

                <div className="faq__answer">
                  <p>{a}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}