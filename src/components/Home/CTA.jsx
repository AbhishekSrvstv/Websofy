import './CTA.css';
import { FaArrowRight } from 'react-icons/fa6';

function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-box">
        <div className="cta-left">
          <span className="cta-badge">
            <span className="cta-dot"></span> Let's Build Together
          </span>
          <h2>Ready to Bring Your Idea to Life?</h2>
          <p>
            Tell us your goals, and our experts will help turn your idea into
            a powerful digital solution built for growth.
          </p>
        </div>

        <a href="/contact" className="cta-btn">
          Start Your Project <FaArrowRight />
        </a>
      </div>
    </section>
  );
}

export default CTA;