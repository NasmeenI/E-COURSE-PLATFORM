import express from "express";
import bp from "body-parser";
import cors from "cors";

import { createCourse } from "./abilityOfInstructor/createCourse.js";
import { enrollCourse } from "./abilityOfStudent/enrollCourse.js";

import { readMyCourses } from "./abilityOfBoth/readMyCourses.js";
import { readAllCourses } from "./abilityOfBoth/readAllCourses.js";
import { readEachCourses } from "./abilityOfBoth/readEachCourses.js";
import { removeCourse } from "./abilityOfBoth/removeCourse.js";
import { createAccount } from "./abilityOfBoth/createAccount.js";
import { numberOfPage } from "./abilityOfBoth/numberOfPage.js";
import { numberOfMyPage } from "./abilityOfBoth/numberOfMyPage.js";

const app = express();
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(cors());

app.post("/createCourse", createCourse);
app.patch("/enrollCourse", enrollCourse);

app.get("/readMyCourses", readMyCourses);
app.get("/readAllCourses", readAllCourses);
app.get("/readEachCourses", readEachCourses);
app.delete("/removeCourse", removeCourse);
app.post("/createAccount", createAccount);
app.get("/numberOfPage", numberOfPage);
app.get("/numberOfMyPage", numberOfMyPage);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("Server started on port 3000");
});
