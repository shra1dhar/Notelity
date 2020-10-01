import React from 'react';
import Home from '../components/pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function NavigationRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default NavigationRoutes;
