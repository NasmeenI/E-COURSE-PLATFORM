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
    const newuserID = await getuid(userID);
    if(newuserID.error){  
        res.send({ error : newuserID.error.message });
        return ;
    }
    const collection = await checkCollection(newuserID.uid)
    if(collection == "instructor"){
        const students = await getField(courseID ,'students');
        students.forEach(student => {
            removeFieldArray(student ,'courses' ,courseID);
        });
        removeFieldArray(newuserID.uid ,'courses' ,courseID);
        db.collection('courses').doc(courseID).delete();
    }
    else if(collection == "student"){
        removeFieldArray(courseID ,'students' ,newuserID.uid); 
        removeFieldArray(newuserID.uid ,'courses' ,courseID);
    }
    res.send({ error: null });
}