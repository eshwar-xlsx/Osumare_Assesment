import React from "react";
import './Conversions_1.css'; // Assuming the styles are placed in a separate CSS file

const Conversions_1 = () => {
  return (
   <>
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-12 mt-5">
          <h1 className="text-center fw-bold" style={{fontFamily:"Montserrat"}}> Driving Property Inquiries to Conversions</h1>
          <h4 className="text-center text-black-50" style={{fontFamily:"Open Sans"}}>Streamlined Strategies for Real Estate Success</h4>
        </div>

        <div className="col-md-6 mt-5 text-center">
      <img src="./assets/house-1.png" className="img-fluid " alt="" srcset="" />
        </div>

    <div className="col-md-6 mt-5">
      <h1 className="fw-bold">Optimized Path to Property Purchase</h1>
      <h4 className="fs-4" style={{fontWeight:"400px"}}>In the dynamic realm of real estate, the journey from a property inquiry to a successful conversion demands a well-crafted approach. At Osumare, we specialize in guiding potential buyers through this journey seamlessly, maximizing inquiries-turned-conversions with expert strategies.</h4>

      <div className="mt-5">
            <button className="btn btn-primary btn-lg w-50 " style={{borderRadius:"40px"}}>
              Get Started
            </button>
          </div>

    </div>

      </div>
    </div>
   </>
  );
};

export default Conversions_1;
