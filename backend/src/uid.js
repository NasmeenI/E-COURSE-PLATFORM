import { getAuth } from "firebase/auth";

export const getuid = async function (idToken) {
  try {
    const decodedToken = await getAuth().verifyIdToken(idToken);
    const uid = decodedToken.uid;
    return { error: null, uid: uid };
  } catch (error) {
    return { error: error, uid: null };
  }
};