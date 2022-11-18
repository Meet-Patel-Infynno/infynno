import cookie from "js-cookie";

const { NEXT_PUBLIC_COOKIE_TIME } = process.env;

export const getUserToken = () => {
  return cookie.get("access");
};
export const getRefreshToken = () => {
  return cookie.get("refresh");
};

export const setUserToken = (token, refresh) => {
  cookie.set("access", token, { expires: Number(NEXT_PUBLIC_COOKIE_TIME) });
  cookie.set("refresh", refresh, { expires: Number(NEXT_PUBLIC_COOKIE_TIME) });
};

export const removeUserToken = (token) => {
  cookie.remove("access");
  cookie.remove("refresh");
  cookie.remove("user_data");
  cookie.remove("beautician_data");
  cookie.remove("Beautician");
};

export const setUserData = (data) => {
  cookie.set("user_data", JSON.stringify(data), {
    expires: Number(NEXT_PUBLIC_COOKIE_TIME),
  });
};

export const getUserData = () => {
  return JSON.parse(cookie.get("user_data") || null);
};

export const setBeauticianData = (data) => {
  cookie.set("beautician_data", JSON.stringify(data), {
    expires: Number(NEXT_PUBLIC_COOKIE_TIME),
  });
};

export const getBeauticianData = () => {
  return JSON.parse(cookie.get("beautician_data") || null);
};
