import React from "react";

export default function NavbarUser() {
  return (
    <div>
      <nav
        className="navbar navbar-light navbar-expand-lg navigation-clean"
        id="soarNavBar"
      >
        <div className="container">
          <a href="index.html">
            <img id="backArrow" src="../assets/img/back_arrow.svg" />
          </a>
          <a href="index.html">
            <img id="navbarLogo" src="../assets/img/logo_final.svg" />
          </a>
          <button
            data-bs-toggle="collapse"
            className="navbar-toggler"
            data-bs-target="#navcol-1"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="favorites"
                  href="favorites.html"
                >
                  Favorites
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="contact" href="contact.html">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="logout" href="logout.html">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
