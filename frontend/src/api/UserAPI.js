import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "./firebase";
import NasmeenAPI from "./NasmeenAPI";

/**
 * When a user is logged in, loads user's profile data, and passing it to callback function
 */
async function loadUserData() {
  const token = await auth.currentUser.getIdToken();
  const result = await NasmeenAPI.getProfile(token);
  if (result.error) {
    return { error: result.error };
  } else {
    return result.profile;
  }
}

/**
 * Make the user enroll to the course
 */
async function enrollCourse(courseID) {
  const token = await auth.currentUser.getIdToken();
  const result = await NasmeenAPI.enrollCourse(token, courseID);
  if (result.error) {
    return { error: result.error };
  } else {
    return result;
  }
}

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

const UserAPI = { register, login, loadUserData, enrollCourse };

export default UserAPI;
