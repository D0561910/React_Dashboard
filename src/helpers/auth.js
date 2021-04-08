// import { auth } from "../services/firebase";

// export const signup = (email, password) => {
//   return auth().createUserWithEmailAndPassword(email, password);
// };

// export const signin = (email, password) => {
//   return auth().signInWithEmailAndPassword(email, password);
// };

// export const signInWithGoogle = () => {
//   const provider = new auth.GoogleAuthProvider();
//   return auth().signInWithPopup(provider);
// };

// export const signInWithGitHub = () => {
//   const provider = new auth.GithubAuthProvider();
//   return auth().signInWithPopup(provider);
// };

// export const logout = () => {
//   return auth().signOut();
// };

// const localhost_API = "http://localhost:8000/api/fakelogin";

// Post Method check response status.
export const checkResponseStatus = (res) => {
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
  return fetch(localhost_API, {
    method: "POST",
    body: JSON.stringify(user),
    headers: { "Content-Type": "application/json" },
  });
};

export const signOutAPI = () => {
  sessionStorage.clear();
};
