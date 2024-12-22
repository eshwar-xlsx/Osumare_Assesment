import React from 'react';
import './Our_Services.css';

const services = [
  {
    id: 1,
    image: "./assets/card-1.png",
    header: "Automotive SEO",
    text: "Lorem ipsum dolor",
  },
  {
    id: 2,
    image: "./assets/card-2.png",
    header: "Business Growth",
    text: "Lorem ipsum dolor",
  },
  {
    id: 3,
    image: "./assets/card-3.png",
    header: "Digital Presence",
    text: "Lorem ipsum dolor",
  },
  {
    id: 4,
    image: "./assets/card-3.png",
    header: "Tailored Solutions",
    text: "Lorem ipsum dolor",
  },
  {
    id: 5,
    image: "./assets/card-3.png",
    header: "Strategic Planning",
    text: "Lorem ipsum dolor",
  },
  {
    id: 6,
    image: "./assets/card-3.png",
    header: "Digital Innovation",
    text: "Lorem ipsum dolor",
  },
  {
    id: 7,
    image: "./assets/card-3.png",
    header: "Tech Connections",
    text: "Lorem ipsum dolor",
  },
  {
    id: 8,
    image: "./assets/card-3.png",
    header: "Planning Growth",
    text: "Lorem ipsum dolor",
  },
];

const Our_Services_Card = () => {
  return (
    <div className="services-container">
      <div className="row g-4">
        {services.map((service) => (
          <div className="col-md-3" key={service.id}>
            <div className="service-card">
              <div className="card-icon">
                <img
                  src={service.image}
                  alt={`Service ${service.id}`}
                  className="icon-img"
                />
              </div>
              <h3 className="service-header">{service.header}</h3>
              <p className="service-text">{service.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Our_Services_Card;
