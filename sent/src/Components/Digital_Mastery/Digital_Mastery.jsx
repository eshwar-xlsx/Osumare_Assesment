import React from "react";

const Digital_Mastery = () => {
  return (
    <>
      <div className="container-fluid d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <div className="row align-items-start text-center">
          <div className="col-12">
            <h1 className="text-dark mt-3 mb-4 h1 mb-5" style={{fontFamily:"Montserrat", fontWeight:"bold"}}>
              Real Estate Focused Digital Mastery
            </h1>
          </div>

          <div className="d-flex align-items-start justify-content-center">
            {/* Image Section */}
            <div className="col-12 col-md-6 mb-4 d-flex align-items-start justify-content-center">
              <img
                src="./assets/dm_image.jpg"
                className="img-fluid"
                alt="Digital Mastery"
                style={{ maxWidth: "90%", borderRadius: "15px" }}
              />
            </div>

            {/* Content Section */}
            <div className="col-12 col-md-6 text-md-start d-flex flex-column align-items-start">
              <h2 className="fs-4 fs-md-3 mb-3">
                Unlock the Potential of Digital Real Estate Excellence
              </h2>
              <p className="fs-6 fs-md-5 mb-4">
                At Osumare, we understand that the real estate landscape <br />
                demands a digital presence that aligns with the intricacies of <br />
                property marketing. Our range of specialized services is <br />
                meticulously designed to catapult your brand's success in the <br />
                ever-evolving digital property market.
              </p>
              <button
                className="btn btn-primary fw-bold px-4 py-2 fs-6 fs-md-5"
                style={{ borderRadius: "30px" }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Digital_Mastery;
