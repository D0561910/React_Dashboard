export const getToken = () => {
  return sessionStorage.getItem("dashobardToken");
};

export const setToken = (userToken) => {
  sessionStorage.setItem("dashobardToken", userToken);
};

export const clearToken = () => {
  sessionStorage.clear();
};
