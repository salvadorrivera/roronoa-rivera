import firebase from "firebase/app";
import 'firebase/firestore';
const app = firebase.initializeApp ({
    apiKey: "AIzaSyBScRmsAXsUGn2LhoWnuLVWypNGf-hpQII",
    authDomain: "roronoa-rivera.firebaseapp.com",
    projectId: "roronoa-rivera",
    storageBucket: "roronoa-rivera.appspot.com",
    messagingSenderId: "654932160833",
    appId: "1:654932160833:web:031471fd673c09d21871c0",
    measurementId: "G-D6F3EEQF01"
});


export function getFirebase(){
    return app;
}
export function getFirestore(){
 return firebase.firestore(app)
}