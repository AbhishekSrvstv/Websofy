import heroFallback from "../../assets/Services-img/Services-hero.jpg";

const found = import.meta.glob(
  "../../assets/Blog_img/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);

const pick = (name, fallback = heroFallback) => {
  const target = name.toLowerCase();
  const key = Object.keys(found).find(
    (path) =>
      path.split("/").pop().replace(/\.[^.]+$/, "").toLowerCase() === target
  );
  return key ? found[key] : fallback;
};

export const CONTACT_HERO = pick("ContactHero");

export const CONTACT = {
  address:
    "Sharan Vihar, HN-49, Sugamau Rd, Indira Nagar, Lucknow, Uttar Pradesh 226016",
  whatsapp: "+91-9335785354",
  whatsappLink: "https://wa.me/919335785354",
  phone: "+91-7109990011",
  phoneLink: "tel:+917109990011",
  email: "info@websofy.com",
  emailLink: "mailto:info@websofy.com",
  hours: "Mon - Sat : 10:00 AM - 06:30 PM",
};

export const MAP_URL =
  "https://www.google.com/maps?q=Websofy+Software+Private+Limited+Indira+Nagar+Lucknow&output=embed";

export const MESSAGE_LIMIT = 250;