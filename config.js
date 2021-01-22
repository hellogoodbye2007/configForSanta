import firebase from 'firebase';
import '@firebase/firestore';
require("firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyDR4SX1B3Dyog4-6a5GMmvbqclwE7tJ51A",
    authDomain: "booksanta-37a99.firebaseapp.com",
    projectId: "booksanta-37a99",
    storageBucket: "booksanta-37a99.appspot.com",
    messagingSenderId: "663167245626",
    appId: "1:663167245626:web:784037358cd5bbdef24403"
};
// Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
var db=firebase.firestore();
export default db;