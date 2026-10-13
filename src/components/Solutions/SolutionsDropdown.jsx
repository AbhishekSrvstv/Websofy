import { Link, useLocation } from "react-router-dom";
import { FaLayerGroup, FaBoxOpen } from "react-icons/fa";
import "../Services/ServicesDropdown.css";
import "./SolutionsDropdown.css";

export const SOLUTIONS_MENU = [
  { label: "Our Solutions", href: "/solutions/our-solutions", icon: FaLayerGroup },
  { label: "Packages", href: "/solutions/packages", icon: FaBoxOpen },
];

export default function SolutionsDropdown({ open, onNavigate }) {
  const { pathname } = useLocation();

  return (
    <div className={`sdrop sdrop--solutions ${open ? "sdrop--open" : ""}`} role="menu">
      <ul className="sdrop__grid">
        {SOLUTIONS_MENU.map(({ label, href, icon: Icon }) => {
          const active = pathname === href;
          return (
            <li key={label} className="sdrop__item">
              <Link
                to={href}
                className={`sdrop__link ${active ? "is-active" : ""}`}
                onClick={onNavigate}
              >
                <Icon className="sdrop__icon" />
                <span>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}