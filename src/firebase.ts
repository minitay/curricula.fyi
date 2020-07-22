import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7CZSc-rxvbdjdczrqxB6T6_Z0VMfJTVw",
  authDomain: "curricula-19529.firebaseapp.com",
  databaseURL: "https://curricula-19529.firebaseio.com",
  projectId: "curricula-19529",
  storageBucket: "curricula-19529.appspot.com",
  messagingSenderId: "104602472509",
  appId: "1:104602472509:web:ce6ae7515ccd86d911da54"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();


