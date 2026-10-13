import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaVolumeUp,
  FaSyncAlt,
  FaPaperPlane,
  FaShieldAlt,
  FaChevronDown,
} from "react-icons/fa";

const CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
const makeCaptcha = () =>
  Array.from({ length: 6 }, () => CHARS[Math.floor(Math.random() * CHARS.length)]).join("");

const EMPTY = { name: "", email: "", phone: "", need: "", message: "", agree: false, captcha: "" };

export default function EnquiryForm({ heading, needs, service,  
  buttonText = "Get a Free Consultation",}) {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [code, setCode] = useState(makeCaptcha);
  const [sent, setSent] = useState(false);

  const set = (key) => (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((er) => ({ ...er, [key]: "" }));
  };

  const refreshCaptcha = () => {
    setCode(makeCaptcha());
    setForm((f) => ({ ...f, captcha: "" }));
  };

  const speakCaptcha = () => {
    if (!("speechSynthesis" in window)) return;
    const u = new SpeechSynthesisUtterance(code.split("").join(" "));
    u.rate = 0.7;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  };

  const validate = () => {
    const er = {};
    if (!form.name.trim()) er.name = "Please enter your name";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) er.email = "Enter a valid email";
    if (form.phone.replace(/\D/g, "").length < 10) er.phone = "Enter a valid phone number";
    if (!form.need) er.need = "Please select an option";
    if (!form.message.trim()) er.message = "Please tell us about your project";
    if (!form.agree) er.agree = "Please accept the Privacy Policy";
    if (form.captcha !== code) er.captcha = "CAPTCHA does not match";
    return er;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length) return;

    // TODO: yahan apni API ya email service ka call lagao, abhi ye kahin bhejta nahi
    // fetch("/api/enquiry", { method: "POST", body: JSON.stringify({ service, ...form }) });
    console.log("Enquiry:", { service, ...form });

    setSent(true);
  };

  if (sent) {
    return (
      <div className="sd-form sd-form--done">
        <span className="sd-form__eyebrow">Thank you</span>
        <h3>We have received your request</h3>
        <p>Our team will get back to you shortly.</p>
        <button
          type="button"
          className="sd-form__submit"
          onClick={() => {
            setForm(EMPTY);
            setCode(makeCaptcha());
            setSent(false);
          }}
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form className="sd-form" onSubmit={handleSubmit} noValidate>
      <span className="sd-form__eyebrow">Get Started</span>
      <h3>{heading}</h3>
      <p className="sd-form__sub">
        Tell us about your requirements and our experts will get back to you shortly.
      </p>

      <div className="sd-form__grid">
        <label className="sd-field">
          <span className="sd-field__label">Name <em>*</em></span>
          <span className="sd-input">
            <FaUser />
            <input type="text" placeholder="Enter your name" value={form.name} onChange={set("name")} />
          </span>
          {errors.name && <small className="sd-err">{errors.name}</small>}
        </label>

        <label className="sd-field">
          <span className="sd-field__label">Email <em>*</em></span>
          <span className="sd-input">
            <FaEnvelope />
            <input type="email" placeholder="Enter your email" value={form.email} onChange={set("email")} />
          </span>
          {errors.email && <small className="sd-err">{errors.email}</small>}
        </label>

        <label className="sd-field">
          <span className="sd-field__label">Phone Number <em>*</em></span>
          <span className="sd-input">
            <FaPhoneAlt />
            <input type="tel" placeholder="Enter phone number" value={form.phone} onChange={set("phone")} />
          </span>
          {errors.phone && <small className="sd-err">{errors.phone}</small>}
        </label>

        <label className="sd-field">
          <span className="sd-field__label">What do you need? <em>*</em></span>
          <span className="sd-input sd-input--select">
            <select value={form.need} onChange={set("need")}>
              <option value="">Select requirement</option>
              {needs.map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
            <FaChevronDown className="sd-input__chev" />
          </span>
          {errors.need && <small className="sd-err">{errors.need}</small>}
        </label>
      </div>

      <label className="sd-field">
        <span className="sd-field__label sd-field__label--row">
          <span>Message <em>*</em></span>
          <span className="sd-count">{form.message.length}/250</span>
        </span>
        <textarea
          maxLength={250}
          placeholder="Tell us about your project..."
          value={form.message}
          onChange={set("message")}
        />
        {errors.message && <small className="sd-err">{errors.message}</small>}
      </label>

      <label className="sd-agree">
        <input type="checkbox" checked={form.agree} onChange={set("agree")} />
        <span>
          I agree to the <a href="/privacy-policy">Privacy Policy</a>
        </span>
      </label>
      {errors.agree && <small className="sd-err">{errors.agree}</small>}

      <div className="sd-captcha">
        <span className="sd-captcha__code">{code}</span>
        <button type="button" onClick={speakCaptcha} aria-label="Read CAPTCHA aloud">
          <FaVolumeUp />
        </button>
        <button type="button" onClick={refreshCaptcha} aria-label="New CAPTCHA">
          <FaSyncAlt />
        </button>
        <input
          type="text"
          placeholder="Enter CAPTCHA"
          value={form.captcha}
          onChange={set("captcha")}
        />
      </div>
      {errors.captcha && <small className="sd-err">{errors.captcha}</small>}

            <button type="submit" className="sd-form__submit">
        {buttonText} <FaPaperPlane />
      </button>

      <p className="sd-secure">
        <FaShieldAlt /> Your information is safe and secure
      </p>
    </form>
  );
}