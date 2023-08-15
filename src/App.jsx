import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';


//Pages
import Home from './pages/Home/Home';
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/main' exact element={<MainPage/>}/>
      </Routes>

    </div>
  );
}

export default App;
