import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCWHRkjTTKls9d97mGcnErLWbGRYz3qNE",
  authDomain: "courseraclone-3de56.firebaseapp.com",
  projectId: "courseraclone-3de56",
  storageBucket: "courseraclone-3de56.appspot.com",
  messagingSenderId: "1039381793844",
  appId: "1:1039381793844:web:d46433c230265260d10e61",
  measurementId: "G-0FRZ89Y5W2",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();
export default app;
