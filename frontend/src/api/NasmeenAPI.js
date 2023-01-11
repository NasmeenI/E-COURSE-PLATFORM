import axios from "axios";

function endpoint(path) {
  return `https://hacktoschool-9-production.up.railway.app${path}`;
}

async function enrollCourse(userID, courseID) {
  const result = await axios.patch(endpoint("/enrollCourse"), {
    student: userID,
    course: courseID,
  });
  return result;
}

async function createCourse(_id, title, tag, instructorName, description) {
  const result = await axios.post(endpoint("/createCourse"), {
    _id: _id,
    title: title,
    tag: tag,
    instructorName: instructorName,
    description: description,
  });
  return result;
}

async function readAllCourses(classOfCourse, page) {
  const result = await axios.get(endpoint("/readAllCourses"), {
    classOfCourse: classOfCourse,
    page: page,
  });
  return result;
}

async function readMyCourses(userID, page) {
  const result = await axios.get(endpoint("/readCourses"), {
    userID: userID,
    page: page,
  });
  return result;
}

async function readEachCourses(courseID) {
  const result = await axios.get(endpoint("/readEachCourses"), {
    courseID: courseID,
  });
  return result;
}

async function removeCourse(userID, courseID) {
  const result = await axios.patch(endpoint("/removeCourse"), {
    userID: userID,
    courseID: courseID,
  });
  return result;
}

async function createAccount(userID, firstName, lastName, type ,image) {
  const result = await axios.post(endpoint("/createAccount"), {
    userID: userID,
    firstName: firstName,
    lastName: lastName,
    type: type,
    image: image
  });
  return result;
}

async function numberOfPage(classOfCourse) {
  const result = await axios.get(endpoint("/numberOfPage"), {
    classOfCourse: classOfCourse,
  });
  return result;
}

async function numberOfMyPage(userID) {
  const result = await axios.get(endpoint("/numberOfMyPage"), {
    userID: userID,
  });
  return result;
}

const NasmeenAPI = {
  enrollCourse,
  createCourse,
  readAllCourses,
  readMyCourses,
  readEachCourses,
  removeCourse,
  createAccount,
  numberOfPage,
  numberOfMyPage,
};

export default NasmeenAPI;