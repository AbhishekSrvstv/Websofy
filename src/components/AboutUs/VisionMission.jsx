import { FaRocket, FaBullseye } from "react-icons/fa6";
import "./VisionMission.css";

const cards = [
  {
    icon: <FaRocket />,
    title: "Our Vision",
    text: "We envision a future where businesses worldwide leverage technology to unlock new opportunities and achieve long-term success. By combining innovation, expertise, and a commitment to excellence, we strive to build intelligent, scalable, and future-ready digital solutions that enable organizations to adapt, grow, and lead in an ever-evolving digital landscape.",
  },
  {
    icon: <FaBullseye />,
    title: "Our Mission",
    text: "We are committed to transforming ideas into impactful digital solutions by combining technical excellence, creativity, and industry best practices. Our mission is to provide reliable, scalable, and secure software applications that address real-world business challenges while maintaining transparency, quality, and continuous innovation throughout every stage of development.",
  },
];

export default function VisionMission() {
  return (
    <section className="vm">
      <div className="vm__head" data-reveal="up">
        <span className="vm__tag">Vision &amp; Mission</span>
        <h2>
          Our Vision <span>&amp; Mission</span>
        </h2>
        <p>
          We enable digital transformation with smarter business systems,
          delivering scalable, future-ready solutions driven by innovation.
        </p>
      </div>

      <div className="vm__cards">
        {cards.map((c, i) => (
          <div
            className="vm__reveal"
            key={c.title}
            data-reveal={i === 0 ? "left" : "right"}
            data-delay={i * 150}
          >
            <div className="vm__card">
              <div className="vm__top">
                <div className="vm__icon">{c.icon}</div>
                <h3>{c.title}</h3>
              </div>
              <p>{c.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}