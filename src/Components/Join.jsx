import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Image_1 from './explore Images/Ellipse 1.png'
import Image_2 from './explore Images/Ellipse 2.png'
import Image_3 from './explore Images/Ellipse 3.png'
import Image_4 from './explore Images/Ellipse 4.png'
import './Join.css'

const Join = () => {
  return (
    <div id='course_2'>
      <br />
      <br />
   
    <Container className='who_can_join_us'>
        <center>
        <h1 style={{color:'black'}} className='join_us mb-5'>Who Can Join our UI/UX Course ?</h1>
        </center>
        
      <Row>
        <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
          <div className="custom-container mb-5 px-4 px-lg-0 pt-5">
            <div className="custom-row">
              <div className="custom-col-lg-3 d-flex justify-content-center p-2 mt-5 mt-lg-0">
                <div className="custom-top-img-box ">
                  <div className="custom-img-bx-round">
                    <img src={Image_1} className="custom-round-top-img" alt=""/>
                  </div>
                  <div className="custom-top-card p-3">
                    <h5 className="text-center mb-3 join_us_type" style={{color:'black'}}>Working Professionals</h5>
                    <p className="mb-0 join_p text-center col-10" style={{color:'black'}}>
                      If you're already working and looking to step into UI/UX, this course is designed for you
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>

        <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
          <div className="custom-container mb-5 px-4 px-lg-0 pt-5">
            <div className="custom-row">
              <div className="custom-col-lg-3 d-flex justify-content-center p-2 mt-5 mt-lg-0">
                <div className="custom-top-img-box ">
                  <div className="custom-img-bx-round">
                    <img src={Image_2} className="custom-round-top-img" alt=""/>
                  </div>
                  <div className="custom-top-card p-3">
                    <h5 className="text-center mb-3 join_us_type" style={{color:'black'}}>Recent Graduates</h5>
                    <p className="mb-0 join_p text-center col-10" style={{color:'black'}}>
                    Graduated and aiming for your first job? Learn UI/UX to boost your career
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>

        <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
          <div className="custom-container mb-5 px-4 px-lg-0 pt-5">
            <div className="custom-row">
              <div className="custom-col-lg-3 d-flex justify-content-center p-2 mt-5 mt-lg-0">
                <div className="custom-top-img-box ">
                  <div className="custom-img-bx-round">
                    <img src={Image_3} className="custom-round-top-img" alt=""/>
                  </div>
                  <div className="custom-top-card p-3">
                    <h5 className="text-center mb-3 join_us_type" style={{color:'black'}}>Aspiring Students</h5>
                    <p className="mb-0 join_p text-center col-10" style={{color:'black'}}>
                    If you're a student with dreams of becoming a UI/UX Designer, join us to kickstart your journey
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>

        <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
          <div className="custom-container mb-5 px-4 px-lg-0 pt-5">
            <div className="custom-row">
              <div className="custom-col-lg-3 d-flex justify-content-center p-2 mt-5 mt-lg-0">
                <div className="custom-top-img-box ">
                  <div className="custom-img-bx-round">
                    <img src={Image_4} className="custom-round-top-img" alt=""/>
                  </div>
                  <div className="custom-top-card p-3">
                    <h5 className="text-center mb-3 join_us_type"  style={{color:'black'}} >Switching careers</h5>
                    <p className="mb-0 text-center join_p col-10" style={{color:'black'}}>
                    Graphic designer seeking a change? Join UI/UX with us. Ready for a career shift? We've got you!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>

        {/* Repeat the above structure for other columns */}
      </Row>
    </Container>
    </div>
  )
}

export default Join
