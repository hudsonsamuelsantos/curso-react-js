import { getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDWDzTBV7CluRzsIJD9Q9Bmc6IzX59yTpM",
  authDomain: "mini-blog-fe701.firebaseapp.com",
  projectId: "mini-blog-fe701",
  storageBucket: "mini-blog-fe701.appspot.com",
  messagingSenderId: "395395001924",
  appId: "1:395395001924:web:0e6295be2525a448bad611"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }