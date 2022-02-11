// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyD4i4mvU0nBA7ynSER00HKAn2IynBiUnNs",
    authDomain: "facebook-clone-a623f.firebaseapp.com",
    projectId: "facebook-clone-a623f",
    storageBucket: "facebook-clone-a623f.appspot.com",
    messagingSenderId: "823763116077",
    appId: "1:823763116077:web:dc6199b3f32a98ae3698a4",
    measurementId: "G-BDBHHW0MQT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;