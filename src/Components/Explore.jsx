import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Vector_1 from "./explore Images/Happy woman sitting on rocket and waving colleagues 1.jpg";
import Vector_2 from "./explore Images/vector_2.jpg";
import Job from "./explore Images/job.jpeg";
import Working_Professional from './explore Images/Ellipse 1.png'
import Graduate from './Card Images/graduate.jpeg'
import Student from './Card Images/aspiring student.jpeg'
import Career from './Card Images/career.jpeg'
import "./Explore.css";

const Explore = () => {
  return (
    <div >
      <Container className="explore_section_container">
        <Row className="mb-5  UI/UX">
          <Col xxl={6} xl={6} lg={6} md={12} sm={12} className="mt-5 mb-5">

            <h4 className="mt-5 mb-3 explore_h4" style={{color:'black'}}>Explore UI/UX with</h4>
            <h3 className="designer">
              DesignDreamz Career <br /> Course
              <span className="now_avilable" > -Now Available Online!</span>
            </h3>

            <p className="explore_p mt-1">
              At DesignDreamz, learning UI/UX is super fun. We focus on real
              projects, so you learn by doing. We use cool design tools that big
              companies really like. This course gets you ready for awesome
              jobs. The best part? We'll help you find a job.{" "}
              <span className="explore_p_span">
                We're here until you get hired !
              </span>
            </p>
          </Col>

          <Col xxl={6} xl={6} lg={6} md={12} sm={12}  className="mt-5">
            <img
              src={Vector_1}
              alt="design dreamz"
              className="vector_1_image mt-5 p-2"
            />
          </Col>
        </Row>


        
        <div className="container">
  <div className="row mb-5">
    <div className="col-xxl-5 col-xl-5 col-lg-5  ">
      <img
        src={Vector_2}
        alt="design dreamz"
        className="vector_2_image p-2"
      />
    </div>

    <div className="col-xxl-6 col-xl-6 col-lg-6  order-first order-md-1  mt-5">
      <h4 className="mt-5 explore_h4_2 ui mb-3" style={{ color: 'black' }}>
        UI/UX Designers are in High Demand!
      </h4>

      <p className="explore_p_2 mt-3 ms-2">
        UI/UX jobs are ranked 6th on Glassdoor's list of best-paying entry-level
        jobs. With everything moving online, companies need UI/UX Designers.
        That's why there are more jobs, and the pay keeps going up every year.{" "}
        <span className="explore_p_span">
          Thinking about UI/UX as a job? It's a great choice!
        </span>
      </p>
    </div>
  </div>
</div>




       
      </Container>

      <Container className="">
        <Row>
          <Col xxl={12} xl={12} lg={12} md={12} sm={12}>
          <center>
      <div className="job_image_container">
<img src={Job} alt=""  className="job_image"/>
            </div>
            </center>
          </Col>
        </Row>
      
            <div className="careers mt-4">
    
      <Row className="justify-content-center Various_Positions">
  <center>
  <h2 className="  justify-content-center Various text-center mb-4 "  style={{color:'black'}}  >Various Positions in UI/UX Careers</h2>
  </center>
   


   
    <Col xxl={3} xl={3} lg={3} md={3} sm={12} className="mt-4  ">
<ul className="explore_list_ul " >
    <li className="mb-3 explore_list">User Experience (UX) Designer</li>
    <li  className="mb-3 explore_list">UX/UI Designer</li>
    <li  className="mb-3 explore_list">UX Writer</li>
    <li  className="mb-3 explore_list">UX Strategist</li>
    <li className="mb-3 explore_list">Product Manager</li>
</ul>
</Col>
<Col xxl={3} xl={3} lg={3} md={3} sm={12} className="mt-4 col-lg">
<ul className='explore_list_ul_2 '>
    <li  className="mb-3 explore_list">User Interface (UI) Designer</li>
    <li  className="mb-3 explore_list">UX Researcher</li>
    <li  className="mb-3 explore_list">UX Architect</li>
    <li  className="mb-3 explore_list">Product Designer</li>
    <li  className="mb-3 explore_list">Visual Designer</li>
    
</ul>

</Col>
</Row>
</div>

       
      </Container>



    </div>
  );
};

export default Explore;
