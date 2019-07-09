import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_API_DOMAIN_2,
    databaseURL: process.env.REACT_APP_API_BASEURL,
    projectId: process.env.REACT_APP_API_PROJECTID,
    storageBucket: process.env.REACT_APP_API_STORAGE,
    messagingSenderId: process.env.REACT_APP_API_SENDERID,
    appId: process.env.REACT_APP_API_APPID
}

const firebaseImpl = firebase.initializeApp(firebaseConfig);
const firebaseDatabase = firebase.firestore();
export const firebaseAuth = firebaseImpl.auth();

const fireCollection = {
    signOut: (data) => firebaseAuth.createUserWithEmailAndPassword(data.email, data.password),
    signIn: (data) => firebaseAuth.signInWithEmailAndPassword(data.email, data.password),
    getUsers: () => firebaseDatabase.collection("users").get(),
    addUser: (user) => firebaseDatabase.collection("users").add(user),
    deleteUser: (id) => firebaseDatabase.collection("users").doc(id).delete(),
}

export default fireCollection