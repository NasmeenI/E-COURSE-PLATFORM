import { db } from '../firebase.js';
import bp from 'body-parser';
import express from 'express';
import { getField ,checkCollection ,removeFieldArray } from '../method.js';
import { getuid } from '../uid.js';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const removeCourse = async (req ,res) => { 
    const { userID ,courseID } = req.body;
    userID = getuid(userID);
    const collection = await checkCollection(userID)
    if(collection == "instructor"){
        const students = await getField(courseID ,'students');
        students.forEach(student => {
            removeFieldArray(student ,'courses' ,courseID);
        });
        removeFieldArray(userID ,'courses' ,courseID);
        db.collection('courses').doc(courseID).delete();
    }
    else if(collection == "student"){
        removeFieldArray(courseID ,'students' ,userID); 
        removeFieldArray(userID ,'courses' ,courseID);
    }
    res.send('success');
}