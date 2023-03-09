import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: "chat-ab746.firebaseapp.com",
//   projectId: "chat-ab746",
//   storageBucket: "chat-ab746.appspot.com",
//   messagingSenderId: "901216368405",
//   appId: "1:901216368405:web:8ec942ee51611df5c49b1c",
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyDy-Uo_dwHW2vxxLA33fcyuz-RezTzfVSs",
//   authDomain: "chat-app-f8f73.firebaseapp.com",
//   projectId: "chat-app-f8f73",
//   storageBucket: "chat-app-f8f73.appspot.com",
//   messagingSenderId: "853311265831",
//   appId: "1:853311265831:web:f2525e3576c1ee49054202"
// };


const firebaseConfig = {
    apiKey: "AIzaSyBcdcxTMAFQ_p6YQa49JzXUOgFK8cy_ICk",
    authDomain: "pchat-app-55106.firebaseapp.com",
    projectId: "pchat-app-55106",
    storageBucket: "pchat-app-55106.appspot.com",
    messagingSenderId: "661360308879",
    appId: "1:661360308879:web:20e640918c6440a4b5b6fa"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage()
export const db = getFirestore()




// const firebaseConfig = {
//   apiKey: "AIzaSyDy-Uo_dwHW2vxxLA33fcyuz-RezTzfVSs",
//   authDomain: "chat-app-f8f73.firebaseapp.com",
//   projectId: "chat-app-f8f73",
//   storageBucket: "chat-app-f8f73.appspot.com",
//   messagingSenderId: "853311265831",
//   appId: "1:853311265831:web:f2525e3576c1ee49054202"
// };