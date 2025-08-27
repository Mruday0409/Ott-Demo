import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Shows from "./pages/Shows";
import CoverStories from "./pages/CoverStories";
import Offers from "./pages/Offers";
import MyOtt from "./pages/MyOtt";

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/cover-stories" element={<CoverStories />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/myott" element={<MyOtt />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
