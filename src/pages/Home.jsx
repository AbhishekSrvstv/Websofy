import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Services from "../components/Home/Services";
import Technologies from "../components/Home/Technologies";
import Portfolio from "../components/Home/Portfolio";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import ClientsSlider from "../components/Home/ClientsSlider";
import Blog from "../components/Home/Blog";
import Testimonials from "../components/Home/Testimonials";
import Contact from "../components/Home/Contact";
import MapSection from "../components/Home/MapSection";
import CTA from "../components/Home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Technologies />
      <Portfolio/>
      <WhyChooseUs />
      <ClientsSlider/>
      <Blog/>
      <Testimonials/>
      <Contact />
      <MapSection />
      <CTA />
    </>
  );
}