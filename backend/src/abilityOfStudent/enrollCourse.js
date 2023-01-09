import { db } from '../firebase.js';
import bp from 'body-parser';
import express from 'express';

const app = express();

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

export const enrollCourse = async (req ,res) => { 
    try{
        const { student ,course } = req.body;

        // read old courses from database 
        const studentRef = db.collection('student').doc(student);
        const docStudent = await studentRef.get()
        if(!docStudent.exists){
            return res.sendStatus(400);
        }
        const oldCourses = docStudent.data().courses;
        
        // add new course in student's data
        const newCourses = oldCourses;
        newCourses.push(course);
        const res2 = await studentRef.set({
            ["courses"] : newCourses
        })
        console.log('213');
        
        // read old student from database 
        const courseRef = db.collection('courses').doc(course);
        const docCourse = await courseRef.get()
        if(!docCourse.exists){
            return docCourse.sendStatus(400);
        }
        const oldStudents = docCourse.data().students;

        // add new student in course's data
        const newStudents = oldStudents;
        newStudents.push(student);
        const res3 = await courseRef.set({
            ["students"] : newStudents
        })
        res.status(200).send("enroll new course complete");
    }
    catch(error) {
        res.send(error);
    }
}