import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero1 from "./pages/page1/Hero";
import Hero2 from "./pages/page2/Hero";
import Hero3 from "./pages/page3/Hero";
import Hero4 from "./pages/page4/Hero";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero1 />} />
        <Route path="/page2" element={<Hero2 />} />
        <Route path="/page3" element={<Hero3 />} />
        <Route path="/page4" element={<Hero4 />} />
      </Routes>
    </Router>
  );
}

export default App;
