import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVrt-J1eAyeodUho_qybHXs8DjDCpWJk0",
    authDomain: "opcas-supreme.firebaseapp.com",
    databaseURL: "https://opcas-supreme.firebaseio.com",
    projectId: "opcas-supreme",
    storageBucket: "opcas-supreme.appspot.com",
    messagingSenderId: "306401112465",
    appId: "1:306401112465:web:af4e2898b204b9f8ed6a30"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
