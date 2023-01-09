import { db } from '../firebase.js';
import bp from 'body-parser';
import express from 'express';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const readAllCourses = async (req ,res) => { 
    const { classOfCourse ,page } = req.body;
    const coursesRef = db.collection('courses');
    const snapshot = await coursesRef.orderBy('title').get();
    if (snapshot.empty) {
        console.log('No matching documents.');
    }  
    const output = []
    for(let i=5*(Number(page)-1);i<=Math.min((Number(page)*5)-1 ,snapshot.docs.length-1);i++){
        output.push(snapshot.docs[i].data())
    }
    res.send(output);
}