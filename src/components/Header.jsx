export default function Header() {
  return (
    <>
      {" "}
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        style={{ zIndex: 1000 }}
        id="ftco-navbar"
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <span className="flaticon-lotus"></span>Parisian
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu"></span>
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/about" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://book.daysmart.com/booking/service?DSID=DC-1387398"
                  className="nav-link"
                  target="_blank"
                >
                  Book Now
                </a>
              </li>
              <li className="nav-item">
                <a href="/#services" className="nav-link">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a href="contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
