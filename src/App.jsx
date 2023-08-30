import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

//Pages
import Home from './pages/Home/Home';
import MainPage from "./pages/MainPage/MainPage";
import Skills from "./pages/Skills/Skills";
import Carreer from "./pages/Carreer/Carreer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/main' exact element={<MainPage/>}/>
        <Route path='/stats' exact element={<Skills/>}/>
        <Route path='/carreer' exact element={<Carreer/>}/>
      </Routes>

    </div>
  );
}

export default App;
