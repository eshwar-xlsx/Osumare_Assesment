import React from "react";
import "./Testimonial.css";

const Testimonials = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1 className="main-title">What Our Pharma Partner Says</h1>
          <h4 className="text-black-50">
            Driving Transformations, One Brand At A Time
          </h4>
        </div>

        <div className="text-center d-flex justify-content-center">
          <div
            className=" w-25 mt-5 d-flex flex-column align-items-center "
           
          >
            <div className="card-body d-flex flex-row">
              <img
                className="img-fluid mb-3"
                src="./assets/formal-photo.png"
                alt="Testimonial"
                style={{ width: "50%", borderRadius: "10px" }}
              />
              <div className="mt-4 ms-4">
                <div className="testimonial-author d-flex align-items-center">
                  <img
                    src="./assets/formal-photo.png"
                    alt="Author Icon"
                    className="author-icon ms-2"
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "90%",
                      marginTop: "30px",
                      marginLeft: "130px",
                    }}
                  />
                  <span className="author-name ms-2 h3">
                    Tabish Khan
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="text-end ms-0">
                      <img src="./assets/Symbol.png" alt="" />
                    </span>
                  </span>
                </div>
                <div>
                  <h3 className="mt-5 fs-3 fw-light">
                    Osumare's Expertise in pharma
                    <br />
                    marketing is unparalleled. Their
                    <br />
                    strategies helped us navigate
                    <br />
                    complex regulations while driving
                    <br />
                    remarkable growth.
                  </h3>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="d-flex justify-content-center align-items-center" style={{ marginBottom: "100px" }}>
                <button
                  className="btn text-primary btn-lg me-3"
                  style={{
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ height: "70px", width: "70px" }}
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-left-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                    />
                  </svg>
                </button>

                <button
                  className="btn text-primary btn-lg"
                  style={{
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ height: "70px", width: "70px" }}
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-right-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
