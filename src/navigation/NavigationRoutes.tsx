import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Note from '../components/pages/note/Note';

function NavigationRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Note />} />
      </Routes>
    </Router>
  );
}

export default NavigationRoutes;
