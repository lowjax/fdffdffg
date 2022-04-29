import React from "react";
import { Nav } from "react-bootstrap";
import ContentlistAD from "../components/ContentcontainerAdmin";
import Logout from "./Logout";
import SelectionAdmin from "./selectionAdmin";
import { Link } from "react-router-dom";
import BackAarow from "../img/BackArrow.svg";
import IndexAdmin from "./IndexAdmin";
import ContentcontainerAdmin from "../components/ContentcontainerAdmin";
import FavoritesAdmin from "./FavoritesAdmin";
import SoarLogo from "../img/SoarLogo.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FavoritesUser from "./FavoritesUser";

export default function NavbarAdmin() {
  return (
    <div>
      <Router>
        <nav className="navbar navbar-light navbar-expand-md" id="soarNavBar">
          <div className="container-fluid">
            <a href="indexAD.html">
              <img id="backArrow" src={BackAarow} width={30} />
            </a>
            <a href="indexAD.html">
              <img id="soarLogo" src={SoarLogo} width={30} />
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
               
              <Nav.Link
                  className="nav-link text-center"
                  as={Link}
                  to="/IndexAdmin"
                  element={IndexAdmin}
                >
                  Index Admin
                </Nav.Link>
               
                <Nav.Link
                  className="nav-link text-center"
                  as={Link}
                  to="/ContentcontainerAD"
                  element={ContentlistAD}
                >
                  Content
                </Nav.Link>

                <Nav.Link
                  className="nav-link text-center"
                  as={Link}
                  to="/SelectionAdmin"
                  element={SelectionAdmin}
                >
                  Filter Screen
                </Nav.Link>

                <Nav.Link
                  className="nav-link text-center"
                  as={Link}
                  to="/FavoritesUser"
                  element={FavoritesUser}
                >
                  Favorites
                </Nav.Link>

                <Nav.Link
                  className="nav-link text-center"
                  as={Link}
                  to="/Logout"
                  element={Logout}
                >
                  Logout
                </Nav.Link>

              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<IndexAdmin />} />
          <Route path="/Filter" element={<SelectionAdmin />} />
          <Route path="/Content" element={<ContentcontainerAdmin />} />
          {/* <Route path="/Contact" element={<Contac />} /> */}
          <Route path="/Favorites" element={<FavoritesAdmin />} />
          <Route path="/Logout" element={<Logout />} />
        </Routes>
      </Router>
    </div>
  );
}
