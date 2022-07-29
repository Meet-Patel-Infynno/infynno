import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './features/Layout/Footer';
import NavBar from './features/Layout/NavBar';
import Home from './features/Pages/Home';
import ScoreBoard from './features/Pages/ScoreBoard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="scoreboard/:id" element={<ScoreBoard />} />
        </Routes>
      </BrowserRouter>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer></Footer>
    </div>
  );
}

export default App;
