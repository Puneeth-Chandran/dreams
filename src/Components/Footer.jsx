import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from './Hero Section image/logo-removebg-preview.png'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FaWhatsapp } from "react-icons/fa6";
import Footer_image_wht_up from './Footer Images/WhatsApp_icon-removebg-preview.png'
import Logo_image from './Images/WhatsApp_Image_2024-03-29_at_11.52_1-removebg-preview.png'
import CallIcon from '@mui/icons-material/Call';
import Image_1 from './Footer Images/fb.png'
import Image_2 from './Footer Images/Instagram_icon-removebg-preview.png'
import Image_3 from './Footer Images/twiter.png'
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='mt-5 '>
        <div className="border">
            <hr />
        </div>
        <div className="footer_container_div">
      <Container className='footer'>
        <Row className='mt-5 justify-content-center mb-5'>
           



    <Col xxl={2} xl={2} lg={2} md={12} sm={12} >
      <img src={Logo_image} alt="" className='footer_logo' />
        <div className="footer_icons mt-3">
          <img src={Image_1} alt=""  className='footer_li ms-2'/>
          <img src={Image_2} alt=""  className='footer_li ins' />
          <img src={Image_3} alt=""  className='footer_li'/>
        {/* <FaFacebookF className='footer_li p-2 fb' />
        <FaXTwitter  className='footer_li p-2 twit'/>
        <FaInstagram className='footer_li p-2 ins' /> */}
        </div>
    </Col>

            

    <Col xxl={1} xl={1} lg={1} md={12} sm={12} className='p-3'>
<p className='mb-2 footer_h4 ' style={{color:'black'}}>
  <a href="#home" style={{textDecoration:'none' ,color:'black'}} className='foter_link'>
  Home
  </a>

  
  </p>


            </Col>

            <Col xxl={1} xl={1} lg={1} md={12} sm={12} className='p-3'>
<p className='mb-2  footer_h4 ' style={{color:'black'}}>
<a href="#course" style={{textDecoration:'none' ,color:'black'}} className='foter_link'>
Course
  </a>
 
  </p>
</Col>

<Col xxl={1} xl={1} lg={1} md={12} sm={12} className='p-3'>
<p className='mb-2  footer_h4 ' style={{color:'black'}}>
<a href="#about" style={{textDecoration:'none' ,color:'black'}} className='foter_link'>
About Us
  </a>
  </p>

</Col>

<Col xxl={1} xl={1} lg={1} md={12} sm={12} className='p-3'>
<p className='mb-2 footer_h4' style={{color:'black'}}>
<Link to='contact' style={{textDecoration:'none' ,color:'black'}} className='foter_link'>Email</Link>
  </p>


</Col>

<Col xxl={1} xl={1} lg={1} md={12} sm={12} className='p-3'>
<p className='mb-2 footer_h4' style={{color:'black'}}>
  <Link to='contact' style={{textDecoration:'none' ,color:'black'}} className='foter_link'> Contact us</Link>
 
  </p>


</Col>

<Col xxl={3} xl={3} lg={3} md={12} sm={12} className='p-3'>
<a href="tel:+919113523278" className="call_me">
<Button variant="outlined"  className='request_btn'>Request To Call</Button>
</a>

</Col>



        </Row>
        <hr />
        <center className='copyright'>
            <h6 className='mt-5'>© 2024 Rights Reserved Design Dreamz</h6>
        </center>
      </Container>


      
      </div>
      <a href="https://wa.me/+919113523278" style={{textDecoration:'none',cursor:'pointer',color:'black'}} target='_blank'
      
      >
      <div class="w-app">
        
       
    <img src={Footer_image_wht_up} alt="" className="whatsapp-fix-img "/>
   
        
          
    </div>
    </a>
    </div>
  )
}

export default Footer
