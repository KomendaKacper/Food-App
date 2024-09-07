export const Footer = () => {
    return (
      <div className="main-color">
        <footer className="container text-white d-flex flex-wrap align-items-center py-5">
          {/* Lewa strona - Food app */}
          <p className="col-md-4 mb-0">Food app &copy; 2024</p>
  
          {/* Środek - Home i About */}
          <ul className="nav col-md-4 mb-0 justify-content-center">
            <li className="nav-item">
              <a href="/#" className="nav-link text-white px-2">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link text-white px-2">
                About
              </a>
            </li>
          </ul>
  
          {/* Prawa strona - Contact us */}
          <a href="/contact" className="col-md-4 mb-0 text-white ms-auto text-end">
            Contact us
          </a>
        </footer>
      </div>
    );
  };
  