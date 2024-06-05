import React from 'react';
import Header from './Components/Header';
import RootLayout from './Components/RootLayout';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { Routes, Route } from 'react-router-dom';
import Contact from './Components/Contact';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<RootLayout />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
   
    </div>
  );
}

export default App;
