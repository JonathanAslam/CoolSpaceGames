import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homePage.jsx";
import ExplorePage from "./pages/ExplorePage";
import Layout from "./components/Layout.jsx";
import DaneGame from "./pages/DaneGame.jsx";
import JohnnyGame from "./pages/JohnnyGame.jsx";
import DatingSim from "./pages/DatingSim.jsx";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/DaneGame" element={<DaneGame />} />
          <Route path="/JohnnyGame" element={<JohnnyGame />} />
          <Route path="/DatingSim" element={<DatingSim />} />
        </Routes>
      </Layout>
      {/* <Routes>
        <Route path="/DaneGame" element={<DaneGame />} />
        <Route path="/jonnyGame" element={<jonnyGame />} />
      </Routes> */}
    </Router>
  );
}

export default App;
