import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Vector_1 from './why Images/Vector 1 (1).png'; 
import Vector_2 from './why Images/Mask group.png'; 
import Vector_3 from './why Images/4141223 1.png'; 
import Vector_4 from './why Images/Mask group (1).png'; 
import Bg_icon from './why Images/Asset 1.png'
import './Why.css';
import Design from './Design_Cards/Design';

const Why = () => {
  return (
    <div className='why_bg'>
      <Container className=' px-4 px-lg-0 mt-5'>
        <p className='why_h1 mb-2'>Why DesignDreamz? </p>
        <p className='mt-3 mb-5 why_p_' style={{color:'black',}}>Your Path to Mastery: Our courses are crafted to meet your requirements, whether you're a beginner or aiming to advance.</p>
      
        <Row>
          {/* Card_1 */}
          {/* <Col lg={6} xl={6} xxl={6} md={12} sm={12}>
            <div className="cross-card mb-5 ">
              <img src={Vector_1} className="cross-card-img" alt=""/>
              <div className="cross-over-lay p-4">
                <div className="cross-over-lay-text">
                  <h5 className="fw-bold mb-4 why_card_h5" style={{color:'black'}}>Simple for Beginners</h5>
                  <p className="mb-0" style={{color:'black'}}>
                    If you're just starting, fear not. Our courses are crafted to make learning effortless for beginners.
                  </p>
                </div>
              </div>
            </div>
          </Col> */}

          {/* Card_2 */}
          {/* <Col lg={6} xl={6} xxl={6} md={12} sm={12}>
            <div className="cross-card mb-5">
              <img src={Vector_2} className="cross-card-img" alt=""/>
              <div className="cross-over-lay p-4">
                <div className="cross-over-lay-text">
                  <h5 className="fw-bold mb-4 why_card_h5" style={{color:'black'}}>Boost Your Skills</h5>
                  <p className="mb-0" style={{color:'black'}}>
                  Want to get better? Our plans are made to fit your goals and enhance your skills.
                  </p>
                </div>
              </div>
            </div>
          </Col> */}

          {/* Card_3 */}
          {/* <Col lg={6} xl={6} xxl={6} md={12} sm={12}>
            <div className="cross-card mb-5">
              <img src={Vector_3} className="cross-card-img" alt=""/>
              <div className="cross-over-lay p-4">
                <div className="cross-over-lay-text">
                  <h5 className="fw-bold mb-4 why_card_h5" style={{color:'black'}}>Personalized Journey</h5>
                  <p className="mb-0" style={{color:'black'}}>
                  No matter what you're aiming for, we've got the perfect plan to make your DesignDreamz journey special.
                  </p>
                </div>
              </div>
            </div>
          </Col> */}

          {/* Card_4 */}
          {/* <Col lg={6} xl={6} xxl={6} md={12} sm={12} className='placement_assurance_col'>
            <div className="cross-card mb-5 ">
              <img src={Vector_4} className="cross-card-img cross-card-img_4" alt=""/>
              <div className="cross-over-lay p-4">
                <div className="cross-over-lay-text">
                  <h5 className="fw-bold mb-4 placement_assurance why_card_h5" style={{color:'black'}} >Placement Assurance</h5>
                  <p className="mb-0 placement_assurance_p" style={{color:'black'}}>
                  Worried about where you'll land after completing the course? Fear not! We provide dedicated 
                  placement assistance to guide you towards your dream career.
                  </p>
                </div>
              </div>
            </div>
          </Col> */}

          <Design/>
        </Row>
        <div className="bg_icon">
          <img src={ Bg_icon} alt="" className='why_bg_icon' />
        </div>
      </Container>
    </div>
  )
}

export default Why;
