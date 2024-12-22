import React from 'react';
import Card from './Card';

const Conversions_2 = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex align-items-center">
          <div className="col-md-12">
            <h1 className="text-center fw-bold text-dark mt-5 mb-5">
             Driving Inquries to Conversions
            </h1>
            
            <div className="col-md-12 d-flex justify-content-center align-items-center">
              <Card />
            </div>

            <p className='h1 text-center fw-bolder fs-2 mt-5 mb-5'>Our Expertise in Action</p>

            <div className="col-md-12 d-flex justify-content-center  align-items-center">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Conversions_2;
