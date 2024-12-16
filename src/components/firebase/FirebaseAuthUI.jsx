import React, { useEffect } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

const FirebaseAuthUI = () => {
  useEffect(() => {
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    const uiConfig = {
      signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
      callbacks: {
        signInSuccessWithAuthResult: (authResult) => {
          console.log("User signed in:", authResult);
          return false; // Предотвращает автоматическую навигацию
        },
      },
    };

    ui.start("#firebaseui-auth-container", uiConfig);

    return () => ui.delete();
  }, []);

  return <div id="firebaseui-auth-container"></div>; // Контейнер для виджета
};

export default FirebaseAuthUI;