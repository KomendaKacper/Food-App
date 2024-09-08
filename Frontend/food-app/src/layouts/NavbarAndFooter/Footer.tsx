export const Footer = () => {
  return (
    <div className="main-color">
      <footer className="footer container d-flex justify-content-between align-items-center py-5">
        {/* Lewa strona - Food app */}
        <div className="nav col-md-4 d-flex align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="50px"
            fill="currentColor"
            style={{ color: "white" }}
          >
            <path d="M61.1 224C45 224 32 211 32 194.9c0-1.9 .2-3.7 .6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9 .6 3.7 .6 5.6c0 16.1-13 29.1-29.1 29.1L61.1 224zM144 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm240 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM272 96a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM16 304c0-26.5 21.5-48 48-48l384 0c26.5 0 48 21.5 48 48s-21.5 48-48 48L64 352c-26.5 0-48-21.5-48-48zm16 96c0-8.8 7.2-16 16-16l416 0c8.8 0 16 7.2 16 16l0 16c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-16z" />
          </svg>
          <p className="ms-2 mb-0">Food app &copy; 2024</p>
        </div>

        {/* Środek - Home i About */}
        <ul className="nav col-md-4 justify-content-center">
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
        <div className="nav col-md-4 text-end">
          <a href="/contact" className="nav-link text-white ms-auto">
            Contact us
          </a>
        </div>
      </footer>
    </div>
  );
};
