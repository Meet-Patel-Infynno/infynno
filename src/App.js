import './App.css';
import Footer from './Layout/Footer';
import NavBar from './Layout/NavBar';
import Home from './Pages/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ScoreBoard from './Pages/ScoreBoard';


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
