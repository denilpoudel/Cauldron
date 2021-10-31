
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

// Set the configuration for your app
// TODO: Replace with your project's config object
const firebaseConfig = {
  apiKey: "AIzaSyA1cWi45ntuAVSJQBJZnRill-CcTN3qC5E",
  authDomain: "cauldron-29e02.firebaseapp.com",
  databaseURL: "https://cauldron-29e02-default-rtdb.firebaseio.com",
  projectId: "cauldron-29e02",
  storageBucket: "cauldron-29e02.appspot.com",
  messagingSenderId: "716813658117",
  appId: "1:716813658117:web:69ab5629dccbc674b9946c",
  measurementId: "G-GGDX837DS7"
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const db = getDatabase(app);

export {db}