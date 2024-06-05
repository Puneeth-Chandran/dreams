import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CloseIcon from '@mui/icons-material/Close';
import Cloud from './Form Images/cloud_png.png';
import Tool_image_bg from './why Images/Rectangle 43.png'
import Tool_image_1 from './why Images/figma.png'
import Tool_image_2 from './why Images/figjam.png'
import Tool_image_3 from './why Images/race.png'
import Tool_image_4 from './why Images/chatgpt.png'
import Tool_image_5 from './why Images/baloon.png'
import Pdf from './Pdf/syllabus.pdf'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import './Top_Notch.css';
import Slider from './Slider';

const Top_Notch = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });
  
  const [errors, setErrors] = useState({});
  
  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (formData.name.trim() === '') {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (formData.email.trim() === '') {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    if (formData.phoneNumber.trim() === '') {
      errors.phoneNumber = 'Phone number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = 'Phone number is invalid';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Download PDF
      const link = document.createElement('a');
      link.href = Pdf; // Set PDF URL
      link.setAttribute('download', 'syllabus.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    
  };
  


  return (
    <div id='course'>
      <br />
      <br />
      <br />
    <div className='top_notch_container px-4 px-lg-0' >
     
      <Container className=''>
        <Row>
          <Col xxl={8} xl={8} lg={8} md={12} sm={12}>
            <p className='mt-5 top_notch_h1'>
              Explore our <span className='top_notch_span'>Top-Notch Learning</span>
            </p>
            <p className='top_notch_p '>Hands-On Practicality, Aligned with Current Industry Standards, <br /> and Completed in Just 
            <strong> 3 Months!</strong> </p>
          </Col>

          <Col xxl={4} xl={4} lg={4} md={12} sm={12} className='mt-5'>
            <Button variant="outlined" startIcon={<ArrowDownwardIcon />} className='mt-3 download_btn pop_up_download_syllabus_btn' onClick={openModal}>
              Download syllabus
            </Button>
          </Col>
        </Row>
      </Container>

      <Dialog open={showModal} onClose={closeModal}>
        <DialogTitle>
          <Button onClick={closeModal}  style={{ float: 'right' }}>
            <CloseIcon />
          </Button>
        </DialogTitle>
        <DialogContent>
          <div className="cloud_bg">
          <img src={Cloud} alt="dreamz design" className="cloud_png cloud_png_png  " />
          </div>
          <form className="form_text_field_container">
            <TextField
              id="name"
              name="name"
              label="Enter your Name"
              type="text"
              variant="outlined"
              className="mb-4 mt-5 text_field"
              value={formData.name}
              onChange={handleInputChange}
              error={!!errors.name}
              helperText={errors.name && errors.name}
              fullWidth
            />
            <TextField
              id="email"
              name="email"
              label="Enter your Email"
              type="email"
              variant="outlined"
              className="mb-4 text_field"
              value={formData.email}
              onChange={handleInputChange}
              error={!!errors.email}
              helperText={errors.email && errors.email}
              fullWidth
            />
            <TextField
              id="phoneNumber"
              name="phoneNumber"
              label="Contact Number"
              type="tel"
              variant="outlined"
              className="mb-4 text_field"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber && errors.phoneNumber}
              fullWidth
            />
          </form>
          <a href={Pdf} download='syllabus'>
          <Button   onClick={handleFormSubmit} className='download_btn download_Syllabus_btn' variant="outlined" startIcon={<ArrowDownwardIcon />}>
            Download Syllabus
          </Button>
          </a>
        
        </DialogContent>
        <DialogActions>
          
          
         
        </DialogActions>
      </Dialog>
      <Container>
        <Row>
          <Col xxl={12} xl={12} lg={12} md={12} sm={12} style={{width:'90%'}} className='slider_table_container'> 
            <Slider />
          </Col>
        </Row>
      </Container>

     
<br /><br />
<Container className=''>
  <h3 className='mt-5 mb-3 tools_covered_h1' style={{ color: 'black' }}>Tools Covered!</h3>
  <Row className='justify-content-start mt-5'>



    <div className='col-lg-2 col-md-4 col-6 tool_image_container'>
      <div className="tool_image_icon mb-3">
        <img src={Tool_image_bg} alt="dreams design" className='tool_image_bg' />
        <div className="tool_image_container">
          <img src={Tool_image_1} alt="dreamz design" className='me-5 mb-3 tool_image ' />
        </div>
      </div>
    </div>

    <div className='col-lg-2 col-md-4 col-6 tool_image_2_container'>
      <div className="tool_image_icon mb-3">
        <img src={Tool_image_bg} alt="dreams design" className='tool_image_bg' />
        <div className="tool_image_container">
          <img src={Tool_image_2} alt="dreamz design" className='me-5 mb-3 tool_image_2 ' />
        </div>
      </div>
    </div>

    <div className='col-lg-2 col-md-4 col-6 tool_image_3_container'>
      <div className="tool_image_icon mb-3">
        <img src={Tool_image_bg} alt="dreams design" className='tool_image_bg' />
        <div className="tool_image_container">
          <img src={Tool_image_3} alt="dreamz design" className='me-5 mb-3 tool_image_3 ' />
        </div>
      </div>
    </div>

    <div className='col-lg-2 col-md-4 col-6 tool_image_4_container'>
      <div className="tool_image_icon mb-3">
        <img src={Tool_image_bg} alt="dreams design" className='tool_image_bg' />
        <div className="tool_image_container">
          <img src={Tool_image_4} alt="dreamz design" className='me-5 mb-3 tool_image_4 ' />
        </div>
      </div>
    </div>

    <div className='col-lg-2 col-md-4 col-6 tool_image_5_container'>
      <div className="tool_image_icon mb-3">
        <img src={Tool_image_bg} alt="dreams design" className='tool_image_bg' />
        <div className="tool_image_container">
          <img src={Tool_image_5} alt="dreams design" className='me-5 mb-3 tool_image_5 ' />
        </div>
      </div>
    </div>
  </Row>
  <div>
    <br />
    <br />
  </div>
</Container>


    </div>
    </div>
  )
}

export default Top_Notch;
