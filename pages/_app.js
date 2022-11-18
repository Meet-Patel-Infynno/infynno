import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { Provider } from "react-redux";
import store from "../redux/store";
import { useState } from "react";
import { Router } from "next/router";
import { Bars } from "react-loader-spinner";
import { Toaster } from "react-hot-toast";

const MyApp = ({ Component, pageProps }) => {
  const [loader, setLoader] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    setLoader(true);
  });

  Router.events.on("routeChangeComplete", (url) => {
    setLoader(false);
  });
  return (
    <Provider store={store}>
      <Toaster />
      {loader ? (
        <div className="absolute top-0 left-0 z-50 w-screen h-screen flex justify-center items-center bg-overlay">
          <Bars
            height="80"
            width="80"
            color="#FF6D04"
            ariaLabel="bars-loading"
            visible={true}
          />
        </div>
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </Provider>
  );
};

export default MyApp;
