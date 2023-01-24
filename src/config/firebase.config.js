
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import { getAnalytics } from "firebase/analytics";

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "react-firebase-d68fe.firebaseapp.com",
    projectId: "react-firebase-d68fe",
    storageBucket: "react-firebase-d68fe.appspot.com",
    messagingSenderId: "409974779424",
    appId: "1:409974779424:web:0081539d57ab5efc8e9645",
    measurementId: "G-3XGZE02Q5S"
});

export const auth = app.auth();
const analytics = getAnalytics(app);

export default app;