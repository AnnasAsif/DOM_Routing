import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css'; // Import the CSS file for styling


import Home from './components/Home';
import Servers from './components/Servers';

const App = () => {

  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul className="navbar-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/servers">Servers</Link>
            </li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servers" element={<Servers />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
