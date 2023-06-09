import { auth } from "./firebase.js";

export const getuid = async function (idToken) {
  try {
    const decodedToken = await auth.verifyIdToken(idToken);
    const uid = decodedToken.uid;
    return { error: null, uid: uid };
  } catch (error) {
    return { error: error, uid: null };
  }
};
