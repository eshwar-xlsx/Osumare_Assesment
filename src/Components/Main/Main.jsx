import React from 'react';
import Navbar from '../Navbar/Navbar';
import We_Need_Marketing from '../We_Need_Marketing/We_Need_Marketing';
import Digital_Mastery from '../Digital_Mastery/Digital_Mastery';
import Our_Services from '../Our_Services/Our_Services';
import Digital_Landscape from '../Digital_Landscape/Digital_Landscape';
import Conversions_1 from '../Conversions/Conversions_1';
import Conversions_2 from '../Conversions/Conversions_2';
import Peace_Of_Mind from '../Peace_of_Mind/Peace_Of_Mind';
import Testimonial from '../Testimonials/Testimonials';
import Form from '../form/Form';
import Faq from '../faq/Faq';
import Footer from '../footer/Footer';
import './Main.css'; 
import Testimonials_2 from '../Testimonials/Testimonials_2';
import Footer2 from '../footer/Footer2';


const Main = () => {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <We_Need_Marketing />
        <Digital_Mastery/>
        <Our_Services />
        <Digital_Landscape />
        <Conversions_1 />
        <Conversions_2 />
        <Peace_Of_Mind />
        <Testimonials_2/>
        <Faq />
        <Form />
        <Footer2/>
      </div>
      
    </>
  );
};

export default Main;
