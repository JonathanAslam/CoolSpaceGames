import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage.jsx";
import ExplorePage from "./pages/ExplorePage";
import Layout from "./components/Layout.jsx";
import DaneGame from "./pages/DaneGame.jsx";
import JohnnyGame from "./pages/JohnnyGame.jsx";
import DatingSim from "./pages/DatingSim.jsx";
import AboutCreators from "./pages/AboutCreators.jsx"; 

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
          <Route path="/AboutCreators" element={<AboutCreators />} />
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
