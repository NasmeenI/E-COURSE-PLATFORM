import admin from "firebase-admin";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import serviceAccount from "../creds.json" assert { type: "json" };
import { getApp } from "firebase-admin/app";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://hacktoschool-e823b-default-rtdb.asia-southeast1.firebasedatabase.app",
});
export const db = getFirestore();

export const auth = getAuth();
