import firebase from "firebase";

const config = {
  // apiKey: "ADD-YOUR-DETAILS-HERE",
  // authDomain: "ADD-YOUR-DETAILS-HERE",
  // databaseURL: "ADD-YOUR-DETAILS-HERE",
  apiKey: "AIzaSyDy51uUpj_x93D6JrkjhYKuj8NKbk4NLCU",
  authDomain: "chatty-0405.firebaseapp.com",
  databaseURL: "https://chatty-0405.firebaseio.com",
};
firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
