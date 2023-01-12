import axios from "axios";

function endpoint(path) {
  return `https://hacktoschool-9-production.up.railway.app${path}`;
}

// ------------- ability of instructor ------------- //

async function createCourse(userID, title, image ,tag ,description) {
  const result = await axios.post(endpoint("/createCourse"), {
    userID: userID,
    title: title,
    image : image,
    tag: tag,
    description: description,
  });
  return result.data;
}

async function createLecture(userID ,courseID ,title, text ,file) {
  const result = await axios.post(endpoint("/createLecture"), {
    userID: userID,
    courseID: courseID,
    title: title,
    text: text,
    file: file,
  });
  return result.data;
}

async function createAssignment(userID ,courseID ,title, text ,file) {
  const result = await axios.post(endpoint("/createAssignment"), {
    userID: userID,
    courseID: courseID,
    title: title,
    text: text,
    file: file,
  });
  return result.data;
}

async function createAnnouncement(userID ,courseID ,text) {
  const result = await axios.post(endpoint("/createAnnouncement"), {
    userID: userID,
    courseID: courseID,
    text: text,
  });
  return result.data;
}

// ------------- ability of student ------------- //

async function enrollCourse(userID, courseID) {
  const result = await axios.patch(endpoint("/enrollCourse"), {
    student: userID,
    course: courseID,
  });
  return result.data;
}

async function sendWork(userID ,assignmentID ,file) {
  const result = await axios.post(endpoint("/sendWork"), {
    userID: userID,
    assignmentID: assignmentID,
    file: file,
  });
  return result.data;
}

// ------------- ability of both ------------- //

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

async function getProfile(userID) {
  const result = await axios.post(endpoint("/getProfile"), {
    userID: userID,
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

async function numberOfPage(tag) {
  const result = await axios.post(endpoint("/numberOfPage"), {
    tag: tag
  });
  return result.data;
}

async function numberOfMyPage(userID) {
  const result = await axios.post(endpoint("/numberOfMyPage"), {
    userID: userID,
  });
  return result.data;
}

async function numberOfTag() {
  const result = await axios.post(endpoint("/numberOfTag"), {
  });
  return result.data;
}

async function readAllCourses(tag, page) {
  const result = await axios.post(endpoint("/readAllCourses"), {
    tag: tag,
    page: page,
  });
  return result.data;
}

async function readDetailCourses(courseID) {
  const result = await axios.post(endpoint("/readDetailCourses"), {
    courseID : courseID
  });
  return result.data;
}

async function readMyCourses(userID, page) {
  const result = await axios.post(endpoint("/readCourses"), {
    userID: userID,
    page: page,
  });
  return result.data;
}

async function readDetailMycourses(courseID) {
  const result = await axios.post(endpoint("/readDetailMycourses"), {
    courseID: courseID,
  });
  return result.data;
}

async function readLecture(lectureID) {
  const result = await axios.post(endpoint("/readLecture"), {
    lectureID: lectureID
  });
  return result.data;
}

async function readAssignment(assignmentID) {
  const result = await axios.post(endpoint("/readAssignment"), {
    assignmentID: assignmentID
  });
  return result.data;
}

const NasmeenAPI = {
  // -- ability of instructor -- //
  createCourse,
  createLecture,
  createAssignment,
  createAnnouncement,
  // -- ability of student -- //
  enrollCourse,
  sendWork,
  // -- ability of both -- //
  createAccount,
  getProfile,
  removeCourse,
  numberOfPage,
  numberOfMyPage,
  numberOfTag,
  readAllCourses,
  readDetailCourses,
  readMyCourses,
  readDetailMycourses,
  readLecture,
  readAssignment
};

export default NasmeenAPI;
