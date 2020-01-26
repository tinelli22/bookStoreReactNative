import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDH7XW5v3AUG1V9G_VANb6YDBjxZF8YAH4",
    authDomain: "bookstore-ce9e6.firebaseapp.com",
    databaseURL: "https://bookstore-ce9e6.firebaseio.com",
    projectId: "bookstore-ce9e6",
    storageBucket: "bookstore-ce9e6.appspot.com",
    messagingSenderId: "947940761160",
    appId: "1:947940761160:web:e880c0985eabcf27eb827d",
    measurementId: "G-H6R2YFLF9B"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore()
firebase.auth()
