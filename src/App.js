import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CoverStories from "./pages/CoverStories";
import CrimeSeries from "./pages/CrimeSeries";
import Offers from "./pages/Offers";
import MyOtt from "./pages/MyOtt";

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cover-stories" element={<CoverStories />} />
          <Route path="/crime-series" element={<CrimeSeries />} />
          <Route path="/food-series" element={<div style={{paddingTop: "80px", background: "#000", color: "#fff", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}><h1>Food Series - Coming Soon</h1></div>} />
          <Route path="/janata-nyayalaya" element={<div style={{paddingTop: "80px", background: "#000", color: "#fff", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}><h1>Janata Nyayalaya - Coming Soon</h1></div>} />
          <Route path="/podcast-series" element={<div style={{paddingTop: "80px", background: "#000", color: "#fff", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}><h1>Podcast Series - Coming Soon</h1></div>} />
          <Route path="/legal-aid" element={<div style={{paddingTop: "80px", background: "#000", color: "#fff", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}><h1>Legal Aid - Coming Soon</h1></div>} />
          <Route path="/social-cause" element={<div style={{paddingTop: "80px", background: "#000", color: "#fff", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}><h1>Social Cause Documentaries - Coming Soon</h1></div>} />
          <Route path="/citizen-journalist" element={<div style={{paddingTop: "80px", background: "#000", color: "#fff", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}><h1>Citizen Journalist - Coming Soon</h1></div>} />
          <Route path="/real-heroes" element={<div style={{paddingTop: "80px", background: "#000", color: "#fff", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}><h1>Real Heroes - Coming Soon</h1></div>} />
          <Route path="/citizen-vlog" element={<div style={{paddingTop: "80px", background: "#000", color: "#fff", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}><h1>Citizen Vlog - Coming Soon</h1></div>} />
          <Route path="/natural-food" element={<div style={{paddingTop: "80px", background: "#000", color: "#fff", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}><h1>Natural Food - Coming Soon</h1></div>} />
          <Route path="/village-medicines" element={<div style={{paddingTop: "80px", background: "#000", color: "#fff", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}><h1>Village Medicines - Coming Soon</h1></div>} />
          <Route path="/ott-awards" element={<div style={{paddingTop: "80px", background: "#000", color: "#fff", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}><h1>OTT Annual Awards - Coming Soon</h1></div>} />
          <Route path="/gate-crash" element={<div style={{paddingTop: "80px", background: "#000", color: "#fff", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}><h1>Gate Crash - Coming Soon</h1></div>} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/myott" element={<MyOtt />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
