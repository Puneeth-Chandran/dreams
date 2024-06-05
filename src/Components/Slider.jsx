import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Slider_image from './Slider Images/Vector.png'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Slider.css';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{}}
      onClick={onClick}
    >
      <ArrowForwardIosIcon className="arrow_color" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ }}
      onClick={onClick}
    >
      <ArrowBackIosIcon className="arrow_color" />
    </div>
  );
}


export default function SimpleSlider() {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [slidesToScroll,setSlidesToScroll]=useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1); // Adjust this value according to your requirements
      } else {
        setSlidesToShow(3); // Adjust this value according to your requirements
      }
    };

    window.addEventListener("resize", handleResize);

    // Initial call to set slidesToShow based on current window width
    handleResize();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  useEffect(() => {
    const handlescroll = () => {
      if (window.innerWidth <= 768) {
        setSlidesToScroll(1); // Adjust this value according to your requirements
      } else {
        setSlidesToScroll(2); // Adjust this value according to your requirements
      }
    };

    window.addEventListener("resize", handlescroll);

    // Initial call to set slidesToShow based on current window width
    handlescroll();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handlescroll);
    };
  }, []);



  var settings = {
    dots:false,
    infinite: true,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll, // You may want to change this as well
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <Slider {...settings} className="mt-5">
      <div className="slide p-2 ">
        <div className="learning_card">
          <br />
        
<center>
  <h5 className="mb-4 mt-4 Module" style={{color:'black'}}>Module 1:  Mobile App UX Design</h5>
  </center>
  <ul>
    <li className="mb-2  learning_card_p">Understanding UX</li>
    <li  className="mb-2 learning_card_p">Competitor Analysis</li>
    <li  className="mb-2 learning_card_p">Exploring User Research</li>
    <li  className="mb-2 learning_card_p">Crafting User Personas, Empathy Mapping, and Customer Journey Maps</li>
    <li  className="mb-2 learning_card_p">Building Information Architecture</li>
    <li  className="mb-2 learning_card_p">Creating User Flow Charts & Low Fidelity Wireframes</li>
    <li  className="mb-2 learning_card_p">Real-world Case Study on Mobile App UX Process</li>
    <li  className="mb-2 learning_card_p">Insights into Interview Questions and Answers</li>
</ul>


        </div>
        
      </div>



      <div className="slide p-2">
        <div className="learning_card">
        <br />
         
<center>
  <h5 className="mb-3 mt-4 Module" style={{color:'black'}}>Module 2:  Mobile App UI Design</h5>
  
  </center>
  <ul>
    <li className="mb-2 learning_card_p learning_card_p_2">Exploring Color & Typography</li>
    <li className="mb-2 learning_card_p learning_card_p_2">Crafting a Mobile App Style Guide</li>
    <li className="mb-2 learning_card_p learning_card_p_2">Designing Mobile App Icons & Banners</li>
    <li className="mb-2 learning_card_p learning_card_p_2">Android Mobile App MF & HF Layout</li>
    <li className="mb-2 learning_card_p learning_card_p_2">iOS Mobile App MF & HF Layout</li>
    <li className="mb-2 learning_card_p learning_card_p_2">Building a Mobile App Prototype</li>
    <li className="mb-2 learning_card_p learning_card_p_2">Case Study on Mobile App UI Process</li>
    <li className="mb-3 learning_card_p learning_card_p_2">Insights into Interview Questions and Answers</li>
</ul>
<div>

</div>


        </div>
      </div>





      <div className="slide p-2">
        <div className="learning_card">
        <br />
       
<center>
  <h5 className="mb-3 mt-4 Module" style={{color:'black'}}>Module 3:  Website Redesign</h5>
  </center>

  <ul>
    <li  className="mb-2 learning_card_p">Evaluating Heuristics for Old Websites</li>
    <li  className="mb-2 learning_card_p">UX Process for Website Redesign</li>
    <li  className="mb-2 learning_card_p">Creating LF Wireframes for Responsive Websites</li>
    <li  className="mb-2 learning_card_p">Crafting a Style Guide, Logo, and Banners for Responsive Websites</li>
    <li  className="mb-2 learning_card_p">Desktop Home Page MF & HF Layout</li>
    <li  className="mb-2 learning_card_p">Tab & Mobile Home Page MF & HF Layout</li>
    <li  className="mb-2 learning_card_p">A/B Testing for Redesigned Websites</li>
    <li  className="mb-2 learning_card_p">Case Study on Redesigning Websites</li>
    <li  className="mb-2 learning_card_p">Insights into Interview Questions and Answers</li>
</ul>


        </div>
      </div>


      <div className="slide p-2">
        <div className="learning_card">
        <br />
       
<center>
  <h5 className="mb-3 mt-4 Module" style={{color:'black'}}>Module 4:  Advanced UX & Latest Trends</h5>
  </center>

  <ul>
    <li  className="mb-2 learning_card_p learning_card_p_4">UX Laws & Usability Principles</li>
    <li  className="mb-2 learning_card_p learning_card_p_4">Latest Trends: Bento Design</li>
    <li  className="mb-2 learning_card_p learning_card_p_4"> Gradients in UI Design</li>
    <li  className="mb-2 learning_card_p learning_card_p_4">Future-Ready: Top 5 UI/UX Technologies for Success</li>
    <li  className="mb-2 learning_card_p learning_card_p_4">Difference Between UX,UI Designer and Web Designer</li>
    <li  className="mb-2 learning_card_p learning_card_p_4"> Advanced UI/UX Principles</li>
    <li  className="mb-2 learning_card_p learning_card_p_4">Design Thinking Strategies</li>
    <li  className="mb-2 learning_card_p learning_card_p_4">Neon UI Design</li>
   <br />
</ul>


        </div>
      </div>


      <div className="slide p-2">
        <div className="learning_card">
        <br />
       
<center>
  <h5 className="mb-3 mt-4 Module" style={{color:'black'}}>Module 5:  Advanced Tools</h5>
  </center>

  <ul>
    <li  className="mb-2 learning_card_p learning_card_p_5">Figma</li>
    <li  className="mb-2 learning_card_p learning_card_p_5">fig-jam</li>
    <li  className="mb-2 learning_card_p learning_card_p_5">Miro</li>
    <li  className="mb-2 learning_card_p learning_card_p_5">Chat GPT</li>
    <li  className="mb-2 learning_card_p learning_card_p_5">Zeplin</li>
  
   <br />
   <br />
   <br />
   <br />
   <br />
   <br />
   <br />
   <br />
   <br />
   <br />
   <br />
   <br />
   <br />
   <br />
   <br />
</ul>


        </div>
      </div>




    </Slider>
  );
}
