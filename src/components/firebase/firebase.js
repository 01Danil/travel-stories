import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebaseui/dist/firebaseui.css'; // Подключаем стили для Firebase UI

// Ваши настройки Firebase
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Инициализация Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Экспортируем объект авторизации
export const auth = firebaseApp.auth();
export const firebaseUiConfig = {
  signInSuccessUrl: '/', // URL, куда перенаправлять после успешной авторизации
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID, // Google
    firebase.auth.EmailAuthProvider.PROVIDER_ID,  // Email
  ],
};

export default firebaseApp;