import { useRouter } from "next/router";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  const router = useRouter();
  const regAuth = /(^\/auth\/)\w+/;
  return (
    <>
      {!regAuth.test(router.route) && router.route !== "/contact-us" && (
        <Header />
      )}
      <main className="3xl:max-w-screen-2xl mx-auto">{children}</main>
      {regAuth.test(router.route) ? (
        router.route !== "/auth/signup" && (
          <Footer showFooter={!regAuth.test(router.route)} />
        )
      ) : (
        <Footer showFooter={true} />
      )}
    </>
  );
};

export default Layout;
