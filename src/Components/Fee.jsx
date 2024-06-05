import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Button from '@mui/material/Button';
import "./Fee.css";

const fee = () => {
  return (
    <div>
      <Container className="px-4 px-lg-0">
        <Row>
          <Col xxl={10} xl={10} lg={10} md={12} sm={12} className="mb-5">
            <p className="free_p mt-5 ms-3">Program fee</p>
            <h2 className="inr_h3 mb-5 ms-3">INR 31,999/-</h2>
            <p className="what_p mb-2 ms-3">What's Included:</p>
            <div className="fees_list p-3 ms-2">
              <ul className="justify-content-start">
                <li className="mb-3 fee_li">12 Weeks of Learning</li>
                <li className="mb-3 fee_li">Real-World Case Studies</li>
                <li className="mb-3 fee_li">Live Projects</li>
                <li className="mb-3 fee_li">Personal Mentorship</li>
                <li className="mb-3 fee_li">Feedback Tailored for You</li>
                <li className="mb-3 fee_li">Job Assistance</li>
                <li className="mb-3 fee_li">
                  Interview Preparation with Mentor Feedback
                </li>
                <li className="mb-3 fee_li">LinkedIn Profile Reviews</li>
              </ul>
            </div>
          </Col>

          <Row>
            <Col xxl={7} xl={7} lg={7} md={12} sm={12}>
              <h6 className="mt-5 mb-4 overview_h6">Course overview </h6>

              <ul className="fee_list">
                <li className="overview_li">Introduction to UI/UX</li>
                <li className="overview_li">Exploring the World of UI/UX</li>
                <li className="overview_li">Overview of Course Content</li>
                <li className="overview_li" style={{}}>
                  What We Will Cover in the Upcoming Sessions
                </li>
                <li className="overview_li">Q&A Session</li>
              </ul>
            </Col>
            <Col xxl={5} xl={5} lg={5} md={12} sm={12}>
              <div className="icons_section mb-3 mt-5 me-3">
                <CalendarTodayIcon className="calender_icon" /> 12 -3-2024
                <div className="text_in_calender me-3">
                  <p className="calender_number">12</p>
                </div>
              </div>
              <div className="time_icon flex" style={{ display: "flex" }}>
                <AccessTimeIcon className="calender_icon" />
                <p className="twele mt-1 ms-3">12.00 Pm</p>
              </div>
            </Col>
          </Row>
        </Row>
        <Col xxl={12} xl={12} lg={12} md={12} sm={12}>
          <p className="join_p_span mt-5 mb-5">
          
            <span className="join_us_span">Join Us</span> us on 12-3-2024 (Tuesday)
            at 12:00 PM for a sneak peek into UI/UX design. Explore fundamental
            concepts and get a glimpse of the exciting journey ahead!
          </p>
<div className="fee_entroll_btn">
  <a href="#enroll" style={{textDecoration:'none', color:'white'}} >
<Button variant="outlined" className="enroll_btn_fee ">Enroll Now for Demo Class</Button>
</a>
</div>

          
        </Col>
      </Container>
    </div>
  );
};

export default fee;
