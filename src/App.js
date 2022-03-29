import React from 'react';
import  {  Routes, Route  }  from  'react-router-dom'
import Home from './Main/Home'
import FAQ from './Main/FAQ'
import Portfolio from './Main/Portfolio'
import Contact from './Main/Contact'
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
    </Routes>
  );
}

export default App;
