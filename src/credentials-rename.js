// *! If you want to work with Firebase connection
// *! you must complete information below with your
// *! own data.
// * You have to rename this file removing «-rename»
// * from the file name.

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'your_API_key',
  authDomain: 'your_auth_domain.firebaseapp.com',
  projectId: 'your_project_id',
  storageBucket: 'your_storage_bucket.appspot.com',
  messagingSenderId: 'your_message_sender_id',
  appId: 'your_app_id',
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;
