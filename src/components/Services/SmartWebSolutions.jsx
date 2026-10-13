import { useState, useEffect, useRef } from "react";
import { clients } from "../Home/ClientsSlider";
import "./SmartWebSolutions.css";

const GAP = 24;

const FIRST = ["Medox Hospital", "Gyan Scientific Traders", "Windoor"];

const LIST = [
  ...FIRST.map((name) => clients.find((c) => c.name === name)).filter(Boolean),
  ...clients.filter((c) => !FIRST.includes(c.name)),
];

export default function SmartWebSolutions() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(3);
  const [cardW, setCardW] = useState(340);
  const viewRef = useRef(null);

  useEffect(() => {
    const calc = () => {
      const vw = window.innerWidth;
      const v = vw >= 900 ? 3 : vw >= 600 ? 2 : 1;
      const w = viewRef.current ? viewRef.current.offsetWidth : 0;
      setVisible(v);
      if (w) setCardW((w - GAP * (v - 1)) / v);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const maxIndex = Math.max(0, LIST.length - visible);
  const current = Math.min(index, maxIndex);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setIndex((p) => (p >= maxIndex ? 0 : p + 1));
    }, 3000);
    return () => clearInterval(t);
  }, [paused, maxIndex]);

  const next = () => setIndex(current >= maxIndex ? 0 : current + 1);
  const prev = () => setIndex(current <= 0 ? maxIndex : current - 1);

  return (
    <section className="sws">
      <div className="sws__head">
        <span className="sws__tag">
          <i></i> Website Excellence <i></i>
        </span>

        <h2>
          Smart <span>Web Solutions</span>
        </h2>

        <p>
          From startups to established businesses, we create modern, scalable
          websites that deliver exceptional user experiences, strengthen online
          presence, and turn digital ideas into measurable business growth.
        </p>
      </div>

      <div
        className="sws__wrap"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <button
          type="button"
          className="sws__arrow sws__arrow--left"
          onClick={prev}
          aria-label="Previous"
        >
          ‹
        </button>

        <div className="sws__slider" ref={viewRef}>
          <div
            className="sws__track"
            style={{ transform: `translateX(-${current * (cardW + GAP)}px)` }}
          >
            {LIST.map(({ name, type, image }) => (
              <div className="sws__card" key={name} style={{ width: cardW }}>
                <div className="sws__img">
                  {image && <img src={image} alt={name} loading="lazy" />}
                </div>

                <span className="sws__type">{type}</span>
                <h3>{name}</h3>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="sws__arrow sws__arrow--right"
          onClick={next}
          aria-label="Next"
        >
          ›
        </button>
      </div>
    </section>
  );
}