import React from "react";
import NavbarUser from "./NavbarUser";


export default function ContentListUser() {
  return (
    <div>
      <NavbarUser />
      <div id="contentContainer">
        <div className="card-group">
          <div class="card">
            <div className="card-body" id="contentCard">
              <img id="physioImage" src="../assets/img/physio_content_1.jpg" />
              <h4 className="card-title">Routine 1</h4>
              <p className="card-text">
                Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Donec id
                elit non mi porta gravida at eget metus.
              </p>
              <button
                className="btn btn-primary"
                id="favoritesButton"
                type="button"
              >
                ADD TO FAVORITES
              </button>
            </div>
          </div>
          <div class="card">
            <div className="card-body" id="contentCard">
              <img id="physioImage" src="../assets/img/physio_content_1.jpg" />
              <h4 className="card-title">Routine 2</h4>
              <p className="card-text">
                Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Donec id
                elit non mi porta gravida at eget metus.
              </p>
              <button
                className="btn btn-primary"
                id="favoritesButton"
                type="button"
              >
                ADD TO FAVORITES
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
