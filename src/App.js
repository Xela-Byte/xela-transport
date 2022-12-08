import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fontsource/poppins";
import "@fontsource/roboto";
import RqsQoute from "./pages/RqsQoute";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { stickyNavBar } from "./styled/Navbar";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import CarrierForm from "./components/CarrierForm";
import UnderDev from "./pages/UnderDev";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Mission from "./pages/Mission";
import FullTruckLoad from "./pages/FullTruckLoad";
import ProvenFactors from "./pages/ProvenFactors";
import Intermodal from "./pages/Intermodal";
import Drayage from "./pages/Drayage";
import Air from "./pages/Air";
import Template from "./components/Template";
import ScrollToTop from "./utils/ScrollToTop";

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  const UnderDevPages = ["login", "track", "what-moves"];
  return (
    <Router>
      <ScrollToTop />
      <Navbar sticky={scrolled ? stickyNavBar : ""} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rqt-quote" element={<RqsQoute />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/carriers" element={<CarrierForm />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/ftl" element={<FullTruckLoad />} />
        <Route path="/proven-factors" element={<ProvenFactors />} />
        <Route path="/intermodal" element={<Intermodal />} />
        <Route path="/drayage" element={<Drayage />} />
        <Route path="/air" element={<Air />} />
        <Route path="/drop-trailer" element={<Template />} />
        {UnderDevPages.map((path, index) => {
          return <Route path={path} element={<UnderDev />} key={index} />;
        })}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
