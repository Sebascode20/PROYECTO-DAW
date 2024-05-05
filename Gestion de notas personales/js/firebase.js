
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBRtCjtmuPixKfoSG_TmomrKYOu-JC1IOg",
  authDomain: "younotes-b61b4.firebaseapp.com",
  projectId: "younotes-b61b4",
  storageBucket: "younotes-b61b4.appspot.com",
  messagingSenderId: "847955039503",
  appId: "1:847955039503:web:3a73927c278ae1955b5a7a",
  measurementId: "G-CRBQD5NXL0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);