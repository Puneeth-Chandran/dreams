import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem'; 
import CloseIcon from '@mui/icons-material/Close';
import Cloud from './enquiry images/form 1.png';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Form_1_img from './Form Images/form 1 (1).png'
import Thank_you from './Upcoming Images/thank-you 1.png'
import './Upcoming_Batches.css'

const Upcoming_Batches = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [contactNumberError, setContactNumberError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validateForm = () => {
    let isValid = true;

    if (name.trim() === '') {
      setNameError('Name is required');
      isValid = false;
    } else {
      setNameError('');
    }

    if (email.trim() === '') {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email format');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (contactNumber.trim() === '') {
      setContactNumberError('Contact number is required');
      isValid = false;
    } else if (isNaN(contactNumber)) {
      setContactNumberError('Contact number must be a number');
      isValid = false;
    } else {
      setContactNumberError('');
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const subject = encodeURIComponent('Enquiry Form Submission');
      const body = `Name: ${name}\nEmail: ${email}\nContact Number: ${contactNumber}`;
      const mailtoLink = `mailto:designdreamz37@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;

      setFormSubmitted(true);
      handleClose();
    }
  };

  const closeModal = () => {
    setFormSubmitted(false);
  };

  return (
    <div id='enroll'>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container className='px-4 px-lg-0'>
        <center>
          <h3 className='batches_h1'>Upcoming Batches - Join <span className='online'>Online!</span> </h3>
        </center>
        <Row>
          <Col xxl={3} xl={3} lg={3} md={6} sm={12} className='p-3'>
            <div className="batch_card_container mb-4">
              <div className="batch_heading">
                <center>
                  <p className='p-3 Weekend_Batch'>Weekend Batch</p>
                </center>
              </div>
              <div className="batch_heading_details p-3">
                <br />
                <br />
                <p className="batch_heading_p">Sat & Sun</p>
                <p className="batch_heading_p">Starts on 29th June</p>
                <p className="batch_heading_p">Available Seats :<span className='full'> 10 Seats Left</span> </p>
                <br />
              </div>
              <div className="enquire_btn p-2">
                <Button variant="outlined" className='mt-3 enquire_btn_2 mb-2' onClick={handleClickOpen}>
                  Enquire Now
                </Button>
              </div>
            </div>
          </Col>

          {/* Second card */}
          <Col xxl={3} xl={3} lg={3} md={6} sm={12} className='p-3'>
            <div className="batch_card_container mb-4">
              <div className="batch_heading">
                <center>
                  <p className='p-3 Weekend_Batch'>Week Days Batch</p>
                </center>
              </div>
              <div className="batch_heading_details p-3">
                <br />
                <br />
                <p className="batch_heading_p">3 days a week</p>
                <p className="batch_heading_p">Starts on 25th June</p>
                <p className="batch_heading_p">Available Seats : <span className='full'>Full</span> </p>
                <br />
              </div>
              <div className="enquire_btn p-2">
                <Button variant="outlined" className='mt-3 enquire_btn_2 mb-2' onClick={handleClickOpen}>
                  Enquire Now
                </Button>
              </div>
            </div>
          </Col>

          {/* Third card */}
          <Col xxl={3} xl={3} lg={3} md={6} sm={12} className='p-3'>
            <div className="batch_card_container mb-4">
              <div className="batch_heading">
                <center>
                  <p className='p-3 Weekend_Batch'>Weekend Batch</p>
                </center>
              </div>
              <div className="batch_heading_details p-3">
                <br />
                <br />
                <p className="batch_heading_p">Sat & Sun</p>
                <p className="batch_heading_p">Starts on 6th July</p>
                <p className="batch_heading_p">Available Seats : <span className='seats'> 5 Seats Left</span></p>
                <br />
              </div>
              <div className="enquire_btn p-2">
                <Button variant="outlined" className='mt-3 enquire_btn_2 mb-2' onClick={handleClickOpen}>
                  Enquire Now
                </Button>
              </div>
            </div>
          </Col>

          {/* Fourth card */}
          <Col xxl={3} xl={3} lg={3} md={6} sm={12} className='p-3'>
            <div className="batch_card_container mb-4">
              <div className="batch_heading">
                <center>
                  <p className='p-3 Weekend_Batch'>Week Days Batch</p>
                </center>
              </div>
              <div className="batch_heading_details p-3">
                <br />
                <br />
                <p className="batch_heading_p">3 days a week</p>
                <p className="batch_heading_p">Starts on 1st July</p>
                <p className="batch_heading_p">Available Seats : <span className='full'>10 Seats Left</span></p>
                <br />
              </div>
              <div className="enquire_btn p-2">
                <Button variant="outlined" className='mt-3 enquire_btn_2 mb-2' onClick={handleClickOpen}>
                  Enquire Now
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <div className="blue_book_container">
            <Button style={{ float: 'right', marginTop: '6%', color: 'white' }} onClick={handleClose}>
              <CloseIcon />
            </Button>
            <div className="booK_icon">
              <img src={Form_1_img} alt="design dreamz" className='form_logo' />
            </div>
          </div>
        </DialogTitle>
        <DialogContent>
          <Container>
            <TextField
              label="Enter your Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={!!nameError}
              helperText={nameError}
            />
            <TextField
              label="Enter your Email"
              variant="outlined"
              fullWidth
              margin="normal"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!emailError}
              helperText={emailError}
            />
            <TextField
              label="Contact Number"
              variant="outlined"
              fullWidth
              margin="normal"
              type="text"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              error={!!contactNumberError}
              helperText={contactNumberError}
            />
          </Container>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} className='enquire_btn_2' variant="outlined" startIcon={<ArrowDownwardIcon />} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={formSubmitted} onClose={handleClose} onClick={(e) => e.stopPropagation()}>
        <DialogTitle>
          <div className="thank_you_container">
            <Button style={{ float: 'right', color: 'white' }} onClick={closeModal}>
              <CloseIcon className='mt-2' />
            </Button>
            <div className='thank_you_image_container'>
              <img src={Thank_you} alt="dreamz design" className='thank_you_image' />
              <p className='thank_you_p'>Enquiry Submitted!</p>
            </div>
          </div>
        </DialogTitle>
        <DialogContent>
          <p className='mb-3 mt-3'>We've received your information and will get back to you shortly.</p>
          <p className='mb-3'>In the meantime, feel free to explore our website for more details about our UI/UX Design Course. 
            If you have any urgent queries, contact us directly at +919113523278.</p>
          <p className='mb-3'>We look forward to assisting you on your journey into the exciting world of UI/UX design!</p>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Upcoming_Batches;
