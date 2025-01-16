// Import Firebase
import { initializeApp } from 'firebase/app';

// Import other Firebase services you want to use (e.g., Auth)
import { getAuth } from 'firebase/auth';

// Your Firebase config object from the Firebase console
const firebaseConfig = {
    apiKey: "AIzaSyCyYGM0RRFXGmiBJyA3UZx5yK_0hcdxDsk",
    authDomain: "fitness-21b9b.firebaseapp.com",
    projectId: "fitness-21b9b",
    storageBucket: "fitness-21b9b.appspot.com",
    messagingSenderId: "659219679038",
    appId: "1:659219679038:android:99b66f3fb609802f1f8e6f",
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth (if needed)
export const auth = getAuth(app);

export default app;
