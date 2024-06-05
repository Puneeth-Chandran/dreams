import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import TextField from '@mui/material/TextField';
import Col from "react-bootstrap/Col";
import Button from '@mui/material/Button';
import Contact_image from './Contact us/colleagues-working-together-call-center-office.jpg'
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './Images/WhatsApp_Image_2024-03-29_at_11.52_1-removebg-preview.png'
import Head from './Header'
import './Contact.css'
import Footer from "./Footer2";
import RootLayout from "./RootLayout";
import { Link } from "react-router-dom";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import EmailIcon from '@mui/icons-material/Email';
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
const Contact = () => {



  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [contactNumberError, setContactNumberError] = useState('');
  const [messageError, setMessageError] = useState('');

  const clear = () => {
    setName('')
    setEmail('')
    setContactNumber('')
    setMessage('')
  }

  const handleFormSubmit = () => {
    if (validateForm()) {
      const subject = encodeURIComponent('Contact Form Submission');
      const body = `Name: ${name}\nEmail: ${email}\nContact Number: ${contactNumber}\nMessage: ${message}`;
      const mailtoLink = `mailto:muthuramprasad@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
    }
    clear()
  };

  const validateForm = () => {
    let isValid = true;

    // Name validation
    if (name.trim() === '') {
      setNameError('Name is required');
      isValid = false;
    } else {
      setNameError('');
    }

    // Email validation
    if (email.trim() === '') {
      setEmailError('Email is required');
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError('Invalid email format');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Contact number validation
    if (contactNumber.trim() === '') {
      setContactNumberError('Contact number is required');
      isValid = false;
    } else {
      setContactNumberError('');
    }

    // Message validation
    if (message.trim() === '') {
      setMessageError('Message is required');
      isValid = false;
    } else {
      setMessageError('');
    }

    return isValid;
  };

  const isValidEmail = (email) => {
    // Simple email validation using regex
    return /\S+@\S+\.\S+/.test(email);
  };



  return (
    <div id="contact2">
     
 <div className='nav_container'>
        <Navbar expand="lg" className={`navbar_body ${expanded ? 'expanded' : ''}`}>
          <Container className='nav_container'>
            <Navbar.Brand as={Link} to='/'>
              <img
                alt=""
                src={Logo}
                width="130"
                height="60"
                className="d-inline-block align-top"
              />{' '}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar} style={{ border: 'none' }}>
              {expanded ? <IoClose /> : <RiMenu3Line />}
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav" className={expanded ? 'show' : ''}>
              <Nav className="ms-auto">
                <Nav.Link as={Link} to='/' className='nav_link me-3' onClick={scrollToTop}>Home</Nav.Link>
                <Nav.Link as={Link} to='/' className='nav_link me-3' onClick={scrollToTop}>Course</Nav.Link>
                <Nav.Link as={Link} to='/' className='nav_link me-3' onClick={scrollToTop}>Placement</Nav.Link>
                <Nav.Link as={Link} to='/' className='nav_link me-3'onClick={scrollToTop}>Testimonial</Nav.Link>
                <Nav.Link as={Link} to='/' className='nav_link me-3' onClick={scrollToTop}>Portfolio</Nav.Link>
                <Nav.Link  as={Link} to='/' className='nav_link me-3' onClick={scrollToTop}>About us</Nav.Link>
                <Nav.Link href="#contact" className='nav_link me-3' activeClassName='active' onClick={scrollToTop}>Contact us</Nav.Link>

                <button className='enroll_btn' style={{ fontWeight: 'bold' }}>
                  Enroll Now
                </button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </div>
<div>
 
</div>

<div className="contact_us_banner_container" >
     <div className="  contact_banner_content">
      <h3 className="bread_grum"> <Link to='/' style={{color:'white',textDecoration:'none'}} className="bread_grum_link"> Home <DoubleArrowIcon className="d_arrow"/>  </Link>  Contact</h3>
     </div>
      </div>


    <div id="contact">
      <Container>
        <Row>
          <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
            <h4 className="contact_h3 mb-3 mt-4">Contact Us</h4>
            <h4 className="get_in_h1 mb-3">Get In Touch with Us!</h4>
            <p className="contact_p mb-5">
              Have a question or want to learn more? Feel free to drop us a
              message, and our team will get back to you shortly!
            </p>
            <h4 style={{color:'black'}} className="mb-2 office"> <a href="tel:+919702699536" className="call_me"><FaPhone className="contact_page_icon" /> </a> Office Phone Number</h4>
            <p style={{color:'black'}} className="mb-4 ms-4"> +91-98XXXXXXXXX </p>

            <h4 style={{color:'black'}} className="mb-2 office"><MdOutlineEmail  className="contact_page_icon"/> Office Email</h4>
            <p style={{color:'black'}} className="mb-4 ms-4">@mail</p>
          </Col>
          <Col xxl={4} xl={4} lg={4} md={12} sm={12}>
              {/* Contact form */}
              <br />
              <br />
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                className="contact_input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={!!nameError}
                helperText={nameError}
              />
              <br />
              <br />
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                className="contact_input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!emailError}
                helperText={emailError}
              />
               <br />
              <br />
             {/* Contact number field */}
             <TextField
                id="contactNumber"
                label="Contact Number"
                variant="outlined"
                className="contact_input"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                error={!!contactNumberError}
                helperText={contactNumberError}
              />
              <br />
              <br />
              <TextField
                id="message"
                label="Message"
                variant="outlined"
                rows={4}
                multiline
                className="contact_input"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                error={!!messageError}
                helperText={messageError}
              />
              <br />
              <br />
              <Button
                variant="outlined"
                className="send_btn"
                onClick={handleFormSubmit}
                startIcon={<EmailIcon/>}
              >
                Send
              </Button>
            </Col>
          </Row>
      </Container>
     
    </div>
    <div>
  <br />
  <br />
  <br />
  <br />
  <br />
</div>
<Footer/>
    </div>
  );
};

export default Contact;
