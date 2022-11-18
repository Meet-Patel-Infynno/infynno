import classNames from "classnames";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../redux/reducers/AuthenticationSlice";
import { resetProvider } from "../../redux/reducers/ServiceProviderSlice";
import { removeUserToken } from "../../util/user";
import Button from "../form/Button";
import { Cross, MobMenu } from "../icons";

const MainNav = (props) => {
  const router = useRouter();
  const [showSideBar, setShowSideBar] = useState(false);
  const openSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  const dispatch = useDispatch();

  const [isLoaded, setLoaded] = useState(false);

  const handleLogout = () => {
    removeUserToken();
    dispatch(removeUser());
    dispatch(resetProvider());
    router.push("/user/login");
  };

  const { beauticianId, user } = useSelector((state) => ({
    beauticianId: state.authentication.userData?.beautician?.id,
    user: state.authentication.userData.user,
  }));
  return (
    <>
      <div
        onClick={openSideBar}
        className={classNames(
          "h-screen w-full bg-overlay fixed top-0 left-0 z-40",
          showSideBar ? "block" : "hidden",
          "md:hidden mx-auto max-w-screen-2xl w-full pt-6 pb-4 px-6 md:pt-14 md:pb-8 sm:px-10 xl:px-20 flex items-center justify-between gap-6 xl:gap-0"
        )}
      ></div>

      <nav
        className={classNames(
          props?.className,
          "gap-5 z-40 md:z-0 xl:gap-10 md:flex-row flex-col text-black",
          router.route === "/user/dashboard" ||
            router.route === "/barber/dashboard"
            ? "md:text-black"
            : "md:text-white",
          showSideBar ? "right-0" : "right-full",
          "flex md:w-full justify-start md:justify-center md:right-0 md:items-center font-josefin h-screen md:h-auto bg-gradient-main md:bg-none md:bg-transparent fixed md:relative top-0 right-0 py-7 px-8"
        )}
      >
        <div className="w-full text-right md:hidden">
          <button onClick={openSideBar}>
            <Cross className="text-xl" />
          </button>
        </div>
        <Link href="/">
          <a
            className={classNames(
              "relative font-normal text-lg whitespace-nowrap xl:text-2xl leading-6 w-max",
              router.route === "/" && "active"
            )}
          >
            Home
          </a>
        </Link>
        <Link href="/user/services">
          <a
            className={classNames(
              "relative font-normal text-lg whitespace-nowrap xl:text-2xl leading-6 w-max",
              router.route === "/user/services" && "active"
            )}
          >
            Services
          </a>
        </Link>
        <Link href="/blog">
          <a
            className={classNames(
              "relative font-normal text-lg whitespace-nowrap xl:text-2xl leading-6 w-max",
              router.route === "/blog" && "active"
            )}
          >
            Blog
          </a>
        </Link>
        <Link href="/contact-us">
          <a
            className={classNames(
              "relative font-normal text-lg whitespace-nowrap xl:text-2xl leading-6 w-max",
              router.route === "/contact-us" && " active"
            )}
          >
            Contact Us
          </a>
        </Link>
        <div className="flex md:hidden w-max gap-6 md:flex-row flex-col">
          {/* <Link href="/auth/user/login">
            <a>
              <Button
                bgColor="bg-transparent"
                className="border-0 md:border border-solid w-max border-orange-500 rounded-md py-0 px-0 md:py-2 md:px-4 xl:px-9 md:w-full whitespace-nowrap"
              >
                <p className="font-medium text-black md:text-white text-base xl:text-xl leading-5">
                  Log in
                </p>
              </Button>
            </a>
          </Link>
          <Link href="/auth/user/signup">
            <a>
              <Button
                bgColor="bg-transparent md:bg-orange-500"
                className="bg-none rounded-md py-0 md:py-2 px-0 md:px-4 xl:px-8 w-max md:w-full whitespace-nowrap"
              >
                <p className="font-medium text-base xl:text-xl text-black md:text-white leading-5">
                  Sign up
                </p>
              </Button>
            </a>
          </Link> */}
          {user?.access ? (
            <>
              <div className="flex flex-col gap-5 justify-center items-center text-lg">
                <Link
                  href={beauticianId ? "/barber/dashboard" : "/user/dashboard"}
                >
                  <a className="whitespace-nowrap hover:bg-orange-400 w-56 hover:text-white font-normal text-black">
                    Dashboard
                  </a>
                </Link>
                <Link href={beauticianId ? "/barber/salon/profile/" : "#"}>
                  <a className="whitespace-nowrap hover:bg-orange-400 w-56 hover:text-white font-normal text-black">
                    My account
                  </a>
                </Link>
                {Cookies.get("Beautician") === "false" && (
                  <Link href="/auth/barber/signup">
                    <a className="text-lg hover:bg-orange-400 w-56 hover:text-white">
                      Barber signup
                    </a>
                  </Link>
                )}

                <div
                  onClick={handleLogout}
                  className="text-black hover:bg-orange-400 w-56 hover:text-white"
                >
                  Logout
                </div>
              </div>
            </>
          ) : (
            <>
              <Link href="/auth/user/login">
                <a>
                  <Button
                    bgColor="bg-transparent"
                    className="border-0 md:border border-solid w-max border-orange-500 rounded-md py-0 px-0 md:py-1 md:px-2 xl:px-9 md:w-full whitespace-nowrap"
                  >
                    <div className="font-medium text-black md:text-white text-base xl:text-xl leading-5">
                      Log in
                    </div>
                  </Button>
                </a>
              </Link>
              <Link href="/auth/user/signup">
                <a>
                  <Button
                    bgColor="bg-transparent md:bg-orange-500"
                    className="bg-none rounded-md py-0 md:py-1 px-0 md:px-2 xl:px-8 w-max md:w-full whitespace-nowrap"
                  >
                    <div className="font-medium text-base xl:text-xl text-black md:text-white leading-5">
                      Sign up
                    </div>
                  </Button>
                </a>
              </Link>
            </>
          )}
        </div>
      </nav>
      <button className="md:hidden block" onClick={openSideBar}>
        <MobMenu
          className={`${
            props?.menuIconClassName
              ? props.menuIconClassName
              : router.route === "/user/dashboard" ||
                router.route === "/barber/dashboard"
              ? "text-black"
              : "text-white"
          }`}
        />
      </button>
    </>
  );
};

export default MainNav;
