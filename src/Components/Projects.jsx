import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image_1 from './Projects Images/Project 1.png'
import Image_2 from './Projects Images/project 2.png'
import Image_3 from './Projects Images/project 3.png'
import Image_4 from './Projects Images/project 4.png'
import Frame from './Projects Images/Group 19.png'
import './Projects.css'

const Projects = () => {
  return (
    <div className='project '  id='profolio'  >
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container >
        <Row>
        <center>
            <h3 className='project_h1 mb-3'  >Discover UI UX Projects</h3>
            <p className='project_p mb-5'>Learn by doing in practical projects – design mobile app interfaces, improve websites, and 
                explore the latest trend, the Bento Design pattern. It's hands-on learning for a successful 
                UI/UX design career.</p>
        </center>
        </Row>
      </Container>
      <div id='profolio_2'>
      <Container className='px-4 px-lg-0'>
      

       

<div className="project_row">
    <div>
        <br />
        <br />
        <br />
    </div>
        <Row>
            <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
<Row>
<Col xxl={12} xl={12} lg={12} md={12} sm={12}>
<div className="project_image_container mb-3">
                    <img src={Image_1} alt="dreams design" className='project_image_1' />
                </div>
    </Col>

    <Col xxl={12} xl={12} lg={12} md={12} sm={12}>
    <div className="project_image_container mb-3">
                    <img src={Image_2} alt="dreams design" className='project_image project_image_2' />
                </div>
    </Col>
</Row>

            </Col>



              <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
<Row>
<Col xxl={12} xl={12} lg={12} md={12} sm={12}>
<div className="project_image_container mb-3">
                    <img src={Image_4} alt="dreams design" className='project_image ' />
                </div>
    </Col>

    <Col xxl={12} xl={12} lg={12} md={12} sm={12}>
    <div className="project_image_container mb-3">
                    <img src={Image_3} alt="dreams design" className='project_image' />
                </div>
    </Col>
</Row>

            </Col>
        </Row>
        <div>
        <br />
        <br />
        <br />
    </div>

    
        </div>
      </Container>
      
      <img src={Frame} alt=""   className="frame_image_1"/>
 

   
      <img src={Frame} alt=""  className="frame_image_2"/>
   
      </div>
    </div>
  )
}

export default Projects
