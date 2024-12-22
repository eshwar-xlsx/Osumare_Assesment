import React from "react";
import './Conversions_1.css'; // Assuming the styles are placed in a separate CSS file

const Conversions_1 = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 mb-5 text-center">
          <h1 className="text-dark mt-5">Driving Property Enquiries to Conversions</h1>
          <h3 className="mt-3 text-black-50">Streamlined Strategies for Real Estate Success</h3>
        </div>
        <div className="col-md-5 d-flex justify-content-center align-items-center">
          <img
            src="./assets/house-1.png"
            className="img-fluid mt-5"
            alt="House"
          />
        </div>
        <div className="col-md-7 d-flex flex-column justify-content-center align-items-start mt-5">
          <h2 className="mb-3">Optimized Path to Property Purchase!</h2>
          <p style={{ fontSize: "20px" }}>
            In the dynamic realm of real estate, the journey from a property inquiry to a successful conversion demands a well-crafted approach. At Osumare, we specialize in guiding potential buyers through this journey seamlessly, maximizing inquiries-turned-conversions with expert strategies.
          </p>
          <button
            className="btn btn-primary mb-5 mt-3 fw-bold p-2 fs-5"
            style={{ width: "100%", maxWidth: "440px", borderRadius: "30px" }}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Conversions_1;
