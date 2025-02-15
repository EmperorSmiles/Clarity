import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import DonatePage from "./pages/DonatePage";
// import Body from "./components/Body";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import MobileAlertModal from "./components/MobileAlertModal";
import Legal from "./pages/Legal";

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <MobileAlertModal />
      <div className="font-vietnam">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/donate" element={<DonatePage />} />
      </Routes>
      <Footer />

      {/* <div className="bg-background-dark h-screen flex flex-col justify-center items-center font-vietnam">
        <Hero
          mediaItems={mediaItems}
          videoFallbackImage={videoFallback}
          interval={7000}
        />
      </div>
      <Body /> */}
    </Router>
  );
};

export default App;
