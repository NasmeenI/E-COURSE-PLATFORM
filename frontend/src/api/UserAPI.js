import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "./firebase";
import NasmeenAPI from "./NasmeenAPI";
import FileAPI from "./FileAPI";

/**
 * When a user is logged in, loads user's profile data, and passing it to callback function
 */
async function loadUserData() {
  try {
    const token = await auth.currentUser.getIdToken();
    const result = await NasmeenAPI.getProfile(token);
    if (result.error) {
      return { error: result.error };
    } else {
      return result.profile;
    }
  } catch (error) {
    return { error };
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

async function getMyCourse(page) {
  const token = await auth.currentUser.getIdToken();
  let result = await NasmeenAPI.readMyCourses(token, page);
  result = result.myCourses;
  for (let i = 0; i < result.length; i++) {
    result[i].instructorImage = await FileAPI.getURL(result[i].instructorImage);
  }
  return result;
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

const UserAPI = { register, login, loadUserData, enrollCourse, getMyCourse };

export default UserAPI;
