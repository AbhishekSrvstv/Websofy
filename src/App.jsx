import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loader from "./components/Loader/Loader";
import Layout from "./components/Home/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ServiceDetail from "./components/Services/ServiceDetail";
import GoDigitalDetail from "./components/GoDigital/GoDigitalDetail";
import { GO_DIGITAL_DATA } from "./components/GoDigital/GoDigitalData";
import PortfolioPage from "./components/Portfolio/PortfolioPage";
import PortfolioDetail from "./components/Portfolio/PortfolioDetail";
import SolutionsPage from "./components/Solutions/SolutionsPage";
import PackagesPage from "./components/Solutions/PackagesPage";
import BlogsPage from "./components/Blogs/BlogsPage";
import CareersPage from "./components/Careers/CareersPage";
import ContactPage from "./components/ContactUs/ContactPage";

import "./styles/globals.css";

function App() {
  return (
    <BrowserRouter>
      <Loader />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
          <Route path="/solutions/our-solutions" element={<SolutionsPage />} />
          <Route path="/solutions/packages" element={<PackagesPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {GO_DIGITAL_DATA.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              element={<GoDigitalDetail />}
            />
          ))}

          <Route path="/:serviceSlug" element={<ServiceDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;