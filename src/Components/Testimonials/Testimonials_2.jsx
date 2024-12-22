import React from "react";

const Testimonials_2 = () => {
  return (
    <>
      <div className="container ">
        <div className="row shadow-lg ">
          <div className="col-md-12 text-center mb-5">
            <h1 className="text-center mt-5 fw-bold" style={{fontFamily:"Montessart"}}>What Our Pharma Partner Says</h1>
            <h3 className="text-black-50"> Hear from Our Partners</h3>
          </div>

          {/* Testimonial Section */}
          {/* Image on the Left */}
          <div className="col-md-6 text-center">
            <img
              className="img-fluid "
              style={{
                borderRadius: "50px",
              }}
              src="./assets/formal-photo.png"
              alt="Tabish Khan"
            />
          </div>

          {/* Content on the Right */}
          <div className="col-md-6 mt-4">
            <div className="d-flex align-items-center mb-3">
              <img
                src="./assets/formal-photo.png"
                style={{ height: "90px", width: "100px", borderRadius: "50px" }}
                alt=""
              />
              <h3 className="text-black mb-0 ms-3">Tabish Khan</h3>
              <i
                className="fas fa-quote-right text-primary ms-5 fs-1"
                style={{ fontSize: "34px" }}
              ></i>
            </div>
            <p className="mb-0 h3 fs-2 mt-5">
              <i className="fas fa-quote-left"></i> Osumare's expertise in
              pharma marketing is unparalleled. Their strategies helped us
              navigate complex regulations while driving remarkable growth.{" "}
              <i className="fas fa-quote-right"></i>
            </p>
          </div>
        </div>

        <div className="text-center mt-4">
          <button
            className="btn  btn-lg me-3 px-4 py-3"
            style={{
              fontSize: "24px",
              width: "80px",
              height: "80px",
              borderRadius: "50%",
            }}
          >
            <i className="bi text-primary bi-arrow-left-circle fs-1"></i>
          </button>
          <button
            className="btn  btn-lg px-4 py-3"
            style={{
              fontSize: "24px",
              width: "80px",
              height: "80px",
              borderRadius: "50%",
            }}
          >
            <i className="bi text-primary bi-arrow-right-circle fs-1"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Testimonials_2;
