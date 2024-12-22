import React from "react";
import "./form.css";

const Form = () => {
  return (
    <div className="form-maincontainer">
      <div className="row text-center">
        <div className="col-md-12">
          <h1 className="form-title">
            Connect with Our Digital Marketing Expert
          </h1>
          <h4 className="form-description">
            Reach out for tailored strategies and results-driven solutions.
            <br />
            Let's elevate your online presence together.
          </h4>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="row mt-4">
          <div className="col-md-12">
            <div className="card form-card">
              <div className="card-body">
                <div className="row">
                  {/* Left Column */}
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group mb-4">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="form-group mb-4">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="form-group mb-4">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                  {/* Right Column */}
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group mb-4">
                      <label htmlFor="message">Message</label>
                      <textarea
                        className="form-control"
                        id="message"
                        rows="8"
                        placeholder="Enter your message"
                      ></textarea>
                    </div>
                  </div>
                  {/* Submit Button */}
                  <div className="col-md-12 d-flex justify-content-center mt-3">
                    <button
                      className="btn btn-primary fw-bold w-50 btn-lg"
                      style={{
                        borderRadius: "50px",
                      }}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
