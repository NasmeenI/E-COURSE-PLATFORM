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
        const doc = await studentRef.get()
        if(!doc.exists){
            return res.sendStatus(400);
        }
        const oldCourses = doc.data().courses;

        // add new course in student's data
        const { newCourse } = req.body;
        const newCourses = oldCourses;
        newCourses.push(newCourse);
        const res2 = await studentRef.set({
            ["courses"] : newCourses
        })
        res.status(200).send(newCourses);

        // add student's data in course
    }
    catch(error) {
        res.send(error);
    }
}