import { useLayoutEffect } from "react";
import "./reveal.css";

const TARGETS = [
  { sel: ".svc-hero__inner", dir: "left" },
  { sel: ".svc-intro", dir: "up" },
  { sel: ".svc-card", dir: "up", stagger: true },
  { sel: ".svc-why__inner > div:first-child", dir: "left" },
  { sel: ".svc-why__list li", dir: "right", stagger: true },
  { sel: ".svc-cta__card", dir: "up" },
  { sel: ".sd-left", dir: "left" },
  { sel: ".sd-form", dir: "right" },
  { sel: ".sd-head", dir: "up" },
  { sel: ".sd-tech span", dir: "up", stagger: true },
];

export default function useServiceReveal(dep) {
  useLayoutEffect(() => {
    const items = [];

    TARGETS.forEach(({ sel, dir, stagger }) => {
      document.querySelectorAll(sel).forEach((el, i) => {
        el.classList.remove("is-visible");
        el.classList.add("rv", `rv-${dir}`);

        if (stagger) {
          el.style.setProperty(
            "--rv-delay",
            `${(i % 3) * 100}ms`
          );
        }

        items.push(el);
      });
    });

    if (!items.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    items.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
    };
  }, [dep]);
}