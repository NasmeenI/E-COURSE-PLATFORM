import express from "express";
import bp from "body-parser";
<<<<<<< Updated upstream
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
=======
>>>>>>> Stashed changes

import { createCourse } from "./abilityOfInstructor/createCourse.js";
import { enrollCourse } from "./abilityOfStudent/enrollCourse.js";

import { readMyCourses } from "./abilityOfBoth/readMyCourses.js";
import { readAllCourses } from "./abilityOfBoth/readAllCourses.js";
import { readEachCourses } from "./abilityOfBoth/readEachCourses.js";
import { removeCourse } from "./abilityOfBoth/removeCourse.js";

const app = express();
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.post("/createCourse", createCourse);

app.patch("/enrollCourse", enrollCourse);

app.get("/readCourses", readCourses);
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
