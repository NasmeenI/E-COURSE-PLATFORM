// app
import express from 'express';
const app = express();

// body-parser
import bp from 'body-parser';
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.get('/' ,function(req ,res){
    res.send('Hello');
})

// routes
import { create } from './routes/create.js';
import { read } from './routes/read.js';
import { update } from './routes/update.js';
import { deleteDoc } from './routes/deleteDoc.js';
import { deleteField } from './routes/deleteField.js';
app.get('/friends' ,read)
app.post('/addfriends' ,create)
app.patch('/change' ,update)
app.delete('/field' ,deleteField);
app.delete('/doc' ,deleteDoc);

// ability of instructors
import { createCourse } from './abilityOfInstructor/createCourse.js';
import { readCoursesInstructor } from './abilityOfInstructor/readCourses.js';
app.post('/createCourse' ,createCourse);
app.get('/readCoursesInstructor' ,readCoursesInstructor);

// ability of student
import { readCourses } from './abilityOfStudent/readCourses.js';
import { readAllCourses } from './abilityOfStudent/readAllCourses.js';
import { enrollCourse } from './abilityOfStudent/enrollCourse.js';
app.get('/readCourses' ,readCourses);
app.get('/readAllCourses' ,readAllCourses);
app.patch('/enrollCourse' ,enrollCourse);

app.listen(3000, function() {
    console.log("Server started on port 3000");
});