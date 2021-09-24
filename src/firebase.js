import firebase from "firebase/compat";

const firebaseConfig = {
	apiKey: "AIzaSyD3XReOqt3q7s5cG7ys2ckVbsepbNNmGHI",
	authDomain: "linkedin-clone-bc9fc.firebaseapp.com",
	projectId: "linkedin-clone-bc9fc",
	storageBucket: "linkedin-clone-bc9fc.appspot.com",
	messagingSenderId: "792807152490",
	appId: "1:792807152490:web:bc888e5e95febc26cf6313",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
