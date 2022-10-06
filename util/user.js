export const getUserToken = () => {
  return process.browser ? localStorage.getItem("access_token") !== null ? localStorage.getItem("access_token") : false : false;
}
export const getRefreshToken = () => {
  return process.browser ? localStorage.getItem("refresh_token") !== null ? localStorage.getItem("refresh_token") : false : false;
}

export const setUserToken = (token, refresh) => {
  localStorage.setItem("access_token", token);
  localStorage.setItem("refresh_token", refresh);
}

export const removeUserToken = (token) => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
}