import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homePage.jsx";
import ExplorePage from "./pages/explorePage";
import Layout from "./components/Layout.jsx";
import DaneGame from "./pages/DaneGame.jsx";
import JonnyGame from "./pages/JonnyGame.jsx";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/DaneGame" element={<DaneGame />} />
          <Route path="/jonnyGame" element={<jonnyGame />} />
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
