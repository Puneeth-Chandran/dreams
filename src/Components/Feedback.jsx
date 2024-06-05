import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from './Freedback Images/feedback.png'
import './Feedback.css'
import Trainer_slider from './Trainer_slider';

const Feedback = () => {
  return (
    <div className='feedback ' id='testimonial'>
      <Container fluid className=''>
        <Row>
            <Col xxl={5} xl={5} lg={5} md={12} sm={12}>

<img src={Image} alt="dreams design" className='feedback_Image' />
            </Col>

            <Col xxl={7} xl={7} lg={7} md={12} sm={12}>
<p className='feeback_p '>Feedback</p>

<h3 className='what_h1'style={{color:'black'}} >What People Think <br /> <span className='feedback_h1 mb-3'>About Us </span></h3>
              
<div className="trainer_slider_container mt-5">
<Trainer_slider/>
</div>
           
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Feedback
