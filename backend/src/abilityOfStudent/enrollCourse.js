import { db } from '../firebase.js';
import bp from 'body-parser';
import express from 'express';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const enrollCourse = async (req ,res) => { 
    try{
        // read old courses from database 
        const studentRef = db.collection('student').doc('PmzuI3FMlZ7yxjZdOoYt');
        const docStudent = await studentRef.get()
        if(!docStudent.exists){
            return res.sendStatus(400);
        }
        const oldCourses = docStudent.data().courses;

        // add new course in student's data
        const { newCourse } = req.body;
        const newCourses = oldCourses;
        newCourses.push(newCourse);
        const res2 = await studentRef.set({
            ["courses"] : newCourses
        })

        // read old student from database 
        const courseRef = db.collection('courses').doc('SJri6hRBQDeHKoClWVGE');
        const docCourse = await courseRef.get()
        if(!docCourse.exists){
            return docCourse.sendStatus(400);
        }
        const oldStudents = docCourse.data().students;

        // add new student in course's data
        const { newStudent } = req.body;
        const newStudents = oldStudents;
        newStudents.push(newStudent);
        const res3 = await courseRef.set({
            ["students"] : newStudents
        })
        res.status(200).send("enroll new course complete");
    }
    catch(error) {
        res.send(error);
    }
}