import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzYYqOrbQt3PKbxuhu2gHjEqO1MxCaI0g",
  authDomain: "news-app-dd47b.firebaseapp.com",
  projectId: "news-app-dd47b",
  storageBucket: "news-app-dd47b.appspot.com",
  messagingSenderId: "827328620712",
  appId: "1:827328620712:web:785082673b4d6428417a9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);
export default app;
