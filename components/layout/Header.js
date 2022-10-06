import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removerUser } from "../../redux/reducers/AuthenticationSlice";
import { removeUserToken } from "../../util/user";
import Button from "../form/Button";
import { Logo } from "../icons";
import MainNav from "./MainNav";

const Header = ({ className, ...props }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authentication.user_data.user);
  const [isLoaded, setLoaded] = useState(false);

  const handleLogout = () => {
    removeUserToken();
    dispatch(removerUser());
  };

  useEffect(() => {
    setLoaded(true);
  }, [user]);

  if (!isLoaded) {
    return null;
  }

  return (
    <div className={`${className && className} w-full z-50`}>
      <div className="mx-auto max-w-screen-2xl w-full pt-6 pb-4 px-6 md:pt-14 md:pb-8 sm:px-10 xl:px-20 flex items-center justify-between lg:gap-6 xl:gap-0">
        <div className="h-12 md:h-14 max-w-180 md:max-w-none lg:w-full lg:max-w-246">
          <Link href="/">
            <a>
              <Logo className="-translate-y-4 sm:translate-y-0 md:-translate-y-3 lg:-translate-y-4 w-full" />
            </a>
          </Link>
        </div>
        <MainNav showAuthButtons />
        <div className="hidden  md:flex w-max gap-6 md:flex-row flex-col items-center">
          {user?.access ? (
            <>
              <Link href="#">
                <a className="whitespace-nowrap font-normal text-2xl leading-6 text-black">
                  My account
                </a>
              </Link>
              <Button
                onClick={handleLogout}
                bgColor="bg-transparent md:bg-orange-500"
                className="bg-none rounded-md py-0 md:py-1 px-0 md:px-2 xl:px-8 w-max md:w-full whitespace-nowrap"
              >
                <div className="font-medium text-base xl:text-xl text-black md:text-white leading-5">
                  Logout
                </div>
              </Button>
            </>
          ) : (
            <>
              <Link href="/auth/login">
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
              <Link href="/auth/signup">
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
      </div>
    </div>
  );
};
export default Header;
