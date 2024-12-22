import React from "react";

const services = [
  {
    id: 1,
    image: "./assets/card-1.png",
    title: "Market Trend Analysis",
    subtitle: "Predictive",
  },
  {
    id: 2,
    image: "./assets/card-2.png",
    title: "Property Valuation",
    subtitle: "Analytical",
  },
  {
    id: 3,
    image: "./assets/card-3.png",
    title: "Real Estate Forecasting",
    subtitle: "Strategic",
  },
  {
    id: 4,
    image: "./assets/card-4.png",
    title: "Investment Strategy ",
    subtitle: "Comprehensive",
  },
  {
    id: 5,
    image: "./assets/card-5.png",
    title: "Digital Marketing",
    subtitle: "Innovative",
  },
];

const Digital_Landscape_Card = () => {
  return (
    <div className=" py-4">
      <div className="row justify-content-center">
        {services.map((service) => (
          <div className="col-12 col-md-10 mb-4" key={service.id}>
            <div className="card shadow-lg w-75">
              <div className="card-body d-flex ">
                {/* Image on the left side */}
                <div
                  style={{
                    backgroundColor: "#f8f9fa",
                    borderRadius: "50%",
                    height: "60px",
                    width: "60px",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "start",
                    marginRight: "15px",
                  }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{ height: "40px", width: "40px" }}
                  />
                </div>
                {/* Text on the right side */}
                <div>
                  <h5 className="mb-1 ">{service.title}</h5>
                  <p className="mb-0 text-secondary">{service.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Digital_Landscape_Card;
