import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Design.css'

const Design = () => {
  return (
    <div>
      <Container>
        <Row>
            <Col xxl={6} xl={6} lg={6} md={12} sm={12} className='mb-4' >
                <div className="design_card_container">
                    <div className="design_card_content">
                    <br />
                        <h4 className='design_h3 p-2'>Simple for Beginners</h4>
                        <p className='design_p mt-1 p-2'>If you're just starting, fear not. Our courses are crafted to make learning effortless for beginners.</p>
                    </div>
                </div>
            </Col>


            <Col xxl={6} xl={6} lg={6} md={12} sm={12} className='mb-4'>
                <div className="design_card_container2">
              
                    <div className="design_card_content2">
                    <br />
                        <h4 className='design_h3_2 p-2'>Boost Your Skills</h4>
                        <p className='design_p_2 mt-1 p-2'>Want to get better? Our plans are made to fit your goals and enhance your skills.</p>
                    </div>
                </div>
            </Col>


            <Col xxl={6} xl={6} lg={6} md={12} sm={12} className='mb-4'>
                <div className="design_card_container3">
                    <div className="design_card_content3">
                        <br />
                        <h4 className='design_h3_3 p-1 '>Personalized Journey</h4>
                        <p className='design_p_3 mt-1 p-2'>
                        No matter what you're aiming for, we've got the perfect plan to make your DesignDreamz journey special.
</p>
                    </div>
                </div>
            </Col>


            <Col xxl={6} xl={6} lg={6} md={12} sm={12} className='mb-4' >
                <div className="design_card_container4">
                    
                    <div className="design_card_content4">
                
                        <h4 className='design_h3_4 p-2'>Placement Assurance</h4>
                        <p className='design_p_4 mt-1 p-2'>Worried about where you'll land after completing the course? Fear not! We provide dedicated placement assistance to guide you towards your dream career.</p>
                    </div>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Design
