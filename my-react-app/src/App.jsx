import './styles.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrontPage from './pages/FrontPage';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<FrontPage />} />
        </Routes>
    </Router>
  );
}

export default App;