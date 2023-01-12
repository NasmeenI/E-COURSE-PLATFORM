import express from "express";
import bp from "body-parser";
import cors from "cors";

import { createCourse } from "./abilityOfInstructor/createCourse.js";
import { createLecture } from "./abilityOfInstructor/createLecture.js";
import { createAssignment } from "./abilityOfInstructor/createAssignment.js";
import { createAnnouncement } from "./abilityOfInstructor/createAnnouncement.js";
import { viewMember } from "./abilityOfInstructor/viewMember.js";

import { enrollCourse } from "./abilityOfStudent/enrollCourse.js";
import { sendWork } from "./abilityOfStudent/sendWork.js";

import { createAccount } from "./abilityOfBoth/createAccount.js";
import { getProfile } from "./abilityOfBoth/getProfile.js";
import { getAllTag } from "./abilityOfBoth/getAllTag.js";
import { removeCourse } from "./abilityOfBoth/removeCourse.js";
import { numberOfPage } from "./abilityOfBoth/numberOfPage.js";
import { numberOfMyPage } from "./abilityOfBoth/numberOfMyPage.js";
import { readAllCourses } from "./abilityOfBoth/readAllCourses.js";
import { readDetailCourses } from "./abilityOfBoth/readDetailCourses.js";
import { readMyCourses } from "./abilityOfBoth/readMyCourses.js";
import { readLecture } from "./abilityOfBoth/readLecture.js";
import { readAssignment } from "./abilityOfBoth/readAssignment.js";
import { readDetailMycourses } from "./abilityOfBoth/readDetailMycourses.js";

const app = express();
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(cors());

app.post("/createCourse", createCourse);
app.post("/createLecture", createLecture);
app.post("/createAssignment", createAssignment);
app.post("/createAnnouncement", createAnnouncement);
app.post("/viewMember", viewMember);

app.patch("/enrollCourse", enrollCourse);
app.post("/sendWork", sendWork);

app.post("/createAccount", createAccount);
app.post("/getProfile", getProfile);
app.post("/getAllTag", getAllTag);
app.patch("/removeCourse", removeCourse);
app.post("/numberOfPage", numberOfPage);
app.post("/numberOfMyPage", numberOfMyPage);
app.post("/readAllCourses", readAllCourses);
app.post("/readDetailCourses", readDetailCourses);
app.post("/readMyCourses", readMyCourses);
app.post("/readDetailMycourses", readDetailMycourses);
app.post("/readLecture", readLecture);
app.post("/readAssignment", readAssignment);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("Server started on port 3000");
});