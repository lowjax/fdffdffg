import React from "react";
import SoarLogo from "../img/SoarLogo.svg"

export default function Login() {
  return (
    <div>
      <section className="login-clean">
        <form method="post">
          <h2 className="visually-hidden">Login Form</h2>
          <img src={SoarLogo}  heigh={40}/>
          <div className="illustration"></div>
          <div className="mb-3">
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <a href="#">
            <a
              className="btn btn-primary d-block w-100"
              role="button"
              id="logInButton"
              href="../user/index.html"
              data-bs-target="access/index.html"
            >
              Log In
            </a>
          </a>
          <a href="../user/createaccount.html">
            <a
              className="btn btn-primary d-block w-100"
              role="button"
              id="createAccount"
              href="../user/createaccount.html"
              data-bs-target="access/index.html"
            >
              Create Account
            </a>
          </a>
          <a href="../Admin/indexAD.html">
            <a
              className="btn btn-primary d-block w-100"
              role="button"
              id="logInButtonAD"
              href="../Admin/indexAD.html"
              data-bs-target="access/index.html"
            >
              Log In (ADMIN)
            </a>
          </a>
          <a href="../Admin/createaccountAD.html">
            <a
              className="btn btn-primary d-block w-100"
              role="button"
              id="createAccountAD"
              href="../Admin/createaccountAD.html"
              data-bs-target="access/index.html"
            >
              Create Account (ADMIN)
            </a>
          </a>
          <div className="mb-3"></div>
          <a className="forgot">Forgot your email or password?</a>
        </form>
      </section>
      <script src="../assets/bootstrap/js/bootstrap.min.js"></script>
    </div>
  );
}
