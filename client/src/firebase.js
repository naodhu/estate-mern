// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-estate-b784e.firebaseapp.com',
  projectId: 'mern-estate-b784e',
  storageBucket: 'mern-estate-b784e.appspot.com',
  messagingSenderId: '637564967526',
  appId: '1:637564967526:web:4607189ecc028d70446ba7',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
