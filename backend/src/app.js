// app
import express from "express";
const app = express();

// body-parser
import bp from "body-parser";

import cors from "cors";

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello");
});

// routes
import { create } from "./routes/create.js";
import { read } from "./routes/read.js";
import { update } from "./routes/update.js";
import { deleteDoc } from "./routes/deleteDoc.js";
import { deleteField } from "./routes/deleteField.js";
app.get("/friends", read);
app.post("/addfriends", create);
app.patch("/change", update);
app.delete("/field", deleteField);
app.delete("/doc", deleteDoc);

// ability of instructors
import { createCourse } from "./abilityOfInstructor/createCourse.js";
app.post("/createCourse", createCourse);

// ability of student
import { enrollCourse } from "./abilityOfStudent/enrollCourse.js";
app.patch("/enrollCourse", enrollCourse);

// ability of both
import { readCourses } from "./abilityOfBoth/readCourses.js";
import { readAllCourses } from "./abilityOfBoth/readAllCourses.js";
import { readEachCourses } from "./abilityOfBoth/readEachCourses.js";
import { removeCourse } from "./abilityOfBoth/removeCourse.js";
app.get("/readCourses", readCourses);
app.get("/readAllCourses", readAllCourses);
app.get("/readEachCourses", readEachCourses);
app.delete("/removeCourse", removeCourse);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("Server started on port 3000");
});
