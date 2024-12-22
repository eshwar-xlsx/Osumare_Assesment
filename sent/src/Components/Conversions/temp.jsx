import React from 'react'

const Conversions_1 = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 style={{ fontFamily: "Montserrat", fontWeight: "bold" }}> Driving Property Inquiries to Conversions</h1>
            <h4 className='text-black-50'>Streamlined Strategies for Real Estate Success</h4>
          </div>

          <div className="col-md-12">
            <div className="row">
              {/* Image Section */}
              <div className="col-md-5 border border-dark text-center">
                <img
                  src="./assets/house-1.png"
                  alt="House"
                  className="img-fluid"
                  style={{ maxWidth: "100%", borderRadius: "8px" }}
                />
              </div>

              {/* Text Section */}
              <div className="col-md-7 border border-primary d-flex flex-column justify-content-center">
                <h2 style={{ fontFamily: "Montserrat", fontWeight: "bold" }}>
                  Optimized Path to Property Purchase
                </h2>
                <h4>In the dynamic realm of real estate, the journey from a property inquiry to a successful conversion demands a well-crafted approach. At Osumare, we specialize in guiding potential buyers through this journey seamlessly, maximizing inquiries-turned-conversions with expert strategies.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Conversions_1;
