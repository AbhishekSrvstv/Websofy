import { Link } from "react-router-dom";
import "./AboutHero.css";
import officeImg from "../../assets/About_Img/AboutUS.jpg";

export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero__text" data-reveal="left">
        <nav className="about-hero__crumb">
          <Link to="/">Home</Link>
          <span className="about-hero__sep">›</span>
          <strong>About Us</strong>
        </nav>

        <div className="about-hero__line">
          <span></span>
          <span></span>
        </div>

        <h1>
          <span className="about-hero__green">About</span> Us
        </h1>

        <p>
          Discover our journey, core mission, and the expert team driving
          Websofy's continuous growth and success.
        </p>
      </div>

      <div className="about-hero__img" data-reveal="right" data-delay="200">
        <img src={officeImg} alt="Websofy office" />
      </div>
    </section>
  );
}