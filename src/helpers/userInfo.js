export const setUsername = (name) => {
  sessionStorage.setItem("dashboardUsername", name);
};

export const getUsername = () => {
  return sessionStorage.getItem("dashboardUsername");
};
