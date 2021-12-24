import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB6dKDQMaB1LtoMp16zK1EQYmmUleqz_ao",
  authDomain: "dev-portfolio-77cf5.firebaseapp.com",
  projectId: "dev-portfolio-77cf5",
  storageBucket: "dev-portfolio-77cf5.appspot.com",
  messagingSenderId: "1015670887011",
  appId: "1:1015670887011:web:87cb68b44a9355e6ed1e56",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
