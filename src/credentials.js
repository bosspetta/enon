// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBlM_3jVt5KYTUKTnInLomrVKhCrV3hpvc',
  authDomain: 'enon-users.firebaseapp.com',
  projectId: 'enon-users',
  storageBucket: 'enon-users.appspot.com',
  messagingSenderId: '1016938552017',
  appId: '1:1016938552017:web:c91f1fdc87d574098ac3f0',
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase
