import { db } from '../firebase.js';
import bp from 'body-parser';
import express from 'express';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const readAllCourses = async (req ,res) => { 
    const { classOfCourse } = req.body;
    const coursesRef = db.collection('courses');
    const snapshot = await coursesRef.where('class', '==', classOfCourse).get();
    if (snapshot.empty) {
        console.log('No matching documents.');
    }  

    snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
    });
    res.status(200).send("complete");
}