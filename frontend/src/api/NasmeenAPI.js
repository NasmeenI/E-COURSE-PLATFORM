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

async function createCourse(_id, title ,class1 ,instructorName ,description) {
  const result = await axios.patch(endpoint("/createCourse"), {
    _id : _id,
    title : title,
    tag : tag,
    instructorName : instructorName,
    description : description
  });
  return result;
}

async function readAllCourses(classOfCourse, page) {
  const result = await axios.patch(endpoint("/readAllCourses"), {
    classOfCourse : classOfCourse,
    page : page
  });
  return result;
}

async function readCourses(userID, page) {
  const result = await axios.patch(endpoint("/readCourses"), {
    userID : userID,
    page : page
  });
  return result;
}

async function readEachCourses(courseID) {
  const result = await axios.patch(endpoint("/readEachCourses"), {
    courseID : courseID,
  });
  return result;
}

async function removeCourse(userID ,courseID) {
  const result = await axios.patch(endpoint("/removeCourse"), {
    userID : userID,
    courseID : courseID
  });
  return result;
}

async function createAccount(_id ,firstname ,lastname ,type) {
  const result = await axios.patch(endpoint("/createAccount"), {
    _id : _id,
    firstname : firstname,
    lastname : lastname,
    type : type
  });
  return result;
}

async function numberOfPage(classOfCourse) {
  const result = await axios.patch(endpoint("/numberOfPage"), {
    classOfCourse : classOfCourse
  });
  return result;
}

async function numberOfMyPage(userID) {
  const result = await axios.patch(endpoint("/numberOfMyPage"), {
    userID : userID
  });
  return result;
}

const NasmeenAPI = {
  enrollCourse,
  createCourse,
  readAllCourses,
  readCourses,
  readEachCourses,
  removeCourse,
  createAccount,
  numberOfPage,
  numberOfMyPage
};

export default NasmeenAPI;

