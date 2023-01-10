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

const NasmeenAPI = {
  enrollCourse,
};

export default NasmeenAPI;
