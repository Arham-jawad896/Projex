import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/ui/navbar/Navbar";
import Home from "./pages/Home"; // Example of a page component

function App() {
  return (
    <Router>
      {/* Navbar will be present across all pages */}
      <Navbar />

      {/* Define routes for different pages */}
      <Routes>
        {/* Specify the path and the component to render */}
        <Route path="/" element={<Home />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
