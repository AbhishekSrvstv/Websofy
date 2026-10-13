import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import "./AboutCTA.css";

export default function AboutCTA() {
  return (
    <section className="acta">
      <div className="acta__card" data-reveal="up">
        <div className="acta__text">
          <span className="acta__badge">
            <i></i> Let's Work Together
          </span>

          <h2>Have an Idea? Let's Turn It Into Reality</h2>

          <p>
            Get to know the team behind WebSofy and discover how our
            expertise, creativity, and commitment can help turn your vision
            into a successful digital solution.
          </p>
        </div>

        <div className="acta__action" data-reveal="right" data-delay="200">
          <Link to="/contact" className="acta__btn">
            Talk to Our Team <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}