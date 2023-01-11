import { getAuth } from "firebase/auth";
import { firebaseApp } from "./firebase";

export const getuid = async function (idToken) {
  try {
    const decodedToken = await getAuth(firebaseApp).verifyIdToken(idToken);
    const uid = decodedToken.uid;
    return { error: null, uid: uid };
  } catch (error) {
    return { error: error, uid: null };
  }
};