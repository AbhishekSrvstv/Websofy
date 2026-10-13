import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaChevronRight,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaPhoneAlt,
  FaRegEnvelope,
  FaRegClock,
  FaVolumeUp,
  FaSyncAlt,
  FaPaperPlane,
} from "react-icons/fa";

import Reveal from "../Home/Reveal";
import { CONTACT_HERO, CONTACT, MAP_URL, MESSAGE_LIMIT } from "./ContactData";

import "../Services/ServicesPage.css";
import "../Services/ServiceDetail.css";
import "./Contact.css";

const CAPTCHA_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";

const makeCaptcha = () =>
  Array.from(
    { length: 6 },
    () => CAPTCHA_CHARS[Math.floor(Math.random() * CAPTCHA_CHARS.length)]
  ).join("");

const FIELDS = [
  { name: "name", label: "Full Name", placeholder: "Enter your name", type: "text" },
  { name: "email", label: "Email Address", placeholder: "Enter your email", type: "email" },
  { name: "phone", label: "Phone Number", placeholder: "Enter phone number", type: "tel" },
  { name: "subject", label: "Subject", placeholder: "Enter subject", type: "text" },
];

const INFO = [
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: CONTACT.address,
  },
  {
    icon: FaWhatsapp,
    label: "Chat with us",
    value: CONTACT.whatsapp,
    href: CONTACT.whatsappLink,
  },
  {
    icon: FaPhoneAlt,
    label: "Call us",
    value: CONTACT.phone,
    href: CONTACT.phoneLink,
  },
  {
    icon: FaRegEnvelope,
    label: "Email address",
    value: CONTACT.email,
    href: CONTACT.emailLink,
  },
  {
    icon: FaRegClock,
    label: "Working hours",
    value: CONTACT.hours,
  },
];

const EMPTY_FORM = { name: "", email: "", phone: "", subject: "", message: "" };

export default function ContactPage() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [captcha, setCaptcha] = useState(makeCaptcha);
  const [captchaInput, setCaptchaInput] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((er) => ({ ...er, [name]: "" }));
    setSent(false);
  };

  const refreshCaptcha = () => {
    setCaptcha(makeCaptcha());
    setCaptchaInput("");
    setErrors((er) => ({ ...er, captcha: "" }));
  };

  const speakCaptcha = () => {
    if (!("speechSynthesis" in window)) return;
    const utterance = new SpeechSynthesisUtterance(captcha.split("").join(" "));
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  const validate = () => {
    const next = {};

    if (!form.name.trim()) next.name = "Please enter your name";

    if (!form.email.trim()) next.email = "Please enter your email";
    else if (!/^\S+@\S+\.\S+$/.test(form.email.trim()))
      next.email = "Enter a valid email address";

    if (!form.phone.trim()) next.phone = "Please enter your phone number";
    else if (form.phone.replace(/\D/g, "").length < 10)
      next.phone = "Enter a valid phone number";

    if (!form.subject.trim()) next.subject = "Please enter a subject";
    if (!form.message.trim()) next.message = "Please write your message";

    if (!captchaInput.trim()) next.captcha = "Please enter the captcha";
    else if (captchaInput.trim().toLowerCase() !== captcha.toLowerCase())
      next.captcha = "Captcha does not match";

    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const next = validate();
    setErrors(next);

    if (Object.keys(next).length > 0) return;

    setSent(true);
    setForm(EMPTY_FORM);
    refreshCaptcha();
  };

  return (
    <>
      <section className="svc-hero sd-hero">
        <img src={CONTACT_HERO} alt="Contact Us" className="sd-hero__image" />
        <div className="sd-hero__overlay"></div>

        <div className="svc-hero__inner">
          <div className="svc-crumb">
            <Link to="/">
              <FaHome />
              <span>Home</span>
            </Link>
            <FaChevronRight className="svc-crumb__sep" />
            <span>Contact Us</span>
          </div>

          <div className="svc-bars">
            <i />
            <i />
          </div>

          <h1 className="svc-hero__title">
            <span>Contact </span>
            <b>Us</b>
          </h1>

          <p className="svc-hero__text">
            Get in touch for consultation, queries, project discussions, or
            technical support. We're here to answer your questions and help
            bring your ideas to life.
          </p>
        </div>
      </section>

      <section className="ct">
        <Reveal direction="up" delay={200}>
          <h2 className="ct__title">
            Contact Us – Transform Your Ideas Into Digital Excellence
          </h2>
        </Reveal>

        <div className="ct__grid">
          <Reveal direction="left" delay={350} className="ct__col">
            <div className="ct__card">
              <span className="ct__tag">Contact Us</span>

              <h3 className="ct__heading">
                Talk to <span>Our Experts</span>
              </h3>

              <p className="ct__lead">
                Get professional guidance on <b>web development</b>,{" "}
                <b>software solutions</b>, and <b>digital transformation</b>.
              </p>

              <ul className="ct__info">
                {INFO.map(({ icon: Icon, label, value, href }) => (
                  <li className="ct__item" key={label}>
                    <span className="ct__icon">
                      <Icon />
                    </span>

                    <div>
                      <small>{label}</small>
                      {href ? (
                        <a href={href} target="_blank" rel="noreferrer">
                          {value}
                        </a>
                      ) : (
                        <p>{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal direction="right" delay={500} className="ct__col">
            <div className="ct__card">
              <span className="ct__tag">Let's Build Together</span>

              <h3 className="ct__heading">
                Let's Build <span>Something Great</span>
              </h3>

              <p className="ct__lead">
                Tell us about your project and our team will get back to you
                shortly.
              </p>

              <form className="ct__form" onSubmit={handleSubmit} noValidate>
                <div className="ct__row">
                  {FIELDS.map(({ name, label, placeholder, type }) => (
                    <div className="ct__field" key={name}>
                      <label htmlFor={`ct-${name}`}>{label}</label>
                      <input
                        id={`ct-${name}`}
                        name={name}
                        type={type}
                        placeholder={placeholder}
                        value={form[name]}
                        onChange={handleChange}
                        className={errors[name] ? "is-error" : ""}
                      />
                      {errors[name] && (
                        <span className="ct__error">{errors[name]}</span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="ct__field">
                  <div className="ct__label-row">
                    <label htmlFor="ct-message">Message</label>
                    <span className="ct__counter">
                      {form.message.length}/{MESSAGE_LIMIT}
                    </span>
                  </div>
                  <textarea
                    id="ct-message"
                    name="message"
                    rows={4}
                    maxLength={MESSAGE_LIMIT}
                    placeholder="Write your message here..."
                    value={form.message}
                    onChange={handleChange}
                    className={errors.message ? "is-error" : ""}
                  />
                  {errors.message && (
                    <span className="ct__error">{errors.message}</span>
                  )}
                </div>

                <div className="ct__field">
                  <div className="ct__captcha">
                    <span className="ct__captcha-code" aria-label="Captcha">
                      {captcha}
                    </span>

                    <button
                      type="button"
                      className="ct__mini"
                      onClick={speakCaptcha}
                      aria-label="Listen to captcha"
                    >
                      <FaVolumeUp />
                    </button>

                    <button
                      type="button"
                      className="ct__mini"
                      onClick={refreshCaptcha}
                      aria-label="Refresh captcha"
                    >
                      <FaSyncAlt />
                    </button>

                    <input
                      type="text"
                      placeholder="Enter CAPTCHA"
                      value={captchaInput}
                      onChange={(e) => {
                        setCaptchaInput(e.target.value);
                        setErrors((er) => ({ ...er, captcha: "" }));
                      }}
                      className={errors.captcha ? "is-error" : ""}
                    />
                  </div>
                  {errors.captcha && (
                    <span className="ct__error">{errors.captcha}</span>
                  )}
                </div>

                <button type="submit" className="ct__send">
                  Send Message <FaPaperPlane />
                </button>

                {sent && (
                  <p className="ct__ok">
                    Thank you! Your message has been received. Our team will
                    get back to you shortly.
                  </p>
                )}
              </form>
            </div>
          </Reveal>
        </div>

        <Reveal direction="up" delay={200}>
          <div className="ct__map">
            <iframe
              title="Websofy location"
              src={MAP_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </Reveal>
      </section>
    </>
  );
}