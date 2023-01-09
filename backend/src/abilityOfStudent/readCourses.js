import { db } from '../firebase.js';
import bp from 'body-parser';
import express from 'express';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const readCourses = async (req ,res) => { 
    try{
        const studentRef = db.collection('student').doc('PmzuI3FMlZ7yxjZdOoYt');
        const doc = await studentRef.get()
        if(!doc.exists){
            return res.sendStatus(400);
        }
        res.status(200).send(doc.data().courses);
    }
    catch(error) {
        res.send(error);
    }
}