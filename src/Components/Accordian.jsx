import React, { useState, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Acc.css';

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsActive(!isActive);
    if (!isActive) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else {
      contentRef.current.style.maxHeight = '0px';
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className="accordion">
            <div className="accordion-item">
              <div className="accordion-title" onClick={toggleAccordion}>
                <div className={`accodian_flex p-2 mt-3 ${isActive ? 'active' : ''}`}>
                  <div style={{ color: isActive ? 'red' : 'black' }}>Section 1</div>
                  <div style={{ color: isActive ? 'red' : 'black' }}>{isActive ? '-' : '+'}</div>
                </div>
              </div>
              <br />
              <div className="accordion-content" ref={contentRef}>
                <div className="content-inner">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, veniam.
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
