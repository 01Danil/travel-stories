import React from "react";
import { auth } from "./firebase";
import firebase from "../firebase/firebase";

const GoogleSingIn = () => {
  const handGoogleSingIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .singInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // Сохраните данные пользователя в состояние или в базе данных
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return <button onClick={handleGoogleSingIn}>Sing in with Google</button>;
};

export default GoogleSingIn;
