// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBxlLirZjYYvTjIipCT-BTOiTh92p_8vpE',
  authDomain: 'task-tracker-351310.firebaseapp.com',
  projectId: 'task-tracker-351310',
  storageBucket: 'task-tracker-351310.appspot.com',
  messagingSenderId: '498868729809',
  appId: '1:498868729809:web:23c182f7f467d1944812f0',
  measurementId: 'G-PY6M40WDZ7',
};

// Initialize Firebase²
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// get authentificated user information
const auth = getAuth();
const googleAuthProvider = new GoogleAuthProvider();

export { auth, googleAuthProvider };
