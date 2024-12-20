
// firebase.config.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHgUTCXFe_c_YSCi9NrAcW49P_TlHhP28",
  authDomain: "testing-2ea86.firebaseapp.com",
  projectId: "testing-2ea86",
  storageBucket: "testing-2ea86.firebasestorage.app",
  messagingSenderId: "436559932675",
  appId: "1:436559932675:web:7eec764ccab79794d24d36",
  measurementId: "G-32D0J5GNWR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
