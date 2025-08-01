import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import WhatsAppFloatingIcon from './components/WhatsAppFloatingIcon';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <WhatsAppFloatingIcon />
      </div>
    </Router>
  );
};

export default App;