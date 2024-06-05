import React, { useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from './Faq Images/1ee9f350a17b9fb451d002351a37fe4f.png';
import 'rsuite/dist/rsuite.min.css';

import './Faq.css';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [lastItemRef, setLastItemRef] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionItems = [
    { question: "Who is it for?", answer: "Perfect for anyone eager to master UI/UX, whether you're a beginner or leveling up your skills." },
    { question: "Course Duration?", answer: "Flexible duration to fit different learning needs. Check details or contact us for the latest info." },
    { question: "Payment Plans?", answer: "No need to pay upfront. We offer flexible payment options, including installment plans." },
    { question: "Coding for UI/UX Designers?", answer: "Nope! As of 2024, coding isn't a must. We focus on design principles and practical application." },
    { question: "What You Gain?", answer: "Certified UI/UX designer status, hands-on learning, real projects, and placement assistance." },
    { question: "Tools Covered?", answer: "Learn with industry-favorite tools: Figma, FigJam, Miro, ChatGPT, and Zeplin." },
    { question: "Next Batch Start?", answer: "Upcoming batches start regularly. Check the schedule and secure your spot." },
    { question: "More Details?", answer: "WhatsApp us at +91-9XXXXXXX. Drop a message for quick assistance!" }
  ];

  const visibleAccordionItems = showAll ? accordionItems : accordionItems.slice(0, accordionItems.length - 4);

  const toggleAccordionHeight = () => {
    if (lastItemRef) {
      lastItemRef.style.maxHeight = showAll ? "0px" : `${lastItemRef.scrollHeight}px`;
    }
  };

  const handleShowMoreClick = () => {
    setShowAll(true);
    setTimeout(toggleAccordionHeight, 10);
  };

  const handleShowLessClick = () => {
    setShowAll(false);
    setTimeout(toggleAccordionHeight, 10);
  };

  return (
    <div className='faq p-2 '>
      <Container className='px-4 px-lg-0'>
        <Row>
          <Col xxl={12} xl={12} lg={12} md={12} sm={12}>
            <center>
              <img src={Image} alt="design dreamz" className='faq_image mt-5' />
            </center>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col xxl={12} xl={12} lg={12} md={12} sm={12}>
            <h3 className='mb-5 mt-5 faq_h3' style={{ color: 'black' }}>Frequently Asked Questions</h3>

            {visibleAccordionItems.map((item, index) => {
              const isLastItem = index === visibleAccordionItems.length - 1;
              const ref = isLastItem ? lastItemRef : null;

              return (
                <div className="accordion" key={index}>
                  <div className="accordion-item">
                    <div className="accordion-title" onClick={() => toggleAccordion(index)}>
                      <div className={`accodian_flex p-2 mt-3 ${activeIndex === index ? 'active' : ''}`}>
                        <div style={{ color: activeIndex === index ? 'red' : 'black' }}>{item.question}</div>
                        <div style={{ fontSize: '28px', color: activeIndex === index ? 'red' : 'black' }}>{activeIndex === index ? '-' : '+'}</div>
                      </div>
                    </div>
                    <div
                      className="accordion-content"
                      ref={ref}
                      style={{
                        maxHeight: activeIndex === index ? '100px' : '0px',
                        overflow: 'hidden',
                        transition: 'max-height 0.3s ease-in-out'
                      }}
                    >
                      <div className="content-inner">{item.answer}</div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="centered-button">
              {!showAll && (
                <button className='show_btn' onClick={handleShowMoreClick}>Show More</button>
              )}
              {showAll && (
                <button  className='show_btn' onClick={handleShowLessClick}>Show Less</button>
              )}
            </div>

          </Col>
        </Row>
      </Container>
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Faq;
