import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { Provider } from "react-redux";
import store from "../redux/store";
import { AuthCheck } from "../components/layout/AuthCheck";

const MyApp = ({ Component, pageProps }) => { 
  return (
    <Provider store={store}>
      <Layout>
        <AuthCheck>
          <Component {...pageProps} />
        </AuthCheck>
      </Layout>
    </Provider>
  );
};

export default MyApp;
