import axios from "axios";

function endpoint(path) {
  return `https://hacktoschool-9-production.up.railway.app${path}`;
}

// ------------- ability of instructor ------------- //

async function createCourse(userID, title, image, tag, description) {
  const result = await axios.post(endpoint("/createCourse"), {
    userID: userID,
    title: title,
    image: image,
    tag: tag,
    description: description,
  });
  return result.data;
}

async function createLecture(userID, courseID, title, text, file) {
  const result = await axios.post(endpoint("/createLecture"), {
    userID: userID,
    courseID: courseID,
    title: title,
    text: text,
    file: file,
  });
  return result.data;
}

async function createAssignment(userID, courseID, title, text, file, scoreMax) {
  const result = await axios.post(endpoint("/createAssignment"), {
    userID: userID,
    courseID: courseID,
    title: title,
    text: text,
    file: file,
    scoreMax: scoreMax,
  });
  return result.data;
}

async function createAnnouncement(userID, courseID, text) {
  const result = await axios.post(endpoint("/createAnnouncement"), {
    userID: userID,
    courseID: courseID,
    text: text,
  });
  return result.data;
}

async function viewMember(courseID) {
  const result = await axios.post(endpoint("/viewMember"), {
    courseID: courseID,
  });
  return result.data;
}

async function readAllCoursesNonStudent(tag, page) {
  const result = await axios.post(endpoint("/readAllCoursesInstructor"), {
    tag: tag,
    page: page,
  });
  return result.data;
}

async function readAssignmentInstructor(userID, assignmentID) {
  const result = await axios.post(endpoint("/readAssignmentInstructor"), {
    userID: userID,
    assignmentID: assignmentID,
  });
  return result.data;
}

async function giveScoreInstructor(userID, assignmentID, studentID, score) {
  const result = await axios.post(endpoint("/giveScoreInstructor"), {
    userID: userID,
    assignmentID: assignmentID,
    studentID: studentID,
    score: score,
  });
  return result.data;
}

// ------------- ability of student ------------- //

async function enrollCourse(userID, courseID) {
  const result = await axios.patch(endpoint("/enrollCourse"), {
    userID: userID,
    courseID: courseID,
  });
  return result.data;
}

async function sendWork(userID, assignmentID, file) {
  const result = await axios.post(endpoint("/sendWork"), {
    userID: userID,
    assignmentID: assignmentID,
    file: file,
  });
  return result.data;
}

async function readAllCoursesStudent(userID, tag, page) {
  const result = await axios.post(endpoint("/readAllCoursesStudent"), {
    userID : userID,
    tag: tag,
    page: page,
  });
  return result.data;
}

async function readAssignmentStudent(userID, assignmentID) {
  const result = await axios.post(endpoint("/readAssignmentStudent"), {
    userID: userID,
    assignmentID: assignmentID,
  });
  return result.data;
}

async function giveScoreStudent(userID, courseID, score) {
  const result = await axios.post(endpoint("/giveScoreStudent"), {
    userID: userID,
    courseID: courseID,
    score: score,
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

async function changeProfile(userID ,newFirstName, newLastName, newImage) {
  const result = await axios.post(endpoint("/changeProfile"), {
    userID: userID,
    newFirstName: newFirstName,
    newLastName: newLastName,
    newImage: newImage,
  });
  return result.data;
}

async function getProfile(userID) {
  const result = await axios.post(endpoint("/getProfile"), {
    userID: userID,
  });
  return result.data;
}

async function getAllTag() {
  const result = await axios.post(endpoint("/getAllTag"), {});
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
    tag: tag,
  });
  return result.data;
}

async function numberOfMyPage(userID) {
  const result = await axios.post(endpoint("/numberOfMyPage"), {
    userID: userID,
  });
  return result.data;
}

async function readDetailCourses(courseID) {
  const result = await axios.post(endpoint("/readDetailCourses"), {
    courseID: courseID,
  });
  return result.data;
}

async function readMyCourses(userID, page) {
  const result = await axios.post(endpoint("/readMyCourses"), {
    userID: userID,
    page: page,
  });
  return result.data;
}

async function readDetailMycourses(userID ,courseID) {
  const result = await axios.post(endpoint("/readDetailMycourses"), {
    userID: userID,
    courseID: courseID,
  });
  return result.data;
}

async function readLecture(lectureID) {
  const result = await axios.post(endpoint("/readLecture"), {
    lectureID: lectureID,
  });
  return result.data;
}

const NasmeenAPI = {
  // -- ability of instructor -- //
  createCourse,
  createLecture,
  createAssignment,
  createAnnouncement,
  viewMember,
  readAllCoursesNonStudent,
  readAssignmentInstructor,
  giveScoreInstructor,
  // -- ability of student -- //
  enrollCourse,
  sendWork,
  readAllCoursesStudent,
  readAssignmentStudent,
  giveScoreStudent,
  // -- ability of both -- //
  createAccount,
  changeProfile,
  getProfile,
  getAllTag,
  removeCourse,
  numberOfPage,
  numberOfMyPage,
  readDetailCourses,
  readMyCourses,
  readDetailMycourses,
  readLecture
};

export default NasmeenAPI;
