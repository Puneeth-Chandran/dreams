import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Image from './Placement Images/placement Image.png'
import './Placement.css'

const Placement = () => {
  return (
    <div id='placement'>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container className='px-4 px-lg-0 placement_container'>
      
            <p className='placement_h1'>Shape Your Career : <span className='placement_p'>Secure your dream job with our <br /> 100% Placement Support!</span> </p>
       
        <Row>
            <Col xxl={8} xl={8} lg={8} md={12} sm={12}>
                <p className='how_p mt-4'>How It Works?</p>
                <br />
                <p className='placement_p_li'><CheckBoxIcon className='tick'/>  <strong>Active Learning : </strong> Attend live classes and learn at your own pace</p> <br />
                <p className='placement_p_li'><CheckBoxIcon className='tick'/>   <strong>Showcase Skills : </strong> Complete expert-assigned projects to highlight your capabilities</p> <br />
                <p className='placement_p_li'><CheckBoxIcon className='tick'/>   <strong>Craft Portfolio : </strong>  Build a standout UI/UX portfolio on Behance with expert guidance.</p> <br />
                <p className='placement_p_li'><CheckBoxIcon className='tick'/>   <strong>Mock Interviews : </strong> Practice with mock interviews by our HR team and technical experts</p> <br />
                <p className='placement_p_li'><CheckBoxIcon className='tick'/>   <strong>Job Opportunities : </strong> Receive interview invitations from top industry companies</p> <br />
                <p className='placement_p_li'><CheckBoxIcon className='tick'/>   <strong>Seal the Deal : </strong>  Ace interviews, securing exciting job offers in UI/UX design!</p> <br />
            </Col>

            <Col xxl={4} xl={4} lg={4} md={12} sm={12} className='mt-5' >
                <img src={Image} alt="" className='placement_image mt-5' />
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Placement
