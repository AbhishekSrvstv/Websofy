import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/Home_Img/images/websofy-logo.png";
import { FaArrowRight, FaChevronDown } from "react-icons/fa6";
import ServicesDropdown, { SERVICES } from "../Services/ServicesDropdown";
import GoDigitalDropdown, { GO_DIGITAL } from "../GoDigital/GoDigitalDropdown";
import SolutionsDropdown, { SOLUTIONS_MENU } from "../Solutions/SolutionsDropdown";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [goDigitalOpen, setGoDigitalOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const { pathname } = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setGoDigitalOpen(false);
    setSolutionsOpen(false);
  };

  const linkClass = ({ isActive }) => `nav-link${isActive ? " active" : ""}`;

  const isServicePage =
    pathname === "/services" || SERVICES.some((s) => pathname === s.href);
  const servicesClass = `nav-link dropdown${isServicePage ? " active" : ""}`;

  const isGoDigitalPage =
    pathname === "/go-digital" || GO_DIGITAL.some((s) => pathname === s.href);
  const goDigitalClass = `nav-link dropdown${isGoDigitalPage ? " active" : ""}`;

  const isSolutionsPage =
    pathname === "/solutions" || SOLUTIONS_MENU.some((s) => pathname === s.href);
  const solutionsClass = `nav-link dropdown${isSolutionsPage ? " active" : ""}`;

  const isDesktop = () => window.innerWidth > 900;

  const handleServicesClick = (e) => {
    if (!isDesktop()) {
      e.preventDefault();
      setServicesOpen((prev) => !prev);
    } else {
      closeMenu();
    }
  };

  const handleGoDigitalClick = (e) => {
    if (!isDesktop()) {
      e.preventDefault();
      setGoDigitalOpen((prev) => !prev);
    } else {
      closeMenu();
    }
  };

  const handleSolutionsClick = (e) => {
    e.preventDefault();
    if (!isDesktop()) {
      setSolutionsOpen((prev) => !prev);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={logo} alt="Websofy" />
        </Link>

        <div className={`navbar-menu ${menuOpen ? "mobile-open" : ""}`}>
          <NavLink to="/" end className={linkClass} onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" className={linkClass} onClick={closeMenu}>
            About Us
          </NavLink>

          <div
            className="nav-item"
            style={{ position: "relative" }}
            onMouseEnter={() => isDesktop() && setServicesOpen(true)}
            onMouseLeave={() => isDesktop() && setServicesOpen(false)}
          >
            <NavLink
              to="/services"
              className={servicesClass}
              onClick={handleServicesClick}
            >
              Services
              <span className={`nav-arrow ${servicesOpen ? "open" : ""}`}>
                <FaChevronDown />
              </span>
            </NavLink>

            <ServicesDropdown open={servicesOpen} onNavigate={closeMenu} />
          </div>

          <div
            className="nav-item"
            style={{ position: "relative" }}
            onMouseEnter={() => isDesktop() && setGoDigitalOpen(true)}
            onMouseLeave={() => isDesktop() && setGoDigitalOpen(false)}
          >
            <NavLink
              to="/go-digital"
              className={goDigitalClass}
              onClick={handleGoDigitalClick}
            >
              Go Digital
              <span className={`nav-arrow ${goDigitalOpen ? "open" : ""}`}>
                <FaChevronDown />
              </span>
            </NavLink>

            <GoDigitalDropdown open={goDigitalOpen} onNavigate={closeMenu} />
          </div>

          <NavLink to="/portfolio" className={linkClass} onClick={closeMenu}>
            Portfolio
          </NavLink>

          <div
            className="nav-item"
            style={{ position: "relative" }}
            onMouseEnter={() => isDesktop() && setSolutionsOpen(true)}
            onMouseLeave={() => isDesktop() && setSolutionsOpen(false)}
          >
            <NavLink
              to="/solutions"
              className={solutionsClass}
              onClick={handleSolutionsClick}
            >
              Solutions
              <span className={`nav-arrow ${solutionsOpen ? "open" : ""}`}>
                <FaChevronDown />
              </span>
            </NavLink>

            <SolutionsDropdown open={solutionsOpen} onNavigate={closeMenu} />
          </div>

          <NavLink to="/blogs" className={linkClass} onClick={closeMenu}>
            Blogs
          </NavLink>

          <NavLink to="/careers" className={linkClass} onClick={closeMenu}>
            Careers
          </NavLink>

          <Link to="/contact" className="contact-button" onClick={closeMenu}>
            Contact Us{" "}
            <FaArrowRight style={{ marginLeft: "8px", fontSize: "0.85em" }} />
          </Link>
        </div>

        <button
          className="mobile-menu-button"
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;