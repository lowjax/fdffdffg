import React from "react"
import { Nav } from 'react-bootstrap'
import ContentlistAD from '../components/ContentcontainerAdmin'
import Logout from "./Logout"
import SelectionAdmin from "./selectionAdmin"
import { Link } from "react-router-dom"
import BackAarow from "../img/BackArrow.svg"



export default function NavbarAdmin() {
  return (
    <div>
      <nav className="navbar navbar-light navbar-expand-md" id="soarNavBar">
        <div className="container-fluid">
          <a href="indexAD.html">
            <img id="backArrow" src={BackAarow} width={30}/>
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
              <Nav.Link className="nav-link text-center" as= {Link} to='/ContentcontainerAD' element={ContentlistAD}>Content</Nav.Link>
               
              <Nav.Link className="nav-link text-center" as= {Link} to='/Logout' element={Logout}>Logout</Nav.Link>

              <Nav.Link className="nav-link text-center" as= {Link} to='/SelectionAdmin' element={SelectionAdmin}>Filter Screen</Nav.Link>
             
            </ul>
          </div>
        </div>
      </nav>
     
    </div>
  )
}
