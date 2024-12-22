import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid d-flex justify-content-between align-items-center mb-5">
        <h1>
          <img src="./assets/logo.png" alt="Logo" />
        </h1>
        <button className="btn  btn-lg text-black" style={{border:"1px solid black", borderRadius:"20px"}}>Contact Us</button>
      </div>
    </>
  );
};

export default Navbar;
