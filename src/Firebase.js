// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAN6fuhXiSJpondCFlJjHVnSYyhel3N5tY",
    authDomain: "bold-caldron-244023.firebaseapp.com",
    projectId: "bold-caldron-244023",
    storageBucket: "bold-caldron-244023.appspot.com",
    messagingSenderId: "920975008053",
    appId: "1:920975008053:web:c3320b12c61fa9d0942c7c",
    measurementId: "G-8R5XXHDM0P"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
