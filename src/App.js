import React from "react";
import './App.css';
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import About from './Components/Pages/About';
import Navbar from "./Components/Layout/Navbar";
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import NotFound from "./Components/Pages/NotFound";
import AddEdit from "./Components/Users/AddEdit";
// import Edit from "./Components/Users/Edit";
import View from "./Components/Users/View";

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element = {<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/user/add" element={<AddEdit />} />
        <Route exact path="/user/edit/:id" element={<AddEdit/>} />
        <Route exact path="/user/view/:id" element={<View/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    </Router>
    
  );
}

export default App;
