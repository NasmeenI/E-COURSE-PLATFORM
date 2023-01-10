import { db } from '../firebase.js';
import bp from 'body-parser';
import express from 'express';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const readEachCourses = async (req ,res) => { 
    const { course ,type ,name } = req.body;
    const coursesRef = db.collection('courses');
    const snapshot = await coursesRef.where('title', '==', course).get();
    if (snapshot.empty) {
        console.log('No matching documents.');
    }  

    let output = snapshot.docs[0].data()
    if(type != 'instructor') output.students = null
    res.send(output);
}