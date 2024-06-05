import React from 'react'
import Amazon from './Company Images/Amazon.png'
import Accenture from './Company Images/Accenture.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Marquee from "react-fast-marquee";
import Company from './Company_slider'
import './Our_student.css'

const Our_student = () => {
  return (
    <div className=' our_'>
      <br />
      <br />
        <Container>
            
        <p className='students_h1 mb-1'>Our Students Now at These Firms! </p>
        </Container>
        <Container>
            <Row>
               
              
<Col xxl={12} xl={12} lg={12} md={12} sm={12} className='company_slider ' >
<Company/>

</Col>
   
     

            </Row>
        </Container>
        
        <br />
      <br />
      </div>
   
  )
}

export default Our_student
