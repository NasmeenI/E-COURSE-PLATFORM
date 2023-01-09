import { db } from '../firebase.js';
import bp from 'body-parser';
import express from 'express';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const enrollCourse = async (req ,res) => { 
    try{
        // read old courses from database 
        const peopleRef = db.collection('courses').doc('SJri6hRBQDeHKoClWVGE');
        const doc = await peopleRef.get()
        if(!doc.exists){
            return res.sendStatus(400);
        }
        const oldCourses = doc.data().courses;

        // add new courses
        const { newCourse } = req.body;
        const newCourses = oldCourses;
        newCourses.push(newCourse);
        const res2 = await peopleRef.set({
            ["courses"] : newCourses
        })
        res.status(200).send(newCourses);
    }
    catch(error) {
        res.send(error);
    }
}