import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'leaflet/dist/leaflet.css';

import Home from "./components/Home.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Navbar from "./components/Navbar.jsx";
import Products from "./components/Products.jsx";
import Jumbotron from "./components/Jumbotron.jsx";
import OrderNow from "./components/OrderNow.jsx"; // Add this

function App() {
  return (
    <Router>
      <Navbar /> {/* Remove setMenu */}
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/order" element={<OrderNow />} /> {/* Order Now route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
