import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
	apiKey: "AIzaSyCVbQ2m7STd0S9nKzYvwuZNYrrhi6lo_l4",
	authDomain: "hubbly-5d95a.firebaseapp.com",
	databaseURL: "https://hubbly-5d95a.firebaseio.com",
	projectId: "hubbly-5d95a",
	storageBucket: "hubbly-5d95a.appspot.com",
	messagingSenderId: "587020063661",
	appId: "1:587020063661:web:d2d28d349647288db30724",
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;
