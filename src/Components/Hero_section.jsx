import React from "react";
import Rating from "@mui/material/Rating";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "./Hero Section image/logo.png";
import { FaSquareWhatsapp } from "react-icons/fa6";
import Trainers from "./Hero Section image/Trainers.png";
import Vector_images from "./Hero Section image/vactor Images.png";
import Circle from './Hero Section image/old 3.png'
import "./Hero_section.css";
const Hero_section = () => {
  const [value, setValue] = React.useState(5);
  return (
    <div  className="hero_section_all" id="home">
      <div className="break">
     <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      </div>
      <div className="hero_section_banner px-4 px-lg-0 "  >

      <div className="circle">
        <img src={Circle} alt="" className="circle_image" />
      </div>
      
        <Container className="hero_section_container_whatsup">
          
          <Row>
            <Col xxl={12} xl={12} lg={12} md={12} sm={12} className="">
              <div className="star_rated_container mt-4">
                <p className="rating_text_p">
                 
                  <span className="rating_text me-1">Rated 4.9 out of 5</span>
                  <Rating name="read-only" value={value} readOnly />
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xxl={8} xl={8} lg={8} md={12} sm={12} className="mt-3">
              <div className="enroll mt-4">
                <h1 className="enroll_h3">
                  Enroll Now for 
                  
                     World-Class <br /> Online 
                     <span className="design ms-1">
                       Design
                    </span>{" "}
                    <span className="education">
                    Education
                    </span>
                    
                
                </h1>
                <div className="admission mt-5">
                  <p className="admission_h4">
                    - Admission Open for March 2024!
                  </p>
                </div>

                <div className="check mt-5 " >
                  <p className="check_para_container">
                    <img
                      src={Trainers}
                      alt="design dreams"
                      className="trainer_images"
                    />
                    <span className="check_btn_span ms-2">
                      {" "}
                   <a href="#enroll" style={{color:'white',textDecoration:'none'}}>- Check Our Courses</a>   
                    </span>
                  </p>
                </div>
              </div>
            </Col>

            <Col xxl={4} xl={4} lg={4} md={12} sm={12} className="mt-3">
              <div className="vector_image_container">
                <img src={Vector_images} alt="" className="Vector_images" />
              </div>
              <Row>
                <Col></Col>
              </Row>
            </Col>
          </Row>
          <div className="whatsup_container">
     
         
          </div>
        </Container>
        <br />
        <br />
        <br />
      </div>

      <div >
      
      </div>
    </div>
  );
};

export default Hero_section;
