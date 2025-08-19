// src/Routes.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyRecord from './pages/MyRecord';

// Import page components
import Dashboard from './pages/Dashboard';
import Column from './pages/Column';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/my-record" element={<MyRecord />} />
        <Route path="/column" element={<Column />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;