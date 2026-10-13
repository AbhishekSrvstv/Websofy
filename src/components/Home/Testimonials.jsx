import React from "react";
import "./Testimonials.css";
import { FaStar, FaQuoteRight } from "react-icons/fa6";

const testimonials = [
  {
    name: "Ashish Shukla",
    role: "Businessman",
    text: "I am a businessman from Bahraich, having a clothing business, and completely satisfied with the Websofy Software Pvt. Ltd. Company in Lucknow.",
  },
  {
    name: "Shivam Singh",
    role: "Business Owner",
    text: "Websofy's SEO expertise helped us rise in search rankings, leading to more leads. Their support is always available and truly appreciated!",
  },
  {
    name: "Sunil Kumar Yadav",
    role: "Businessman",
    text: "We got amazing website design and SEO services from Websofy thanks to the entire team. We will recommend your services to others also.",
  },
  {
    // screenshot mein is card ka poora text nahi dikh raha tha, apna asli text yahan daal lena
    name: "Gaurav",
    role: "YouTuber",
    text: "Websofy's YouTube marketing services greatly increased our reach and audience interaction. We are very happy with their services.",
  },
];

const Testimonials = () => {
  // infinite loop ke liye list 2 baar render hoti hai
  const loop = [...testimonials, ...testimonials];

  return (
    <section className="testi-section">
      <div className="testi-header">
        <span className="testi-eyebrow">Testimonials</span>
        <h2>
          What Our <span>Clients Say About Us</span>
        </h2>
        <p>
          Hear from our clients about their experience with WebSofy and how our
          solutions have helped turn their ideas into successful digital
          outcomes.
        </p>
      </div>

      <div className="testi-slider">
        <div className="testi-track">
          {loop.map((t, i) => (
            <div className="testi-card" key={i}>
              <div className="testi-top">
                <div className="testi-stars">
                  {[...Array(5)].map((_, s) => (
                    <FaStar key={s} />
                  ))}
                </div>
                <FaQuoteRight className="testi-quote" />
              </div>

              <p className="testi-text">“{t.text}”</p>

              <div className="testi-user">
                <span className="testi-avatar">{t.name.charAt(0)}</span>
                <div>
                  <h4>{t.name}</h4>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;