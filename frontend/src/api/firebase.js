import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAiYNzuzY5mzhFrB3kS5DeFbtCKww5yeck",
  authDomain: "hacktoschool-e823b.firebaseapp.com",
  databaseURL:
    "https://hacktoschool-e823b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hacktoschool-e823b",
  storageBucket: "hacktoschool-e823b.appspot.com",
  messagingSenderId: "417088029882",
  appId: "1:417088029882:web:cd240014a2552494adee83",
  measurementId: "G-84Y53N5T29",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage();
