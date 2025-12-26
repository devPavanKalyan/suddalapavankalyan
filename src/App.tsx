import { Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AquaSense from "./pages/projects/AquaSense";
import CMS from "./pages/projects/CMS";
import IoTEcommerce from "./pages/projects/IOTEcommerce";
import Metabird from "./pages/projects/Metabird";
import Metafield from "./pages/projects/Metafield";
import MicrosoftToDoClone from "./pages/projects/MicrosoftToClone";
import WaterQualityMonitoringSystem from "./pages/projects/WaterQualityMonitoringSystem";
import Skills from "./pages/Skills";

function MainLayout() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
      </main>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/project">
        <Route path="college-management" element={<CMS />} />
        <Route path="shopverse" element={<IoTEcommerce />} />
        <Route
          path="water-quality-monitoring"
          element={<WaterQualityMonitoringSystem />}
        />
        <Route path="metabird" element={<Metabird />} />
        <Route path="metafield" element={<Metafield />} />
        <Route path="microsoft-to-do-clone" element={<MicrosoftToDoClone />} />
        <Route path="aquasense" element={<AquaSense />} />
      </Route>
    </Routes>
  );
}
