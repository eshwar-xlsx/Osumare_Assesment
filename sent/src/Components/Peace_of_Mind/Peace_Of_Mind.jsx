import React from "react";

const Peace_Of_Mind = () => {
  return (
    <>
      <div
        className="container-fluid text-center mt-5"
        style={{
          background:
            "linear-gradient(135deg,rgb(180, 234, 241),rgb(255, 255, 255))",
        }}
      >
        <h1>Your Peace of Mind</h1>
        <h3 className="text-black-50">
        Through our conversion-focused strategies, we ensure that property <br/> seekers are not just visitors, but engaged prospects ready to make <br/> their next move in the real estate market

        </h3>
        <button
          className="text-center btn btn-primary mb-5 mt-5 fw-bold p-2 fs-5"
          style={{
            width: "100%", // Make it responsive by default
            maxWidth: "440px", // Restrict maximum width for larger screens
            borderRadius: "30px",
          }}
        >
          Get Started
        </button>
      </div>
    </>
  );
};

export default Peace_Of_Mind;
