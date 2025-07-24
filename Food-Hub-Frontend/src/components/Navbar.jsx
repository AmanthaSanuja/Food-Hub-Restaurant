import Logo from '../assets/logo.jpeg';

function Navbar({ setMenu }) {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light">
        <div className="container-fluid">
          <img
            src={Logo}
            alt="Logo"
            style={{ height: "40px", width: "auto", marginRight: "16px" }}
          />
          <span className="navbar-brand">Food Hub</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button className="nav-link btn" onClick={() => setMenu("Home")}>
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn" onClick={() => setMenu("About Us")}>
                  About Us
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn" onClick={() => setMenu("Products")}>
                  Products
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn disabled" disabled>
                  Coming Soon
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
