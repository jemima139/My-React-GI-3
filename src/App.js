import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Counter from './Components/Counter';
import Medium from './Components/Medium';
import Hard from './Components/Hard'; 
import './App.css'; 

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/medium">Medium</Link></li>
            <li><Link to="/hard">Hard</Link></li>

          </ul>
        </nav>

        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/medium" element={<Medium />} />
          <Route path="/hard" element={<Hard />} />
          <Route path="/" element={<Home />} />
          
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
