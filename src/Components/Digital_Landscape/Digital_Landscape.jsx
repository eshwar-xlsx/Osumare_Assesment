import React from 'react';
import Digital_Landscape_Card from './Digital_Landscape_Card';

const Digital_Landscape = () => {
  return (
    <>
      <div className="container-fluid  p-4">
        <div className="row">
          <div className="col-md-12 mt-5 ">
            <h1 className='text-center'>Navigating Real Estate's Digital Landscape</h1>
            <h3 className='text-black-50 text-center'>Insights for Real Estate Marketing Advantage</h3>
          </div>
          <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-start align-items-start  mt-4">
            <Digital_Landscape_Card />
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img className='img-fluid h-75 w-100' src="./assets/we_are_expert.png" alt="We are Expert" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Digital_Landscape;
