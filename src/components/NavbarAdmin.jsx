import React from "react";

export default function NavbarAdmin() {
  return (
    <div>
      <nav className="navbar navbar-light navbar-expand-md" id="soarNavBar">
        <div className="container-fluid">
          <a href="indexAD.html">
            <img id="backArrow" src="../assets/img/back_arrow.svg" />
          </a>
          <a href="indexAD.html">
            <img id="soarLogo" src="../assets/img/logo_final.svg" />
          </a>
          <button
            data-bs-toggle="collapse"
            className="navbar-toggler"
            data-bs-target="#navcol-1"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav">
              <li className="nav-item" />
              <li className="nav-item">
                <a className="nav-link" href="contentlistAD.html">
                  Favorites
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="logoutAD.html">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     
    </div>
  )
}
