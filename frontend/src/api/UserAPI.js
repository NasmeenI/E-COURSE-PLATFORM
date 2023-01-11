import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "./firebase";

/**
 * 
 * @param email the user email
 * @param password the user password (must be at least 6 characters)
 * @returns 
 */
export async function register(email, password) {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return result;
  } catch (e) {
    return {
      error: e.message,
    };
  }
}

export async function login(email, password) {}

const UserAPI = { register, login };

export default UserAPI;
