import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import React, { lazy, Suspense } from "react";


function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
