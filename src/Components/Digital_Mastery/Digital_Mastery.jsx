import React from "react";

const Digital_Mastery = () => {
  return (
    <div className="container ">
      <div className="row mt-5">
        <div className="col-md-12">
          <h1 className="text-center fw-bold">Real Estate Digital Mastery</h1>
          <h4 className="text-center text-black-50 fs-2">
            Transforming Business Through Digital Excellence
          </h4>
        </div>

        <div className="col-md-6 mt-2 text-center">
          <img
            className="mt-5 mb-5 img-fluid "
            src="./assets/dm_image.jpg"
            alt=""
            srcset=""
          />
        </div>
        <div className="col-md-6 mt-5 mb-5 ">
          <h1 style={{ fontFamily: "Montserrat", fontWeight: "bold" }}>
            Unlock the Potential of Digital Real Estate Excellence
          </h1>
          <h4 style={{ fontFamily: "Open Sans" }}>
            At Osumare, we understand that the real estate landscape demands a
            digital presence that aligns with the intricacies of property
            marketing. Our range of specialized services is meticulously
            designed to catapult your brand's success in the ever-evolving
            digital property market.
          </h4>

          <div className="mt-5">
            <button className="btn btn-primary btn-lg w-50 " style={{borderRadius:"40px"}}>
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Digital_Mastery;
