import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import toast from "react-hot-toast";
import { signUpApi } from "../util/ApiUtil";

const firebaseConfig = {
  apiKey: "AIzaSyDIw2cOWz3SVTEwgcvdhXurNr0MlKdVlDE",
  authDomain: "feedapp02.firebaseapp.com",
  projectId: "feedapp02",
  storageBucket: "feedapp02.appspot.com",
  messagingSenderId: "833356836763",
  appId: "1:833356836763:web:7ad214a12ce09b233a7b3e",
  measurementId: "G-VKZ6Q6DW7E",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () =>
  auth
    .signInWithPopup(provider)
    .then(function (result) {
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      var fullName = user.multiFactor.user.auth.currentUser.displayName;
      var emailAddress = user.multiFactor.user.auth.currentUser.email;
      var username = emailAddress.substr(0, emailAddress.length - 10);
      var password = username;

      // console.log(user);
      // console.log("token", token);
      console.log("FullName:", fullName);
      console.log("Email:", emailAddress);
      console.log("username:", username);
      console.log("password:", password);

      const apiResponse = signUpApi(
        username,
        fullName,
        emailAddress,
        "1", // (phoneNumber)this is because we dont have an input value in the signup form page
        password
      );
      console.log(user);

      console.log(apiResponse);

      if (apiResponse) {
        toast("Signup successful. Please login to continue.");
      }
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
    });

export default firebase;



// SELECT * FROM "UserID";
// SELECT * FROM "AuthenticationUser";

// delete from "AuthenticationUser" where "phoneNumber" = '1';

// delete from "UserID" where "phoneNumber" = '1';


