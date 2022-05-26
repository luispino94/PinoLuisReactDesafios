import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAEepAiCgCWpLCMgfLpZ5TUFpeJaEiSfmA",
  authDomain: "comision31165-ef48c.firebaseapp.com",
  projectId: "comision31165-ef48c",
  storageBucket: "comision31165-ef48c.appspot.com",
  messagingSenderId: "279634496672",
  appId: "1:279634496672:web:5f1348b37da6265b064dc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp (){
    return app
}