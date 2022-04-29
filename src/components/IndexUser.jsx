import React from "react";
import NavbarUser from "./NavbarUser";


export default function IndexUser() {
  return (
    <div>
      <NavbarUser />
      <div id="bodyDigramContainer">
        <a href="selection.html">
          <img id="bodyDiagram" src="../assets/img/body_diagram.svg" />
        </a>
      </div>
      <div id="bodDiagramText">
        <h1>Select area of injury</h1>
      </div>
    </div>
  );
}
