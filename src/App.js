import './App.css';
import FooterCom from './components/layout/FooterCom';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Home from './components/Pages/Home';
import MustWatch from './components/Pages/MustWatch';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MovieDetail from './components/Pages/MovieDetail';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/:id" element={<MovieDetail></MovieDetail>} />
    </Routes>
  </BrowserRouter>
      <FooterCom></FooterCom>
    </div>
  )
}
export default App;
