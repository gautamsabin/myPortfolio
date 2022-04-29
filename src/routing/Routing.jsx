import { Routes, Route } from "react-router-dom";
import Contact from "../components/Contact/Contact";
import Intro from "../components/Intro/Intro";
import Portfolio from "../pages/Portfolio/Portfolio";
import Works from "../components/Works/Works";

export default function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/works" element={<Works />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={"Page not found"} />
      </Routes>
    </>
  );
}
