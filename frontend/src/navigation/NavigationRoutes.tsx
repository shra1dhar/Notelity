import React from 'react';
import Home from '../components/pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Collaboration from '../components/pages/colab/Collaboration';

function NavigationRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/colab" element={<Collaboration />} />
      </Routes>
    </Router>
  );
}

export default NavigationRoutes;
