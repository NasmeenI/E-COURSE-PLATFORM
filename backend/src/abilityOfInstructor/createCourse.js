import { db } from '../firebase.js';
import bp from 'body-parser';
import express from 'express';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const createCourse = async (req ,res) => { 
    try{
        // add in courses
        const { class1 ,title ,description ,instructorName } = req.body;
        const courseRef = db.collection('courses').doc(title);
        const res2 = await courseRef.set({
            "title" : title,
            "description" : description,
            "instructorName" : instructorName,
            "class" : class1,
            "students" : []
        })
        console.log("create course completed")

        // add in instructor
        const instructorRef = db.collection('instructor').doc(instructorName);
        const docInstructor = await instructorRef.get()
        if(!docInstructor.exists){
            return docInstructor.sendStatus(400);
        }
        const oldCourses = docInstructor.data().courses;

        const newCourses = oldCourses
        newCourses.push(title);
        const res3 = await instructorRef.set({
            ["courses"] : newCourses
        })
        res.status(200).send("complete");
    }
    catch(error) {
        res.send(error);
    }
}