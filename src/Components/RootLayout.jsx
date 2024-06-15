import React, { useEffect, useState } from 'react';
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Link, useLocation} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Logo from './Images/WhatsApp_Image_2024-03-29_at_11.52_1-removebg-preview.png'

import './RootLayout.css';
import {  Outlet } from 'react-router-dom';

import Home  from './Home';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};


const RootLayout = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  }
  
  

  return (
    <>
    
      <div className='nav_container'>
        <Navbar expand="lg" className={`navbar_body ${expanded ? 'expanded' : ''}`}>
          <Container className='nav_container'>
          <a href="#home">
            <Navbar.Brand >
             
              <img
                alt=""
                src={Logo}
                width="130"
              height="60"
                className="d-inline-block align-top logo"
              />{' '}
            </Navbar.Brand>
            </a>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar} style={{ border: 'none' }}>
              {expanded ? <IoClose /> : <RiMenu3Line />}
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav" className={expanded ? 'show' : ''}>
              <Nav className="ms-auto nav_list_items">
                <Nav.Link href="#home" className='nav_link me-3' activeClassName='active'  onClick={scrollToTop} >Home</Nav.Link>
                <Nav.Link href="#course" className='nav_link me-3' activeClassName='active'  onClick={scrollToTop}>Course</Nav.Link>
                {/* <Nav.Link href="#placement" className='nav_link me-3' activeClassName='active' onClick={scrollToTop}>Placement</Nav.Link>
                <Nav.Link href="#testimonial" className='nav_link me-3' activeClassName='active' onClick={scrollToTop}>Testimonial</Nav.Link> */}
                <Nav.Link href="#profolio" className='nav_link me-3' activeClassName='active' onClick={scrollToTop}>Portfolio</Nav.Link>
                <Nav.Link href="#about"  className='nav_link me-3' activeClassName='active' onClick={scrollToTop} >About us</Nav.Link>
                <Nav.Link as={Link} to='contact'  className='nav_link me-3' activeClassName='active' onClick={scrollToTop}>Contact us</Nav.Link>

                <button className='enroll_btn' style={{ fontWeight: 'bold' }}>
                <a href="#enroll" style={{color:'white',textDecoration:'none'}}> Enroll Now</a> 
                </button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </div>
      <Home/>
      <main>
        <Outlet />
      </main>
 
    </>
  )
}

export default RootLayout;
