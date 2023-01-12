import express from "express";
import bp from "body-parser";
import cors from "cors";

import { createCourse } from "./abilityOfInstructor/createCourse.js";
import { createLecture } from "./abilityOfInstructor/createLecture.js";
import { createAssignment } from "./abilityOfInstructor/createAssignment.js";
import { createAnnouncement } from "./abilityOfInstructor/createAnnouncement.js";

import { enrollCourse } from "./abilityOfStudent/enrollCourse.js";
import { sendWork } from "./abilityOfStudent/sendWork.js";
import { readMyCoursesStudent } from "./abilityOfStudent/readMyCoursesStudent.js";
import { readLectureStudent } from "./abilityOfStudent/readLectureStudent.js";
import { readAssignmentStudent } from "./abilityOfStudent/readAssignmentStudent.js";

import { getProfile } from "./abilityOfBoth/getProfile.js";
import { readAllCourses } from "./abilityOfBoth/readAllCourses.js";
import { readDetailCourses } from "./abilityOfBoth/readDetailCourses.js";
import { removeCourse } from "./abilityOfBoth/removeCourse.js";
import { createAccount } from "./abilityOfBoth/createAccount.js";
import { numberOfPage } from "./abilityOfBoth/numberOfPage.js";
import { numberOfMyPage } from "./abilityOfBoth/numberOfMyPage.js";

const app = express();
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(cors());

app.post("/createCourse", createCourse);
app.post("/createLecture", createLecture);
app.post("/createAssignment", createAssignment);
app.post("/createAnnouncement", createAnnouncement);

app.patch("/enrollCourse", enrollCourse);
app.post("/sendWork", sendWork);
app.post("/readMyCoursesStudent", readMyCoursesStudent);
app.post("/readLectureStudent", readLectureStudent);
app.post("/readAssignmentStudent", readAssignmentStudent);

app.post("/getProfile", getProfile);
app.post("/readAllCourses", readAllCourses);
app.post("/readDetailCourses", readDetailCourses);
app.patch("/removeCourse", removeCourse);
app.post("/createAccount", createAccount);
app.post("/numberOfPage", numberOfPage);
app.post("/numberOfMyPage", numberOfMyPage);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("Server started on port 3000");
});