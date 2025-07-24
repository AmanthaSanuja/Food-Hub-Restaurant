import './App.css';
import { useState } from 'react';
import Home from './components/Home.jsx';
import AboutUs from './components/AboutUs.jsx';
import Navbar from './components/Navbar.jsx';
import Products from './components/Products.jsx'; // Import the Products component

function App() {
  const [component, setComponent] = useState(<Home />);

  function setMenu(menu) {
    switch (menu) {
      case "Home":
        setComponent(<Home />);
        break;
      case "Products":
        setComponent(<Products />);
        break;
      case "About Us":
        setComponent(<AboutUs />);
        break;

      default:
        setComponent(<Home />);
        break;
    }
  }

  return (
    <div>
      <Navbar setMenu={setMenu} />
      <div className="container mt-4">
        {component}
      </div>
    </div>
  );
}

export default App;
