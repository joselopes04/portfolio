import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';


//Pages
import Home from './pages/Home/home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;
