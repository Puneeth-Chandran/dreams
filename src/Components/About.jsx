import React, { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Vector_1 from "./About Images/About Vector Image.png";
import { FaAward } from "react-icons/fa";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";
import Circle from "./About Images/png_background_image-removebg-preview.png";
import "./About.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const countUpRef = useRef(null);

  return (
    <div id="about">
      <br />
      <br />

      <div className=" about_us p-3">
        <Container className="mt-5">
          <Row>
            <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
              <img
                src={Vector_1}
                alt="dreamz  design"
                className="about_image"
              />
            </Col>

            <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
              <h3 className="about_h3 mt-5 mb-2">About us</h3>
              <p className="about_p mt-4">
                {" "}
                <span className="about_span_p">Established in 2021,</span>
                DesignDreamz Institute specializes in UI/UX Design training. Our
                customized courses ensure students are job-ready upon
                completion. We believe in practical learning, allowing students
                to make mistakes, build portfolios, and step confidently into
                the industry. Join us at DesignDreamz and see your UI/UX dreams
                come to life.
              </p>
            </Col>
          </Row>
        </Container>
        {/* Counter */}
        {/* <div className="counter_container">
          <Container>
            <Row>
              <Col xxl={4} xl={4} lg={4} md={12} sm={12}>
                <div className="counter_section mt-4">
                  <center>
                    <span className="counter_symbol mt-2">+</span>
                    <VisibilitySensor
                      className="count_number"
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setIsVisible(true);
                          if (countUpRef.current !== null) {
                            countUpRef.current.start();
                          }
                        }
                      }}
                    >
                      <CountUp
                        ref={countUpRef}
                        duration={10}
                        className="counter mt-2"
                        start={0}
                        end={isVisible ? 5.2 : 0}
                        decimals={1}
                      />
                    </VisibilitySensor>
                    <span className="counter_symbol mt-2">K</span>

                    <p className="counter_icons_p">Happy Learning!</p>
                  </center>
                </div>
              </Col>

              <Col xxl={4} xl={4} lg={4} md={12} sm={12}>
                <div className="counter_section mt-4">
                  <center>
                    <span className="counter_symbol mt-2">+</span>
                    <VisibilitySensor
                      className="count_number"
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setIsVisible(true);
                          if (countUpRef.current !== null) {
                            countUpRef.current.start();
                          }
                        }
                      }}
                    >
                      <CountUp
                        ref={countUpRef}
                        duration={10}
                        className="counter mt-2"
                        start={0}
                        end={isVisible ? 5.2 : 0}
                        decimals={1}
                      />
                    </VisibilitySensor>
                    <span className="counter_symbol mt-2">K</span>

                    <p className="counter_icons_p">Happy Doing!</p>
                  </center>
                </div>
              </Col>

              <Col xxl={4} xl={4} lg={4} md={12} sm={12}>
                <div className="counter_section mt-4">
                  <center>
                    <span className="counter_symbol mt-2">+</span>
                    <VisibilitySensor
                      className="count_number"
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setIsVisible(true);
                          if (countUpRef.current !== null) {
                            countUpRef.current.start();
                          }
                        }
                      }}
                    >
                      <CountUp
                        ref={countUpRef}
                        duration={10}
                        className="counter mt-2"
                        start={0}
                        end={isVisible ? 5.2 : 0}
                        decimals={1}
                      />
                    </VisibilitySensor>
                    <span className="counter_symbol mt-2">K</span>

                    <p className="counter_icons_p">Happy Results!</p>
                  </center>
                </div>
              </Col>
            </Row>
          </Container>
      
        </div> */}

        <div>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default About;
