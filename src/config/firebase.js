import { initializeApp } from "firebase/app";
//get firebase auth
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAo48mdF_iEB-Ou4WrbKCyT0LtDerZWSLI",
  authDomain: "junior-prep.firebaseapp.com",
  projectId: "junior-prep",
  storageBucket: "junior-prep.appspot.com",
  messagingSenderId: "574371831794",
  appId: "1:574371831794:web:b025dc6a5e3d499821156b",
  measurementId: "G-M7Y3HBND71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
