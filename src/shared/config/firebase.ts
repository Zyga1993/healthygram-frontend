import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDcCNa4SuN8PyDE4FJh9DWo3Fhh3Mj32s0",
    authDomain: "demoauth-bd4b7.firebaseapp.com",
    projectId: "demoauth-bd4b7",
    storageBucket: "demoauth-bd4b7.firebasestorage.app",
    messagingSenderId: "794904004262",
    appId: "1:794904004262:web:2b5921f0f0eb740ed7d667",
    measurementId: "G-9J77YMMZG5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);