import { clearToken } from "./token";
import { localhost_API } from "../constants/config";
// import { API_URL } from "../constants/config";

// Post Method check response status.
const checkResponseStatus = (res) => {
  if (res.ok) {
    return res;
  } else {
    throw new Error(`Login Failed: ${res.status} (${res.statusText})`);
  }
};

export const signInAPI = (username, password) => {
  let user = {
    username,
    password,
  };
  return fetch(`${localhost_API}api/login`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: { "Content-Type": "application/json" },
  }).then(checkResponseStatus);
};

export const signOutAPI = () => {
  clearToken();
};
