// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsXf-1aFrHz6byzCaT0pq_Eiw_BKCgwDI",
  authDomain: "evento-d3900.firebaseapp.com",
  projectId: "evento-d3900",
  storageBucket: "evento-d3900.appspot.com",
  messagingSenderId: "677127933975",
  appId: "1:677127933975:web:fc470c49bbf166a7d6cc52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app