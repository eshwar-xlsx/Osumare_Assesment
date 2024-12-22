import React from "react";
import "./Footer2.css";
const Footer2 = () => {
  return (
    <>
      <div
        className="container"
        style={{
          background:
            "linear-gradient(135deg, rgb(244, 247, 247), rgb(192, 237, 243))",padding:"10px"
        }}
      >
       
        <div className="row">
          <div className="col-md-12 mt-5"></div>

          <div className="col-md-4">
            <img src="./assets/logo.png" alt="" />
            <h5 className="mt-5">
              The best digital marketing agency in Pune with a proven track
              record of consistently delivering quality service.
            </h5>
            <h3 className="fw-bolder mt-4">ADDRESS</h3>
            <h5>
              Survey No. 43, Pathare <br /> Thube Nagar, Nagar <br /> Road,
              Kharadi, Pune-14, <br /> Maharastra, India.
            </h5>

            <h3 className="fw-bolder mt-4">Contact</h3>
            <i class="bi bi-envelope-fill fs-4 me-2"></i>
            <span className="fs-4">hello@osumare.com</span>
            <br></br>

            <i class="bi bi-telephone-fill fs-4 me-2"></i>
            <span className="fs-4">+91 8459 8762 26</span>
          </div>
          <div className="col-md-4 text-center ">
            <h2 className="fw-bold mb-4">MENU</h2>
            <div
              className="fs-4 text-black"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <div>Home</div>
              <div>About</div>
              <div>Services</div>
              <div>Blogs</div>
              <div>Carrier</div>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <h2 className="fw-bold mb-4">Social</h2>
            <div
              className="social-icons-container"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <i className="bi bi-whatsapp fs-2"></i>
                <i className="bi bi-twitter fs-2"></i>
                <i className="bi bi-facebook fs-2"></i>
                <i className="bi bi-youtube fs-2"></i>
              </div>
              <div
                style={{
                  display:"flex",
                  
                  width: "100%",
                  marginTop: "10px",
                }}
              >
                <i className="bi bi-instagram fs-2"></i>
                <i className="bi bi-linkedin fs-2 "  style={{marginLeft:"21%"}}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer2;
