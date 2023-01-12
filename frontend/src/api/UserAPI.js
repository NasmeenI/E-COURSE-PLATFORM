import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "./firebase";

/**
 *
 * @param email the user email
 * @param password the user password (must be at least 6 characters)
 * @returns
 */
async function register(email, password) {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return result;
  } catch (e) {
    return {
      error: e.message,
    };
  }
}
/**
 *
 * @param email the user email
 * @param password the user password (must be at least 6 characters)
 * @returns
 */
async function login(email, password) {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result;
  } catch (e) {
    return { error: e.message };
  }
}

const UserAPI = { register, login };

export default UserAPI;
