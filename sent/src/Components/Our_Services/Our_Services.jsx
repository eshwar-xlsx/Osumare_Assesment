import React from "react";
import Our_Services_Card from "./Our_Services_Card";
import "./Our_Services.css";

const Our_Services = () => {
  return (
    <div className="container-fluid">
      <div className="row mt-5">
        <div className="col-md-12">
          <h1 className="text-center" style={{fontFamily:"Montserrat", fontWeight:"bold"}}>Our Services Offering</h1>
          <h3 className="text-center">
            Strategies that Drive Property Market Excellence
          </h3>
        </div>
        <div className="col-md-12 mt-5">
          <Our_Services_Card />
        </div>
        <div className="col-md-12 d-flex justify-content-center">
          <button
            className="btn btn-primary fw-bold p-2 fs-5 button-single"
            style={{
              borderRadius: "30px",
              width: "25%" /* Default width for larger screens */,
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Our_Services;
