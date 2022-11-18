import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../redux/reducers/AppointmentSlice";
import { removeUser } from "../../redux/reducers/AuthenticationSlice";
import { resetProvider } from "../../redux/reducers/ServiceProviderSlice";
import { removeUserToken } from "../../util/user";
import Button from "../form/Button";
import DropDown from "../form/DropDown";
import { Logo } from "../icons";
import MainNav from "./MainNav";

const Header = ({ className, ...props }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isLoaded, setLoaded] = useState(false);

  const { beauticianId, user } = useSelector((state) => ({
    beauticianId: state.authentication.userData?.beautician?.id,
    user: state.authentication.userData.user,
  }));

  const handleLogout = () => {
    removeUserToken();
    dispatch(removeUser());
    dispatch(resetProvider());
    router.push("/user/login");
  };

  useEffect(() => {
    setLoaded(true);
  }, [user, beauticianId]);

  if (!isLoaded) {
    return null;
  }

  return (
    <div className={`${className && className} w-full z-50`}>
      <div className="mx-auto max-w-screen-2xl w-full pt-6 pb-4 px-6 md:pt-14 md:pb-8 sm:px-10 xl:px-20 flex items-center justify-between lg:gap-6 xl:gap-0">
        <div className="h-12 md:h-14 max-w-180 md:max-w-none lg:w-full lg:max-w-246">
          <Link href="/">
            <a>
              <Logo className="-translate-y-4 sm:translate-y-0 md:-translate-y-3 lg:-translate-y-4 w-full text-orange-500" />
            </a>
          </Link>
        </div>
        <MainNav showAuthButtons />
        <div className="hidden md:flex w-max gap-6 md:flex-row flex-col items-center">
          {user?.access ? (
            <>
              <DropDown>
                <div className="flex flex-col gap-1 py-4 justify-center items-center text-lg">
                  <Link
                    href={
                      beauticianId ? "/barber/dashboard" : "/user/dashboard"
                    }
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
              </DropDown>
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
      </div>
    </div>
  );
};
export default Header;
