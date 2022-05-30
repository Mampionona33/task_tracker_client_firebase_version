// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
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
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

// export const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
