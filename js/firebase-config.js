// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  query,
  where,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtm3cgd_Y7MsmH67XjZ_BbIPVEqt3Pi9Q",
    authDomain: "nayepankh-foundation-2d02e.firebaseapp.com",
    projectId: "nayepankh-foundation-2d02e",
    storageBucket: "nayepankh-foundation-2d02e.firebasestorage.app",
    messagingSenderId: "839114933806",
    appId: "1:839114933806:web:e841ec7121f4983f6f41bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ✅ EXPORT - MOVED TO THE BOTTOM (AFTER auth and db are created)
export {
  auth,
  db,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  query,
  where,
  updateDoc
};