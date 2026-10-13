import "./WhoWeAre.css";
import whoImg from "../../assets/About_Img/WhoWeAre.jpg";

export default function WhoWeAre() {
  return (
    <section className="who">
      <div className="who__text" data-reveal="left">
        <h2>Who We Are</h2>

        <p>
          At <strong>Websofy Software Pvt Ltd</strong>, we are pioneers in
          delivering top-tier{" "}
          <strong>
            software development, web development, and data-driven digital
            marketing solutions
          </strong>{" "}
          in Lucknow. We bring local expertise and global standards together
          to help businesses scale faster and build an unshakeable online
          presence.
        </p>

        <p>
          With <strong>decades of industry experience</strong>, our skilled
          team crafts customized, secure, and workflow-optimized solutions
          that eliminate manual efforts and drive operational excellence.
          From startups to established enterprises, we transform your vision
          into high-performing digital realities.
        </p>
      </div>

      <div className="who__img" data-reveal="right" data-delay="150">
        <img src={whoImg} alt="Websofy office" />
      </div>
    </section>
  );
}