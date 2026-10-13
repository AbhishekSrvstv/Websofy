import { Link, useLocation } from "react-router-dom";

import {
  FaCode,
  FaGlobe,
  FaMobileAlt,
  FaPenNib,
  FaShieldAlt,
  FaLock,
  FaServer,
  FaSms,
  FaEnvelopeOpenText,
  FaWhatsapp,
  FaGraduationCap,
  FaLaptopCode,
  FaChartLine,
  FaSearch,
  FaChevronRight,
} from "react-icons/fa";

import "./ServicesDropdown.css";

export const SERVICES = [
  {
    label: "Software Development",
    href: "/software-development-company-in-lucknow",
    icon: FaCode,
  },
  {
    label: "Website Development",
    href: "/website-development-company-in-lucknow",
    icon: FaGlobe,
  },
  {
    label: "Mobile App Development",
    href: "/mobile-app-development-company-in-lucknow",
    icon: FaMobileAlt,
  },
  {
    label: "Graphic Design",
    href: "/graphic-design-company-in-lucknow",
    icon: FaPenNib,
  },
  {
    label: "Cyber Security Services",
    href: "/cyber-security-services-in-lucknow",
    icon: FaShieldAlt,
  },
  {
    label: "SSL Certificate",
    href: "/ssl-certificate",
    icon: FaLock,
  },
  {
    label: "Domain Hosting",
    href: "/domain-hosting",
    icon: FaServer,
  },
  {
    label: "Bulk SMS",
    href: "/bulk-sms",
    icon: FaSms,
  },
  {
    label: "Bulk Email",
    href: "/bulk-email",
    icon: FaEnvelopeOpenText,
  },
  {
    label: "Bulk WhatsApp",
    href: "/bulk-whatsapp",
    icon: FaWhatsapp,
  },
  {
    label: "Training",
    href: "/training",
    icon: FaGraduationCap,
    arrow: true,
    children: [
      {
        label: "Web Development Training",
        href: "/web-development-training-in-lucknow",
        icon: FaLaptopCode,
      },
      {
        label: "Digital Marketing Training",
        href: "/digital-marketing-training-in-lucknow",
        icon: FaChartLine,
      },
      {
        label: "SEO Training",
        href: "/seo-training",
        icon: FaSearch,
      },
    ],
  },
];

export default function ServicesDropdown({ open, onNavigate }) {
  const { pathname } = useLocation();

  return (
    <div
      className={`sdrop ${open ? "sdrop--open" : ""}`}
      role="menu"
    >
      <ul className="sdrop__grid">
        {SERVICES.map(
          ({
            label,
            href,
            icon: Icon,
            arrow,
            children,
          }) => {
            const active = pathname === href;
            const hasSub =
              children && children.length > 0;

            return (
              <li
                key={label}
                className={`sdrop__item ${
                  hasSub ? "has-sub" : ""
                }`}
              >
                <Link
                  to={href}
                  className={`sdrop__link ${
                    active ? "is-active" : ""
                  }`}
                  onClick={onNavigate}
                >
                  <Icon className="sdrop__icon" />

                  <span>{label}</span>

                  {(hasSub || arrow) && (
                    <FaChevronRight className="sdrop__arrow" />
                  )}
                </Link>

                {hasSub && (
                  <ul className="sdrop__sub">
                    {children.map(
                      ({
                        label: childLabel,
                        href: childHref,
                        icon: ChildIcon,
                      }) => {
                        const childActive =
                          pathname === childHref;

                        return (
                          <li key={childHref}>
                            <Link
                              to={childHref}
                              className={
                                childActive
                                  ? "is-active"
                                  : ""
                              }
                              onClick={onNavigate}
                            >
                              {ChildIcon && (
                                <ChildIcon className="sdrop__sub-icon" />
                              )}

                              <span>
                                {childLabel}
                              </span>

                              <FaChevronRight className="sdrop__sub-arrow" />
                            </Link>
                          </li>
                        );
                      }
                    )}
                  </ul>
                )}
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
}