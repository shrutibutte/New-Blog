// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

import "https://code.jquery.com/jquery-3.5.1.slim.min.js";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./RegularHeader.css";
import logo from "./assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

export default function RegularHeader() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} className="navbar-logo" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <FontAwesomeIcon icon="fa-solid fa-bars" />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      CodeChef Solutions
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Data Structures
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Algorithms
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Internships and Jobs Updates
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Interview Review
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <div className="d-flex">
              <button className="btn btn-warning" type="submit">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
