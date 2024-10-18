import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import HowToStart from "./pages/how-to-start/HowToStart";
import OurService from "./pages/our-service/OurService";
import Technologies from "./pages/technologies/Technologies";
import Careers from "./pages/careers/Careers";
import Contact from "./pages/contact/Contact";

export default function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-to-start" element={<HowToStart />} />
          <Route path="/our-service" element={<OurService />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </>
  );
}
