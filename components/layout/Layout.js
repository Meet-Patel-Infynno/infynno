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
        <Header
          className={`${
            !regAuth.test(router.route) &&
            (router.route === "/user/appointment" ||
            router.route === "/barber/appointment" ||
            router.route === "/user/viewappointments"
              ? "bg-header-back bg-no-repeat bg-cover"
              : "max-w-screen-3xl left-1/2 -translate-x-1/2 absolute top-0")
          }`}
        />
      )}
      <main className="max-w-screen-3xl mx-auto">{children}</main>
      {regAuth.test(router.route) ? (
        router.route !== "/auth/user/signup" ||
        (router.route !== "/auth/barber/signup" && (
          <Footer showFooter={!regAuth.test(router.route)} />
        ))
      ) : (
        <Footer showFooter={true} />
      )}
    </>
  );
};

export default Layout;
