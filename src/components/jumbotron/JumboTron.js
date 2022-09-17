import React from "react";
import "./JumboTron.css";

export default function JumboTron() {
  return (
    <div className="box mx-auto">
      <div className="jumbotron">
        <h1 className="display-5">Welcome to CoderCEO</h1>
        <div className="row">
          <div className="col-md-8">
            <p className="lead">
              Confused with your IT career and don't know where to start? We
              have got you covered. Browse our blogs and courses to find out the
              best for you. Its free! Coder CEO is a free platform to teach
              basics and those coding techniques to people in short time which
              took me ages to learn.
            </p>
          </div>
          <div className="col-md-4 side-box-jumbo">
            <p>
              Learn to code with our beginner-friendly tutorials and examples.
              Read tutorials and examples, write programs, run code and learn to
              code.
            </p>

            <p className="lead">
              <a className="btn btn-info" href="#" role="button">
                Watch Videos
              </a>
              <a className="btn btn-success" href="#" role="button">
                Explore Blogs
              </a>
            </p>
          </div>
        </div>

        <hr className="my-4" />
      </div>
    </div>
  );
}
