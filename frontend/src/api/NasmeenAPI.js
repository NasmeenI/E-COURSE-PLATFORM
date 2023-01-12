import axios from "axios";

function endpoint(path) {
  return `https://hacktoschool-9-production.up.railway.app${path}`;
}

async function enrollCourse(userID, courseID) {
  const result = await axios.patch(endpoint("/enrollCourse"), {
    student: userID,
    course: courseID,
  });
  return result.data;
}

async function createCourse(_id, title, tag, instructorName, description) {
  const result = await axios.post(endpoint("/createCourse"), {
    _id: _id,
    title: title,
    tag: tag,
    instructorName: instructorName,
    description: description,
  });
  return result.data;
}

async function getProfile(userID) {
  const result = await axios.get(endpoint("/getProfile"), {
    userID: userID
  });
  return result.data;
}

async function readAllCourses(classOfCourse, page) {
  const result = await axios.get(endpoint("/readAllCourses"), {
    classOfCourse: classOfCourse,
    page: page,
  });
  return result.data;
}

async function readMyCourses(userID, page) {
  const result = await axios.get(endpoint("/readCourses"), {
    userID: userID,
    page: page,
  });
  return result.data;
}

async function readEachCourses(courseID) {
  const result = await axios.get(endpoint("/readEachCourses"), {
    courseID: courseID,
  });
  return result.data;
}

async function removeCourse(userID, courseID) {
  const result = await axios.patch(endpoint("/removeCourse"), {
    userID: userID,
    courseID: courseID,
  });
  return result.data;
}

async function createAccount(userID, firstName, lastName, type, image) {
  const result = await axios.post(endpoint("/createAccount"), {
    userID: userID,
    firstName: firstName,
    lastName: lastName,
    type: type,
    image: image,
  });
  return result.data;
}

async function numberOfPage(classOfCourse) {
  const result = await axios.get(endpoint("/numberOfPage"), {
    classOfCourse: classOfCourse,
  });
  return result.data;
}

async function numberOfMyPage(userID) {
  const result = await axios.get(endpoint("/numberOfMyPage"), {
    userID: userID,
  });
  return result.data;
}

const NasmeenAPI = {
  enrollCourse,
  createCourse,
  getProfile,
  readAllCourses,
  readMyCourses,
  readEachCourses,
  removeCourse,
  createAccount,
  numberOfPage,
  numberOfMyPage,
};

export default NasmeenAPI;
