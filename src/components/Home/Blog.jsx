import React from "react";
import "./Blog.css";
import { FaRegCalendarDays, FaRegUser } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";

// Blog images yahan rakho: src/assets/Blog_img/
import TaxiBooking from "../../assets/Blog_img/TaxiBooking.jpg";
import DigitalMarketing from "../../assets/Blog_img/DigitalMarketing.jpg";
import RestaurantSoftware from "../../assets/Blog_img/RestaurantManagement.jpg";

const blogs = [
  {
    category: "App Development",
    date: "September 13, 2026",
    title: "Taxi Booking Application Development Company in Kanpur",
    desc: "Websofy is a leading Taxi Booking App Development Company in Kanpur offering custom cab apps with GPS tracking, secure payments, AI dispatch, and real-time rides.",
    image: TaxiBooking,
    link: "/blog/taxi-booking-app-development-company-in-kanpur",
  },
  {
    category: "Digital Marketing",
    date: "September 12, 2026",
    title: "Digital Marketing Company in Lucknow",
    desc: "Websofy is a leading Digital Marketing Company in Lucknow offering result-driven strategies, creative campaigns, and data-driven solutions to boost visibility, leads, and sales.",
    image: DigitalMarketing,
    link: "/blog/digital-marketing-company-in-lucknow",
  },
  {
    category: "Software Development",
    date: "September 11, 2026",
    title: "Restaurant Management Software Company In Kanpur",
    desc: "Websofy offers advanced Restaurant Management Software in Kanpur with POS, billing, inventory, CRM, GST compliance, kitchen automation, and multi-branch management.",
    image: RestaurantSoftware,
    link: "/blog/restaurant-management-software-company-in-kanpur",
  },
];

const Blog = () => {
  return (
    <section className="blog-section">
      <div className="blog-header">
        <span className="blog-eyebrow">Our Blog</span>
        <h2>
          Insights That <span>Inspire Growth</span>
        </h2>
        <p>
          Explore expert insights, industry trends, and practical tips to help
          your business stay ahead, make smarter decisions, and grow with
          confidence.
        </p>
      </div>

      <div className="blog-grid">
        {blogs.map((b, i) => (
          <article className="blog-card" key={i}>
            <div className="blog-img">
              <img src={b.image} alt={b.title} loading="lazy" />
              <span className="blog-tag">{b.category}</span>
            </div>

            <div className="blog-body">
              <div className="blog-date">
                <FaRegCalendarDays />
                <span>{b.date}</span>
              </div>

              <h3>{b.title}</h3>
              <p>{b.desc}</p>

              <div className="blog-footer">
                <div className="blog-author">
                  <span className="blog-avatar">
                    <FaRegUser />
                  </span>
                  <span>Websofy</span>
                </div>
                <a href={b.link} className="blog-read">
                  Read More <FiArrowUpRight />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="blog-more-wrap">
        <a href="/blog" className="blog-more">
          View More
          <span>
            <FiArrowUpRight />
          </span>
        </a>
      </div>
    </section>
  );
};

export default Blog;