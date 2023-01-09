import { db } from '../firebase.js';
import bp from 'body-parser';
import express from 'express';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const readCoursesInstructor = async (req ,res) => { 
    try{
        const { instructor } = req.body;
        const instructorRef = db.collection('instructor').doc(instructor);
        const doc = await instructorRef.get()
        if(!doc.exists){
            return res.sendStatus(400);
        }
        res.status(200).send(doc.data().courses);
    }
    catch(error) {
        res.send(error);
    }
}