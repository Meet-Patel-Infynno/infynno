import './App.css';
import FooterCom from './components/layout/FooterCom';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Home from './components/Pages/Home';
import MustWatch from './components/Pages/MustWatch';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Home></Home>
      <MustWatch type = {"popular"} title = {"MOVIES YOU MUST WATCH"}></MustWatch>
      <MustWatch type = {"284052/similar"} title = {"RECOMMENDED MOVIES FOR YOU"}></MustWatch>
      <MustWatch type = {"top_rated"} title = {"BOLLYWOOD CLASSICS"}></MustWatch>
      <FooterCom></FooterCom>
    </div>
  );
}

export default App;
