
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAuE_HiwZYLsUHXBUqmlBtzhccAUAZHqa4",
    authDomain: "portfolio-1c322.firebaseapp.com",
    projectId: "portfolio-1c322",
    storageBucket: "portfolio-1c322.firebasestorage.app",
    messagingSenderId: "459494575538",
    appId: "1:459494575538:web:7eb446bbde10a5091628ab",
    measurementId: "G-S8P23EH5E0",
    databaseURL: "https://portfolio-1c322-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);