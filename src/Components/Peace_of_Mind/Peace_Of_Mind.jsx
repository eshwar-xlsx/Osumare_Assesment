import React from "react";

const Peace_Of_Mind = () => {
  return (
    <>
      <div
        className="container-fluid text-center mt-5"
        style={{
          background:
            "linear-gradient(135deg,rgb(194, 237, 242),rgb(248, 217, 217))",
        }}
      >
        <h1>Your Peace of Mind</h1>
        <h3 className="text-black-50">
        Through our conversion-focused strategies, we ensure that property <br/> seekers are not just visitors, but engaged prospects ready to make <br/> their next move in the real estate market

        </h3>
        <div className="col-md-12 d-flex justify-content-center mt-3">
            <button
              className="btn btn-primary fw-bold w-50 btn-lg mb-5"
              style={{
                borderRadius: "50px",
              }}
            >
              Get Started
            </button>
          </div>
      </div>
    </>
  );
};

export default Peace_Of_Mind;
