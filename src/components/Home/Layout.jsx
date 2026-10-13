import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import useScrollReveal from "../../Hooks/useScrollReveal";

export default function Layout() {
  useScrollReveal();

  return (
    <>
      <Header />
      <div className="page-wrapper">
        <Outlet />
        <Footer />
      </div>
    </>
  );
}