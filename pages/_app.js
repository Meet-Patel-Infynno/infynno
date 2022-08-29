import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { wrapper } from "../store/store";

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

export default wrapper.withRedux( MyApp);
