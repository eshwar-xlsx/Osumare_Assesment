import React from "react";
import "./Card.css";

const cards = [
  {
    id: 1,
    image: "./assets/box-1.png",
    title: "Call-to-Action Optimization",
    description:
      "Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates.",
  },
  {
    id: 2,
    image: "./assets/box-2.png",
    title: "Property Listing Enhancement",
    description:
      "Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates.",
  },
  {
    id: 3,
    image: "./assets/box-3.png",
    title: "Virtual Tours Integration",
    description:
      "Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates.",
  },
  {
    id: 4,
    image: "./assets/box-4.png",
    title: "Lead Management Solutions",
    description:
      "Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates.",
  },
];

const Card = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        {cards.map((card) => (
          <div className="col-md-6 col-lg-4 d-flex justify-content-center" key={card.id}>
            <div className="card shadow-lg">
              <div className="card-image">
                <img src={card.image} alt={card.title} />
              </div>
              <div className="card-content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
