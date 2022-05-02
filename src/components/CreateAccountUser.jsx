import React from "react";
import NavbarUser from "./NavbarUser";
import SoarLogo from "../img/SoarLogo.svg";

export default function CreateAccountUser() {
  return (
    <div>
      <div className="row register-form">
        <div className="col-md-8 offset-md-2">
          <form className="custom-form">
            <img src={SoarLogo} heigh={40} />
            <h1>Create Account</h1>
            <div className="row form-group">
              <div className="col-sm-4 label-column">
                <label className="col-form-label" for="name-input-field">
                  First Name
                </label>
              </div>
              <div className="col-sm-6 input-column">
                <input className="form-control" type="text" />
              </div>
              <div className="col">
                <div className="row form-group" id="LastNameRow">
                  <div className="col-sm-4 label-column">
                    <label className="col-form-label" for="name-input-field">
                      Last Name
                    </label>
                  </div>
                  <div className="col-sm-6 input-column">
                    <input className="form-control" type="text" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row form-group">
              <div className="col-sm-4 label-column">
                <label className="col-form-label" for="email-input-field">
                  Email{" "}
                </label>
              </div>
              <div className="col-sm-6 input-column">
                <input className="form-control" type="email" />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-sm-4 label-column">
                <label className="col-form-label" for="pawssword-input-field">
                  Password{" "}
                </label>
              </div>
              <div className="col-sm-6 input-column">
                <input className="form-control" type="password" />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-sm-4 label-column">
                <label
                  className="col-form-label"
                  for="repeat-pawssword-input-field"
                >
                  Repeat Password{" "}
                </label>
              </div>
              <div className="col-sm-6 input-column">
                <input className="form-control" type="password" />
              </div>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="formCheck-1"
              />
              <label className="form-check-label" for="formCheck-1">
                I've read and accept the terms and conditions
              </label>
            </div>
            <a href="../access/login.html">
              <a
                className="btn btn-light submit-button"
                role="button"
                id="submitFormButton"
                href="../access/login.html"
                data-bs-target="../access/login.html"
              >
                Create Account
              </a>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}
