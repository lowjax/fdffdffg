import React from "react";
import IndexUser from "./IndexUser";
import Login from "./Login";

export default function NavbarUser() {
  return (
    <div>
      <Router>
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
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<IndexUser />} />
          <Route path="/c" element={<SignUp />} />
         
        </Routes>
      </Router>
      {/* <nav
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
      </nav> */}
    </div>
  );
}





<Router>
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/catprofile/:id' element={<CatProfile/>}/>
          <Route path="/addaward" element={<AddAward/>}/>
          <Route path='/shows' element={<Shows/>}/>
          <Route path='/show/:id' element={<Show/>}/>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>