import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "https://code.jquery.com/jquery-3.5.1.slim.min.js";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./RegularFooter.css";

// import axios from "axios";

// import swal from "sweetalert";

// import { useState } from "react";

export default function RegularFooter() {
  const handleClick = async (e) => {
    e.preventDefault();
    // function to hide footer on click of btn
    document.getElementById("collapse-container").style.display = "block";
  };

  return (
    <div>
      <footer className="new-footer text-center text-lg-start  text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 ">
          <div className="row w-75 mx-auto">
            <div className="col-md-4 align-middle">
              <div class="offset-1 m-1">
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of whats new and exciting from us.</p>
              </div>
            </div>
            <div className="col-md-6 align-middle">
              <form>
                <div class="d-flex w-100 gap-2">
                  <input
                    id="newsletter1"
                    type="text"
                    class="form-control"
                    placeholder="Email address"
                  />
                  <button class="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <button class="toggler-icon" onClick={handleClick()}>
          <span className="navbar-toggler-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </span>
        </button>

        <div id="collapse-container">
          <div className="container text-center text-md-start mt-1">
            <div className="row mt-1">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3 text-secondary"></i>Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#" className="text-reset">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="#" className="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="#" className="text-reset">
                    Vue
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#" className="text-reset">
                    Orders
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3 text-secondary"></i> New York,
                  NY 10012, US
                </p>
                <p>
                  <i className="fas fa-envelope me-3 text-secondary"></i>
                  info@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3 text-secondary"></i> + 01 234
                  567 88
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center p-4 cp">
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://dgovind.com/">
            GovindBOI King
          </a>
        </div>
      </footer>
    </div>
  );
}
