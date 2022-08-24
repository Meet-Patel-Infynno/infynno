import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="w-full">
        <Navbar></Navbar>
        <Component {...pageProps} />
        <Footer></Footer>
      </div>
    </>
  );
}

export default MyApp;
