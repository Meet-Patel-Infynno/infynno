import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import store, { wrapper } from "../store/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <div className="w-full">
          <Navbar></Navbar>
          <Component {...pageProps} />
          <Footer></Footer>
        </div>
      </Provider>
    </>
  );
}

export default MyApp;
