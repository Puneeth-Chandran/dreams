import React from 'react';
import Header from './Header';
import Hero_section from './Hero_section';
import Our_student from './Our_student';
import About from './About';
import Why from './Why';
import Top_Notch from './Top_Notch';
import Upcoming_Batches from './Upcoming_Batches';
import Achieve from './Achieve';
import Projects from './Projects';
import Placement from './Placement';
import Feedback from './Feedback';
import Fee from './Fee';
import Faq from './Faq';
import Explore  from './Explore';
import Join from './Join';
import Accordion from './Accordian';
import Design from './Design_Cards/Design';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
    
     <Hero_section />
      {/* <Our_student />  */}
      <Explore/>
      <Join/>
     <About />
      <Why />
      <Top_Notch />
      <Upcoming_Batches />
      <Achieve />
      <Projects />
      <Placement />
      {/* <Feedback /> */}
      <Fee />
      <di><br /> </di>
      <Faq /> <di><br /> </di> 
   <Footer/>
    </div>
  );
}

export default Home;
