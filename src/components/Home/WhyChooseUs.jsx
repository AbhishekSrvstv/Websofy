import './WhyChooseUs.css';
import Reveal from './Reveal';
import whyImg from "../../assets/Home_Img/why/why-choose-us.jpeg";
import { FaArrowRight } from 'react-icons/fa6';

const reasons = [
  {
    number: '01',
    title: 'Strategic Technology Consulting',
    desc: (
      <>
        We align <strong>technology strategies</strong> with your business
        goals, helping you make informed decisions that drive long-term
        growth and competitive advantage.
      </>
    ),
  },
  {
    number: '02',
    title: 'Accelerated Project Execution',
    desc: (
      <>
        Our streamlined development process ensures{' '}
        <strong>faster time-to-market</strong> while maintaining exceptional
        quality, performance, and reliability.
      </>
    ),
  },
  {
    number: '03',
    title: 'Scalable Digital Innovation',
    desc: (
      <>
        We build <strong>future-ready solutions</strong> that are scalable,
        adaptable, and designed to support evolving business requirements.
      </>
    ),
  },
  {
    number: '04',
    title: 'End-to-End Partnership',
    desc: (
      <>
        From discovery and development to deployment and support, we provide{' '}
        <strong>comprehensive project ownership</strong> at every stage.
      </>
    ),
  },
];

function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="why-header">
        <span className="why-tag">— Why Choose Us —</span>
        <h2>
          Why Businesses <span className="highlight">Choose WebSofy</span>
        </h2>
        <p>
          We combine expertise and innovation to deliver secure, scalable
          solutions that drive business growth.
        </p>
      </div>

      <div className="why-container">
        {/* Left */}
        <Reveal direction="left" className="why-left">
          <img src={whyImg} alt="Websofy Team Meeting" className="why-image" />
          <h3>
            Enabling <span className="highlight">Business Growth</span>
          </h3>
          <p>
            We combine <strong>innovation</strong>, <strong>technical excellence</strong>, and{' '}
            <strong>business strategy</strong> to deliver impactful digital
            solutions that help organizations scale with confidence.
          </p>
          <a href="/contact" className="why-btn">
            Talk to Our Experts <FaArrowRight />
          </a>
        </Reveal>

        {/* Right */}
        <div className="why-right">
          {reasons.map((reason, index) => (
            <Reveal direction="up" delay={index * 120} key={index}>
              <div className="why-item">
                <span className="why-number">{reason.number}</span>
                <div className="why-item-content">
                  <h4>{reason.title}</h4>
                  <p>{reason.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;